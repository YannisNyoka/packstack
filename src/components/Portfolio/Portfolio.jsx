import styles from './Portfolio.module.css'

const projects = [
  {
    id: 1,
    title: 'NXL Beauty Bar',
    category: 'Nails · Hair · Beauty Booking Site',
    url: 'https://www.nxlbeautybar.co.za',
    image: '/nxl-beauty-bar.png',
  },
  {
    id: 2,
    title: 'HalfSec',
    category: 'E-Commerce · Second-Hand Marketplace',
    url: 'https://www.halfsec.co.za',
    image: '/halfsec.png',
  },
]

export default function Portfolio() {
  return (
    <section className={styles.section} id="portfolio">
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.label}>Our Work</div>
          <h2 className={styles.title}>Projects We're Proud Of</h2>
        </div>
      </div>

      <div className={styles.grid}>
        {projects.map(p => (
         <a 
            key={p.id}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div className={styles.imgWrap}>
              <img src={p.image} alt={p.title} className={styles.thumb} />
              <div className={styles.overlay}>
                <div className={styles.info}>
                  <h4 className={styles.infoTitle}>{p.title}</h4>
                  <p className={styles.infoSub}>{p.category}</p>
                  <span className={styles.visitLink}>Visit site →</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}