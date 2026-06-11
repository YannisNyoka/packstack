import styles from './Testimonials.module.css'

const testimonials = [
  {
    initials: 'AK',
    name: 'Amara Khumalo',
    role: 'CEO, FinFlow Technologies',
    quote:
      'PackStack rebuilt our entire platform in under 3 weeks. The speed, quality, and communication were unlike anything we had experienced with other agencies.',
  },
  {
    initials: 'TN',
    name: 'Thabo Ndlovu',
    role: 'Marketing Director, MediCare SA',
    quote:
      'Our Google rankings went from page 4 to position 2 within 4 months. The SEO team knows exactly what they are doing — real results, not vanity metrics.',
  },
  {
    initials: 'LP',
    name: 'Lerato Patel',
    role: 'Founder, BrandLift Agency',
    quote:
      'They grew our Instagram from 2K to 50K followers in 3 months. The content quality and ad strategy were exceptional. PackStack is our long-term partner.',
  },
]

export default function Testimonials() {
  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.header}>
        <div className={styles.label}>Client Love</div>
        <h2 className={styles.title}>What Our Clients Say</h2>
        <p className={styles.sub}>
          Don't just take our word for it — here's what the people who've
          worked with us think.
        </p>
      </div>

      <div className={styles.grid}>
        {testimonials.map(t => (
          <div key={t.name} className={styles.card}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.quote}>"{t.quote}"</p>
            <div className={styles.author}>
              <div className={styles.avatar}>{t.initials}</div>
              <div>
                <div className={styles.name}>{t.name}</div>
                <div className={styles.role}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}