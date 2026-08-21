import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
let clientPromise

if (!uri) {
  console.warn('MONGODB_URI not set — form will not save to DB')
} else {
  const client = new MongoClient(uri)
  clientPromise = client.connect()
}

const RESEND_API_URL = 'https://api.resend.com/emails'
const CONTACT_EMAIL_TO = process.env.CONTACT_EMAIL_TO || 'packstack36@gmail.com'
// Resend's shared sandbox sender - works with no domain verification, but
// swap CONTACT_FROM_EMAIL to something on a verified packstack.co.za domain
// once one's set up in the Resend dashboard, for better deliverability.
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'PackStack <onboarding@resend.dev>'

const SERVICE_LABELS = {
  packstack: 'Booking Appointment (Salon Booking Software)',
  web: 'Custom Web Development',
  app: 'Custom App Development',
  seo: 'SEO',
  social: 'Social Media',
  other: 'Something Else',
}

// Best-effort - a Resend outage must never fail the form submission when the
// lead itself was already saved to MongoDB below.
async function sendNotificationEmail(submission) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn('RESEND_API_KEY not set — contact form will not send an email notification')
    return
  }
  try {
    const res = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: CONTACT_EMAIL_TO,
        reply_to: submission.email,
        subject: `New contact form lead - ${submission.name}`,
        html: `
          <p><strong>Name:</strong> ${submission.name}</p>
          <p><strong>Email:</strong> ${submission.email}</p>
          <p><strong>What they need:</strong> ${SERVICE_LABELS[submission.service] || submission.service}</p>
          <p><strong>Message:</strong></p>
          <p>${submission.message.replace(/\n/g, '<br>')}</p>
        `,
      }),
      signal: AbortSignal.timeout(8000),
    })
    if (!res.ok) {
      const body = await res.text().catch(() => '')
      throw new Error(`Resend request failed (${res.status}): ${body}`)
    }
  } catch (err) {
    console.error('Contact form email notification failed:', err.message)
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, service, message } = req.body

  if (!name || !email || !service || !message) {
    return res.status(400).json({ error: 'All fields are required.' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' })
  }

  const submission = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    service,
    message: message.trim(),
    createdAt: new Date(),
  }

  try {
    if (clientPromise) {
      const mongoClient = await clientPromise
      const db = mongoClient.db('packstack')
      await db.collection('contacts').insertOne(submission)
    }
    await sendNotificationEmail(submission)
    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Contact error:', err)
    return res.status(500).json({ error: 'Server error. Please try again.' })
  }
}