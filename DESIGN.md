# PackStack marketing site - design system

An editorial, Swiss-influenced studio aesthetic: calm, precise, left-aligned,
one accent colour, typography and hairlines doing the work icons and
gradients used to. This replaced a previous "AI-website" look (centred
cards, icon-in-coloured-squares, gradients, pill badges, scroll-triggered
fade-ins on everything). See the redesign audit in the project's commit/
conversation history for the full before list.

## Tokens (`src/styles/tokens.css`)

Everything lives in CSS custom properties. Never hardcode a hex value, a
pixel radius, or a spacing number in a component - pull it from a token.

- **Color**: `--paper` (bg), `--ink` (text/rules/primary buttons), `--ink-2`
  (secondary text), `--line` (hairlines), `--surface` (white, for forms and
  screenshot frames), `--accent` (`#D9480F`, the *only* accent - one use per
  screen: a link underline, an active state, a key number), `--night` (the
  one dark section).
- **Spacing scale**: `--space-1` (4px) through `--space-10` (128px).
- **Type**: `--font-display` (Fraunces), `--font-text` (IBM Plex Sans),
  `--font-mono` (IBM Plex Mono, for uppercase eyebrow labels and numbers).
- **Radius**: `--radius-sm` (4px), `--radius-md` (8px) - nothing rounder.
- **Motion**: `--motion-fast`/`--motion-slow` (150/200ms), zeroed under
  `prefers-reduced-motion`.

### Legacy block

`Hero.jsx` (SalonBooking page) and `PlatformHero.jsx` (Home page) were
explicitly left untouched in this pass - the site owner's call, not an
oversight. Both still read the *old* token names (`--blue`, `--navy`,
`--blue-light`, `--border`, `--bg-alt`, `--radius`, `--shadow*`), which are
kept at the bottom of `tokens.css` specifically for them. **Do not remove or
repurpose those names** - nothing else in the codebase reads them anymore.
`Portfolio.jsx`/`.module.css` is in the same boat (not yet redesigned - see
Known gaps below) and also depends on them.

## Primitives (`src/components/ui/`)

- `Container` - max-width + responsive side gutters.
- `Section` - vertical rhythm + a 1px top hairline (use `tone="night"` for
  the one dark section; `hairline={false}` to suppress it, e.g. right after
  a hero that already has its own visual break).
- `Label` - the mono uppercase eyebrow, optionally with a `number` prop
  (`<Label number="01">Products</Label>`) for a page's own numbered
  sequence. Shared sections (Contact) don't take a number - only
  page-specific sections that actually form a sequence do.
- `Button` - `variant="primary"` (solid ink), `"ghost"` (1px border),
  `"text"` (underline). Renders a react-router `Link`, an `<a>`, or a
  `<button>` depending on whether you pass `to`, `href`, or neither. Never
  append an arrow glyph to button text - say what it does and stop.
- `ScreenshotFrame` - thin border, optional minimal browser-bar or phone
  chrome, no shadows/reflections. Use it for every real product screenshot.
- `Icons.jsx` - the *only* icons on the site: hand-drawn 1.5px-stroke SVGs
  for close/back-to-top/external-link. No Lucide, no emoji, anywhere else.
  (The one exception: `Signup.jsx` keeps Lucide's `Check`/`Loader2` as
  functional state indicators on the critical, PayFast-connected signup
  flow - deliberately left alone rather than risk that flow.)

## Numbered sections

Each page that has a real sequence of sections numbers them locally with
`<Label number="01">`:

- **SalonBooking**: 01 Booking Appointment (Services) · 02 Process · 03
  Pricing · 04 FAQ
- **Home**: 01 Products (AppGrid)

Shared sections used across multiple pages (`Contact`, `Footer`) don't
carry a number - there's no single global sequence that would stay correct
on every page that includes them.

## Copy rules

Plain, specific South African English. No "Ready to grow your business?",
no trailing arrows on buttons, no invented testimonials or client names -
the Home page's "Live on PackStack" proof strip only lists NXL Beauty Bar
and Halfsec because those are the only two confirmed, consented real
clients; add a name there only once it's actually confirmed.

## Contact details (`src/lib/constants.js`)

`CONTACT_EMAIL` is the real, working `packstack36@gmail.com` - shown
everywhere (Footer, Contact page, Privacy, Terms) and matches
`api/contact.js`'s `CONTACT_EMAIL_TO` default, so the displayed address and
where leads actually land agree. (The redesign brief's own draft suggested
a branded `hello@packstack.co.za` placeholder here; that mailbox doesn't
exist, so this was deliberately kept on the real address instead - a POPIA
rights request or a direct email must not go to a dead inbox.) Email
notifications still send via Resend's shared sandbox sender, not a
verified `packstack.co.za` domain - worth fixing once one's set up.

`CAL_LINK` is a real Cal.com 30-minute event link, used only by the
Navbar's "Book a call" button (desktop and mobile).

## Known gaps / deliberately deferred

- **Hero media** (`Hero.jsx`, `PlatformHero.jsx`): untouched, by explicit
  instruction. Both still show generic stock-style footage/photos rather
  than real product screenshots, which the brief's own rule ("drop a
  full-screen hero video unless it shows the real product") would otherwise
  flag. Revisit when there's appetite to touch the hero-media feature.
- **Portfolio depth** (`Portfolio.jsx`): untouched, by explicit instruction.
  Still the old visual style (centred label, rounded shadowed cards) and
  still just 2 thumbnail cards with no case-study detail (problem/solution/
  stack/result). The brief's "02 Work" case-study format was not applied.
- **Fonts are loaded from Google Fonts**, not self-hosted/subset woff2 as
  the brief's performance budget calls for. Fine functionally, but it's the
  right next step if the Lighthouse/JS-weight targets get audited for real.
- **No real product screenshots exist yet** anywhere in `public/` (admin
  calendar, mobile booking flow) - the Home page's "01 Products" section is
  text-only (a definition list) rather than screenshots + definition list,
  because fabricating a screenshot would be worse than not having one.
- **JSON-LD**: `Organization` + `LocalBusiness` + `SoftwareApplication` live
  on the Home page; `FAQPage` lives on SalonBooking. No per-page JSON-LD
  audit beyond that was done.
- **Lighthouse/JS-weight/WCAG AA were not formally measured** - the system
  is built to support hitting those (semantic HTML, visible focus rings,
  alt text on the one real screenshot grid that exists on `/portfolio`,
  skip link, hairlines instead of shadows, minimal JS) but nobody has run
  the actual audit tools against a deployed build yet.
