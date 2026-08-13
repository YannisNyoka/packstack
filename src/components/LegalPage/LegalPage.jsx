import styles from './LegalPage.module.css'
import Footer from '../Footer/Footer'

export default function LegalPage({ title, lastUpdated, children }) {
  return (
    <>
      <main className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.updated}>Last updated: {lastUpdated}</p>
        </div>

        <div className={styles.disclaimer}>
          <strong>Draft notice:</strong> This document was written to accurately reflect how
          PackStack actually handles data and operates today, based on the systems that run it -
          it has not been reviewed by a lawyer. If you're relying on this for a live product
          handling real customer data, have it reviewed by a qualified attorney familiar with
          South African law (including POPIA) before treating it as final.
        </div>

        <div className={styles.prose}>{children}</div>
      </main>
      <Footer />
    </>
  )
}
