import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
let clientPromise

if (!uri) {
  console.warn('MONGODB_URI not set — form will not save to DB')
} else {
  const client = new MongoClient(uri)
  clientPromise = client.connect()
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
    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Contact error:', err)
    return res.status(500).json({ error: 'Server error. Please try again.' })
  }
}