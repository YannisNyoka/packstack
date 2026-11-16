import { useState } from 'react'
import { Section } from '../ui/Section'
import { Label } from '../ui/Label'
import { Button } from '../ui/Button'
import { CONTACT_EMAIL, WHATSAPP_NUMBER } from '../../lib/constants'
import styles from './Contact.module.css'

const SERVICE_OPTIONS = [
  { value: '', label: 'Select an option…' },
  { value: 'packstack', label: 'Booking Appointment (Salon Booking Software)' },
  { value: 'web', label: 'Custom Web Development' },
  { value: 'app', label: 'Custom App Development' },
  { value: 'seo', label: 'SEO' },
  { value: 'social', label: 'Social Media' },
  { value: 'other', label: 'Something Else' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
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
      setForm({ name: '', email: '', phone: '', service: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section id="contact">
      <div className={styles.grid}>
        <div className={styles.left}>
          <Label>Contact</Label>
          <h2 className={styles.title}>Tell us what you need.</h2>

          {status === 'success' ? (
            <p className={styles.success}>Thanks, we'll be in touch within one working day.</p>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    className={styles.input}
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    className={styles.input}
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="contact-phone">Phone (optional)</label>
                <input
                  id="contact-phone"
                  className={styles.input}
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="contact-service">What do you need?</label>
                <select
                  id="contact-service"
                  className={styles.input}
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                >
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  className={`${styles.input} ${styles.textarea}`}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>

              {status === 'error' && (
                <p className={styles.errorMsg}>Something went wrong. Please try again or email us directly.</p>
              )}

              <Button type="submit" disabled={status === 'loading'} className={styles.submitBtn}>
                {status === 'loading' ? 'Sending…' : 'Send message'}
              </Button>
            </form>
          )}
        </div>

        <div className={styles.right}>
          <dl className={styles.infoList}>
            <div className={styles.infoRow}>
              <dt>Email</dt>
              <dd><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></dd>
            </div>
            <div className={styles.infoRow}>
              <dt>WhatsApp</dt>
              <dd>{WHATSAPP_NUMBER}</dd>
            </div>
            <div className={styles.infoRow}>
              <dt>Location</dt>
              <dd>Johannesburg, South Africa</dd>
            </div>
            <div className={styles.infoRow}>
              <dt>Response time</dt>
              <dd>We reply within one working day.</dd>
            </div>
          </dl>
        </div>
      </div>
    </Section>
  )
}
