// The superadmin-uploaded hero video/images (src/pages/.. via
// api/siteContent.js) are hosted on Cloudinary, which can transcode and
// recompress an already-uploaded asset on the fly via URL transformation
// flags - no re-upload needed. f_auto picks the smallest format the
// visitor's browser actually supports (e.g. WebM/AV1 instead of the
// original MP4), q_auto picks a visually-lossless-enough bitrate instead of
// serving the raw uploaded quality. This is the single biggest lever on
// "the video takes a moment to start" for that asset specifically.
// No-op (returns the URL unchanged) for anything not hosted on Cloudinary,
// e.g. the local /hero-videos/*.mp4 files SalonBooking's own Hero.jsx uses.
export function withAutoQuality(url) {
  if (!url || !url.includes('res.cloudinary.com') || !url.includes('/upload/')) return url
  if (url.includes('f_auto') || url.includes('q_auto')) return url
  return url.replace('/upload/', '/upload/f_auto,q_auto/')
}
