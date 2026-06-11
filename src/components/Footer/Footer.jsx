import styles from './Footer.module.css'

const footerLinks = {
  Services: [
    'Web Development',
    'App Development',
    'SEO',
    'Social Media',
  ],
  Company: [
    'About Us',
    'Our Work',
    'Blog',
    'Careers',
  ],
  Contact: [
    'hello@packstack.co.za',
    '+27 11 000 0000',
    'Johannesburg, SA',
  ],
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>

        <div className={styles.brand}>
          <div className={styles.logo}>
            Pack<span>Stack</span>
          </div>
          <p>
            A results-driven IT company delivering web development, mobile
            apps, SEO and social media growth for ambitious brands.
          </p>
          <div className={styles.socials}>
            <a href="#" className={styles.socialLink} aria-label="LinkedIn">in</a>
            <a href="#" className={styles.socialLink} aria-label="Twitter">𝕏</a>
            <a href="#" className={styles.socialLink} aria-label="Instagram">ig</a>
          </div>
        </div>

        {Object.entries(footerLinks).map(([heading, items]) => (
          <div key={heading} className={styles.col}>
            <h5>{heading}</h5>
            <ul>
              {items.map(item => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} PackStack. All rights reserved.</p>
        <div className={styles.bottomLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}