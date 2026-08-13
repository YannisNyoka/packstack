import { Settings, Laptop, Clock } from 'lucide-react'
import styles from './HowItWorks.module.css'
import Droplet from '../Droplet/Droplet'

const steps = [
  { icon: Settings, title: 'Set up your services' },
  { icon: Laptop, title: 'Clients book online' },
  { icon: Clock, title: 'Manage in real-time' },
]

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>How it Works</h2>
      <div className={styles.grid}>
        {steps.map((step, i) => {
          const Icon = step.icon
          return (
            <Droplet key={step.title} delay={i * 100}>
              <div className={styles.step}>
                <div className={styles.iconWrap}>
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <div className={styles.stepText}>
                  <span className={styles.stepNum}>{i + 1}.</span> {step.title}
                </div>
              </div>
            </Droplet>
          )
        })}
      </div>
    </section>
  )
}
