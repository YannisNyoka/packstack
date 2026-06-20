import { useEffect } from 'react'
import styles from './ProjectModal.module.css'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!project) return null

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <div>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.sub}>{project.category}</p>
          </div>
          <div className={styles.actions}>
            
            <a  href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.openBtn}
            >
              Open in new tab ↗
            </a>
            <button className={styles.closeBtn} onClick={onClose} aria-label="Close preview">
              ✕
            </button>
          </div>
        </div>

        <div className={styles.frameWrap}>
          <iframe
            src={project.url}
            title={project.title}
            className={styles.iframe}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
          <div className={styles.fallback}>
            <p>If the preview doesn't load, the site may block embedding.</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.fallbackBtn}>
              Visit {project.title} directly →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}