/**
 * The only icons on the site. Per the redesign brief: no Lucide/Heroicons/
 * emoji anywhere - typography, numbers and hairlines do that work instead.
 * The small set of genuinely functional icons (close, back-to-top, external
 * link) are hand-drawn as minimal 1.5px-stroke inline SVGs, all sharing the
 * same stroke weight and cap style so they read as one consistent mark.
 */

const STROKE = 1.5

export function IconClose({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true" {...props}>
      <path d="M3 3L15 15M15 3L3 15" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" />
    </svg>
  )
}

export function IconArrowUp({ size = 16, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path d="M8 13V3M3.5 7.5L8 3L12.5 7.5" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconExternal({ size = 14, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5.5 2.5H2.5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3M8.5 1.5H12.5V5.5M12 2L6.5 7.5"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
