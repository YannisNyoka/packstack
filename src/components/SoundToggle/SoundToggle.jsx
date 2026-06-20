import { useState, useEffect } from 'react'
import styles from './SoundToggle.module.css'

export default function SoundToggle() {
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('packstack_sound')
    if (saved !== null) {
      setEnabled(saved === 'true')
    }
  }, [])

  const toggle = () => {
    const newVal = !enabled
    setEnabled(newVal)
    localStorage.setItem('packstack_sound', newVal)
    window.dispatchEvent(new CustomEvent('packstack-sound-toggle', { detail: newVal }))
  }

  return (
    <button
      className={styles.btn}
      onClick={toggle}
      aria-label={enabled ? 'Mute sound effects' : 'Enable sound effects'}
      title={enabled ? 'Sound on' : 'Sound off'}
    >
      {enabled ? '🔊' : '🔇'}
    </button>
  )
}