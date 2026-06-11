import styles from './Portfolio.module.css'

const projects = [
  {
    id: 1,
    title: 'FinFlow Dashboard',
    category: 'Web App · UI/UX · Development',
    big: true,
    accent: '#4FFFE0',
  },
  {
    id: 2,
    title: 'ShopNest Mobile',
    category: 'React Native · E-commerce',
    accent: '#3B82F6',
  },
  {
    id: 3,
    title: 'MediCare SEO',
    category: 'SEO · Content Strategy',
    accent: '#4FFFE0',
  },
  {
    id: 4,
    title: 'BrandLift Social',
    category: 'Social Media · Paid Ads',
    accent: '#E1306C',
  },
  {
    id: 5,
    title: 'EduPath Platform',
    category: 'Web Dev · LMS · UX Design',
    accent: '#8B5CF6',
  },
]

const glassPanel = {
  width: '100%',
  height: '100%',
  padding: '1.2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  background: 'transparent',
}

const MockUI = ({ id, accent }) => {
  if (id === 1) return (
    <div style={glassPanel}>
      <div style={{ display: 'flex', gap: 6 }}>
        <div style={{ width: 8, height: 8, background: '#FF5F57', borderRadius: '50%' }} />
        <div style={{ width: 8, height: 8, background: '#FFBD2E', borderRadius: '50%' }} />
        <div style={{ width: 8, height: 8, background: '#28CA41', borderRadius: '50%' }} />
      </div>
      <div style={{ height: 52, background: `linear-gradient(135deg, ${accent}44, #3B82F644)`, borderRadius: 8 }} />
      <div style={{ display: 'flex', gap: 6 }}>
        {[1, 2, 3].map(i => (
          <div key={i} style={{ flex: 1, height: 28, background: `rgba(255,255,255,${i === 1 ? 0.12 : 0.05})`, borderRadius: 6 }} />
        ))}
      </div>
      <div style={{ height: 14, background: 'rgba(255,255,255,0.08)', borderRadius: 4, width: '70%' }} />
      <div style={{ height: 10, background: 'rgba(255,255,255,0.04)', borderRadius: 4, width: '90%' }} />
      <div style={{ height: 10, background: 'rgba(255,255,255,0.04)', borderRadius: 4, width: '60%' }} />
    </div>
  )

  if (id === 2) return (
    <div style={glassPanel}>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        <div style={{ width: 24, height: 24, background: accent, borderRadius: 6 }} />
        <div style={{ width: 50, height: 8, background: 'rgba(255,255,255,0.12)', borderRadius: 4 }} />
      </div>
      <div style={{ height: 40, background: `linear-gradient(135deg, ${accent}44, #3B82F633)`, borderRadius: 8 }} />
      <div style={{ height: 8, background: 'rgba(255,255,255,0.08)', borderRadius: 4, width: '80%' }} />
      <div style={{ height: 8, background: 'rgba(255,255,255,0.05)', borderRadius: 4, width: '60%' }} />
      <div style={{ height: 24, background: accent, borderRadius: 100, width: 80 }} />
    </div>
  )

  if (id === 3) return (
    <div style={{ ...glassPanel, justifyContent: 'center' }}>
      <div style={{ fontFamily: 'Syne,sans-serif', fontSize: '0.6rem', fontWeight: 800, color: accent, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        SEO Growth
      </div>
      <div style={{ fontFamily: 'Syne,sans-serif', fontSize: '1.3rem', fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>
        +312%
        <br />
        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', fontWeight: 500 }}>organic traffic</span>
      </div>
      <div style={{ display: 'flex', gap: 3, alignItems: 'flex-end', height: 44 }}>
        {[30, 50, 65, 80, 100].map((h, i) => (
          <div key={i} style={{ flex: 1, background: `rgba(79,255,224,${0.2 + i * 0.15})`, borderRadius: '3px 3px 0 0', height: `${h}%` }} />
        ))}
      </div>
    </div>
  )

  if (id === 4) return (
    <div style={glassPanel}>
      <div style={{ display: 'flex', gap: 5 }}>
        {['#E1306C', '#0077B5', '#333'].map((c, i) => (
          <div key={i} style={{ width: 20, height: 20, background: c, borderRadius: 5 }} />
        ))}
      </div>
      <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)' }}>Followers gained in 90 days</div>
      <div style={{ fontFamily: 'Syne,sans-serif', fontSize: '1.2rem', fontWeight: 800, color: '#fff' }}>
        48,200<span style={{ color: accent }}>+</span>
      </div>
      <div style={{ height: 4, background: 'rgba(255,255,255,0.08)', borderRadius: 100, overflow: 'hidden' }}>
        <div style={{ width: '78%', height: '100%', background: accent, borderRadius: 100 }} />
      </div>
      <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)' }}>
        Engagement: <span style={{ color: accent }}>7.4%</span>
      </div>
    </div>
  )

  if (id === 5) return (
    <div style={glassPanel}>
      <div style={{ height: 32, background: `linear-gradient(90deg, ${accent}44, #3B82F633)`, borderRadius: 8 }} />
      <div style={{ display: 'flex', gap: 6 }}>
        <div style={{ flex: 1, height: 22, background: 'rgba(255,255,255,0.07)', borderRadius: 6 }} />
        <div style={{ flex: 1, height: 22, background: 'rgba(255,255,255,0.07)', borderRadius: 6 }} />
      </div>
      <div style={{ height: 14, background: 'rgba(255,255,255,0.05)', borderRadius: 4, width: '85%' }} />
      <div style={{ height: 10, background: 'rgba(255,255,255,0.03)', borderRadius: 4, width: '65%' }} />
      <div style={{ height: 22, background: accent, borderRadius: 8, width: 70 }} />
    </div>
  )

  return null
}

export default function Portfolio() {
  return (
    <section className={styles.section} id="portfolio">
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.label}>Our Work</div>
          <h2 className={styles.title}>Projects We're Proud Of</h2>
        </div>
        <button className={styles.btnOutline}>View All Work →</button>
      </div>

      <div className={styles.grid}>
        {projects.map(p => (
          <div key={p.id} className={`${styles.card} ${p.big ? styles.big : ''}`}>
            <div className={styles.imgWrap}>
              <MockUI id={p.id} accent={p.accent} />
              <div className={styles.overlay}>
                <div className={styles.info}>
                  <h4 className={styles.infoTitle}>{p.title}</h4>
                  <p className={styles.infoSub}>{p.category}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}