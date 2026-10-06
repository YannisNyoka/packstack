// Shared between FAQ.jsx (the visible accordion) and SalonBooking.jsx
// (which builds FAQPage JSON-LD from this same array) - kept in its own
// file so FAQ.jsx can stay a components-only export (react-refresh/
// only-export-components forbids mixing a component default export with a
// named data export in the same file).
export const faqs = [
  {
    q: 'Is there a free trial?',
    a: 'Yes — every new business gets 14 days of free access to the entire system. You\'ll add your card when you sign up, but you won\'t be charged a cent until the trial ends, and you can cancel anytime before then. After that it\'s R99/month.',
  },
  {
    q: 'Do I need any technical skills to set this up?',
    a: 'No. We provision your account and load in your services, staff and working hours for you — you get a ready-to-use booking page and dashboard from day one.',
  },
  {
    q: 'Can customers pay a deposit when they book?',
    a: 'If you connect Yoco, yes — you can require a deposit at booking time so customers have skin in the game before they arrive. It\'s optional and off by default.',
  },
  {
    q: 'Do customers need to create an account to book?',
    a: 'No. Customers book from a public page with no login, and manage their own booking (reschedule or cancel) via a secure link sent over WhatsApp or email.',
  },
  {
    q: 'Can I use my own domain instead of a packstack.co.za subdomain?',
    a: 'Yes — point your existing domain at your booking page once it\'s verified, included on the plan.',
  },
  {
    q: "What if my business isn't a salon?",
    a: 'Right now the platform is built around salon-style service businesses — bookings, staff and services. More business types are on the roadmap, so get in touch if you want to be first in line for yours.',
  },
  {
    q: 'Can you also build me something custom?',
    a: 'Yes — outside the platform, our team still takes on bespoke web, app, SEO and social media projects, the same way we built PackStack itself. See "Custom Digital Work" below or get in touch.',
  },
  {
    q: 'Do you work with clients outside South Africa?',
    a: 'For custom project work, absolutely — we work with clients across Africa, Europe and beyond over video calls, email and project management tools. The PackStack platform itself is priced in ZAR for South African businesses.',
  },
]
