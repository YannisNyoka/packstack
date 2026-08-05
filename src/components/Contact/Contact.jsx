import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setForm({ name: '', email: '', service: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className={styles.section} id="contact">
      <div className={styles.box}>
        <div className={styles.glow} />

        <div className={styles.label}>Let's Get You Started</div>
        <h2 className={styles.title}>Ready to Grow Your Business?</h2>
        <p className={styles.sub}>
          Tell us whether you want to get your business booking online with PackStack, or
          need something custom-built — we'll get back to you within 24 hours.
        </p>

        {status === 'success' ? (
          <div className={styles.successMsg}>
            <div className={styles.successIcon}>
              <CheckCircle2 size={28} strokeWidth={2} color="var(--blue)" />
            </div>
            <h3>Message Received!</h3>
            <p>Thanks for reaching out. We'll be in touch within 24 hours.</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Full Name</label>
                <input
                  className={styles.input}
                  type="text"
                  name="name"
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Email Address</label>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  placeholder="jane@company.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.fieldLabel}>What Do You Need?</label>
              <select
                className={styles.input}
                name="service"
                value={form.service}
                onChange={handleChange}
                required
              >
                <option value="">Select an option…</option>
                <option value="packstack">Booking Appointment (Salon Booking Software)</option>
                <option value="web">Custom Web Development</option>
                <option value="app">Custom App Development</option>
                <option value="seo">SEO</option>
                <option value="social">Social Media</option>
                <option value="other">Something Else</option>
              </select>
            </div>

            <div className={styles.field}>
              <label className={styles.fieldLabel}>Tell Us About Your Business</label>
              <textarea
                className={`${styles.input} ${styles.textarea}`}
                name="message"
                placeholder="What kind of business, and what you're looking for…"
                value={form.message}
                onChange={handleChange}
                rows={4}
                required
              />
            </div>

            {status === 'error' && (
              <p className={styles.errorMsg}>
                Something went wrong. Please try again or email us directly.
              </p>
            )}

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending…' : 'Send Message →'}
            </button>

            <p className={styles.note}>
              No commitment. No spam. Just a conversation.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}