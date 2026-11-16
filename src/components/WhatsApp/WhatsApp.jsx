import { useState } from 'react'
import { IconClose } from '../ui/Icons'
import { WHATSAPP_NUMBER_INTL } from '../../lib/constants'
import styles from './WhatsApp.module.css'

export default function WhatsApp() {
  const [tooltip, setTooltip] = useState(true)
  const message = "Hi PackStack! I'd like to discuss a project."
  const url = `https://wa.me/${WHATSAPP_NUMBER_INTL}?text=${encodeURIComponent(message)}`

  return (
    <div className={styles.wrap}>
      {tooltip && (
        <div className={styles.tooltip}>
          <span>Chat with us</span>
          <button className={styles.close} onClick={() => setTooltip(false)} aria-label="Dismiss">
            <IconClose size={12} />
          </button>
        </div>
      )}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.btn}
        aria-label="Chat on WhatsApp"
        onClick={() => setTooltip(false)}
      >
        WhatsApp
      </a>
    </div>
  )
}
