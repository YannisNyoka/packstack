import styles from './Process.module.css'
import Droplet from '../Droplet/Droplet'

const steps = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    desc: 'We dig into your goals, audience, and market to craft a tailored roadmap before a single line of code is written.',
  },
  {
    num: '02',
    title: 'Design & Prototype',
    desc: 'Wireframes and interactive prototypes that get stakeholder buy-in early, cutting revision time downstream.',
  },
  {
    num: '03',
    title: 'Build & Integrate',
    desc: "Clean, maintainable code. We build in sprints with full transparency — you always know what's shipped.",
  },
  {
    num: '04',
    title: 'Launch & Grow',
    desc: 'Deployment, QA, performance tuning — and ongoing growth support so your product keeps improving post-launch.',
  },
]

const bars = [
  { label: 'Organic Traffic', value: '+240%', width: '82%' },
  { label: 'Conversion Rate', value: '+95%', width: '65%' },
  { label: 'Page Speed Score', value: '98/100', width: '95%' },
  { label: 'Social Engagement', value: '+180%', width: '73%' },
]

const metrics = [
  { num: '14', suffix: 'd', label: 'Avg. MVP delivery' },
  { num: '3', suffix: 'x', label: 'Faster than agency avg.' },
  { num: '24', suffix: '/7', label: 'Monitoring & support' },
  { num: '100', suffix: '%', label: 'On-time delivery rate' },
]

export default function Process() {
  return (
    <section className={styles.section} id="process">
      <div className={styles.inner}>
        <Droplet>
          <div className={styles.left}>
            <div className={styles.label}>Our Process</div>
            <h2 className={styles.title}>How We Turn Ideas Into Reality</h2>
            <p className={styles.sub}>
              A clear, proven process means no surprises — just consistent
              delivery at every stage.
            </p>
            <div className={styles.steps}>
              {steps.map(s => (
                <div key={s.num} className={styles.step}>
                  <div className={styles.stepNum}>{s.num}</div>
                  <div>
                    <h4 className={styles.stepTitle}>{s.title}</h4>
                    <p className={styles.stepDesc}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Droplet>

        <Droplet delay={200}>
          <div className={styles.visual}>
            <div className={styles.vizTitle}>Typical Project Outcomes</div>
            {bars.map(b => (
              <div key={b.label} className={styles.barRow}>
                <div className={styles.barLabels}>
                  <span>{b.label}</span>
                  <span className={styles.barValue}>{b.value}</span>
                </div>
                <div className={styles.barBg}>
                  <div className={styles.barFill} style={{ width: b.width }} />
                </div>
              </div>
            ))}
            <div className={styles.metricsGrid}>
              {metrics.map(m => (
                <div key={m.label} className={styles.metricCard}>
                  <div className={styles.metricNum}>
                    {m.num}<span>{m.suffix}</span>
                  </div>
                  <div className={styles.metricLabel}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Droplet>
      </div>
    </section>
  )
}