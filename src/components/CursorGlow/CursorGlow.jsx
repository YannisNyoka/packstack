import { useEffect, useRef } from 'react'
import styles from './CursorGlow.module.css'

export default function CursorGlow() {
  const glowRef = useRef(null)
  const dotRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Hide on touch devices
    if ('ontouchstart' in window) return

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener('mousemove', onMove)

    let frame
    const animate = () => {
      current.current.x += (pos.current.x - current.current.x) * 0.08
      current.current.y += (pos.current.y - current.current.y) * 0.08

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${current.current.x - 200}px, ${current.current.y - 200}px)`
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`
      }

      frame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      <div ref={glowRef} className={styles.glow} />
      <div ref={dotRef} className={styles.dot} />
    </>
  )
}