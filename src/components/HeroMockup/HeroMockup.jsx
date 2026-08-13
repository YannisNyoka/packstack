import { Check } from 'lucide-react'
import styles from './HeroMockup.module.css'

export default function HeroMockup() {
  return (
    <div className={styles.wrap}>
      <div className={styles.monitor}>
        <div className={styles.screen}>
          <div className={styles.screenHeader}>
            <div className={styles.trafficDots}>
              <span /><span /><span />
            </div>
            <div className={styles.screenTitle}>Salon Booking</div>
          </div>
          <div className={styles.screenBody}>
            <div className={styles.profileCard}>
              <div className={styles.avatar} />
              <div>
                <div className={styles.profileName}>Stylist Profile</div>
                <div className={styles.profileSub}>Choose your service</div>
              </div>
            </div>
            <div className={styles.calendarRow}>
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((d, i) => (
                <div key={d} className={`${styles.calendarCell} ${i === 2 ? styles.calendarCellActive : ''}`}>{d}</div>
              ))}
            </div>
            <div className={styles.slotList}>
              <div className={styles.slot}>
                <span className={styles.slotBar} style={{ width: '55%' }} />
              </div>
              <div className={`${styles.slot} ${styles.slotActive}`}>
                <span className={styles.slotBar} style={{ width: '75%' }} />
                <span className={styles.slotButton}>Book</span>
              </div>
              <div className={styles.slot}>
                <span className={styles.slotBar} style={{ width: '40%' }} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.monitorNeck} />
        <div className={styles.monitorBase} />
      </div>

      <div className={styles.phone}>
        <div className={styles.phoneNotch} />
        <div className={styles.phoneHeader}>PackStack</div>
        <div className={styles.phoneCard}>
          <div className={styles.phoneCheck}>
            <Check size={18} strokeWidth={3} />
          </div>
          <div className={styles.phoneCardTitle}>Booking Confirmed</div>
          <div className={styles.phoneCardSub}>Wed, 25 Sep 2026 · 10:00</div>
        </div>
        <div className={styles.phoneBtn}>Book Now</div>
      </div>

      <div className={styles.saBadge}>🇿🇦 Built in Cape Town, South Africa</div>
    </div>
  )
}
