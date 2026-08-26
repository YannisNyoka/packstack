import LegalPage from '../components/LegalPage/LegalPage'
import { useSEO } from '../hooks/useSEO'

export default function Privacy() {
  useSEO({
    title: 'Privacy Policy',
    description: 'How PackStack collects, uses, and protects personal information for marketing site visitors, tenant businesses, and their end customers, in line with POPIA.',
    path: '/privacy',
  })

  return (
    <LegalPage title="Privacy Policy" lastUpdated="8 August 2026">
      <p>
        PackStack ("PackStack", "we", "us") builds business software for South African
        companies, currently the Booking Appointment app for salons and service businesses,
        alongside custom web/app/SEO/social media project work. This policy explains what
        personal information we collect, why, and what rights you have over it.
      </p>

      <h2>1. Who this applies to</h2>
      <p>This policy covers three different groups of people, because we handle their data differently:</p>
      <ul>
        <li><strong>Visitors</strong> to this marketing site (packstack.co.za).</li>
        <li>
          <strong>Tenant accounts</strong> - the salons and service businesses who use the
          PackStack dashboard, and their staff.
        </li>
        <li>
          <strong>End customers</strong> - the people who book appointments through a tenant's
          public booking page. For this group, the tenant business is the data controller and
          PackStack acts as their data processor - see section 5.
        </li>
      </ul>

      <h2>2. What we collect</h2>
      <h3>Marketing site visitors</h3>
      <ul>
        <li>
          Contact form submissions: name, email, the type of work you're enquiring about, and
          your message. Stored so we can reply to you.
        </li>
        <li>
          Optional analytics (Google Analytics), only loaded if you click "Accept" on the
          cookie banner and only if we've configured it - see section 6.
        </li>
      </ul>
      <h3>Tenant accounts (business owners and staff)</h3>
      <ul>
        <li>Account email address and a securely hashed password (we never store your password in plain text).</li>
        <li>Business details you enter: business name, tagline, logo/banner, brand colors, contact info, social links.</li>
        <li>
          Credentials for third-party integrations you connect (WhatsApp via WATI, email via
          Resend, payments via Yoco) - encrypted at rest, never stored in plain text.
        </li>
        <li>Billing information for your PackStack subscription, processed by PayFast - we don't store your card details.</li>
      </ul>
      <h3>End customers (booked through a tenant's page)</h3>
      <ul>
        <li>Name, phone number, and optionally email, provided at booking time.</li>
        <li>Booking history, appointment notes, and loyalty points recorded by the business.</li>
        <li>
          Deposit payment details if the business requires one - processed directly by Yoco;
          PackStack stores only the payment status and amount, never card details.
        </li>
      </ul>

      <h2>3. Why we collect it</h2>
      <ul>
        <li>To operate the booking system: scheduling, confirmations, reminders, and managing your account.</li>
        <li>To respond to enquiries made through the contact form.</li>
        <li>To process subscription billing and deposit payments.</li>
        <li>To send booking confirmations and appointment reminders over WhatsApp and/or email, where a business has connected those channels.</li>
        <li>To improve the site, if you've consented to analytics.</li>
      </ul>

      <h2>4. Who we share it with</h2>
      <p>We use the following third-party service providers to run PackStack. Each only receives the data it needs to do its job:</p>
      <ul>
        <li><strong>MongoDB Atlas</strong> - database hosting for all application data.</li>
        <li><strong>Cloudinary</strong> - hosts logo/banner images tenants upload for their branding.</li>
        <li><strong>PayFast</strong> - processes PackStack subscription billing.</li>
        <li><strong>Yoco</strong> - processes end-customer deposit payments, connected individually by each tenant.</li>
        <li><strong>WATI</strong> - sends WhatsApp booking confirmations and reminders, where connected.</li>
        <li><strong>Resend</strong> - sends email booking confirmations and reminders, where connected.</li>
        <li><strong>Google Analytics</strong> - optional, only if you've consented to cookies and we've configured it.</li>
      </ul>
      <p>We do not sell personal information to anyone.</p>

      <h2>5. If you're a tenant business: your responsibilities</h2>
      <p>
        When you collect your own customers' information through your PackStack booking page,
        you are the data controller for that information under South Africa's Protection of
        Personal Information Act (POPIA) - PackStack is your data processor, acting only on
        your instructions (via the platform's normal functionality). You're responsible for
        having a lawful basis to collect your customers' information, being transparent with
        them about how you use it, and complying with POPIA and any other laws that apply to
        your business.
      </p>

      <h2>6. Cookies and local storage</h2>
      <p>
        The marketing site uses your browser's local storage (not a traditional cookie) to
        remember whether you've accepted or declined cookies, so we don't ask again every
        visit. If you click "Accept," and only then, we may load Google Analytics to
        understand site traffic - if you click "Decline," no analytics script loads at all.
      </p>
      <p>
        The PackStack dashboard uses one essential, httpOnly session cookie to keep you logged
        in. It's required for the product to function and isn't used for tracking or
        advertising.
      </p>

      <h2>7. How long we keep it</h2>
      <p>
        We keep account and business data for as long as your account is active, plus a
        reasonable period afterward for legal, accounting, or dispute-resolution purposes.
        Contact form submissions are kept until we've resolved the enquiry and for a reasonable
        period after. You can ask us to delete your data sooner - see section 9.
      </p>

      <h2>8. Security</h2>
      <ul>
        <li>Passwords are hashed with argon2, never stored in plain text.</li>
        <li>Third-party integration credentials (WhatsApp, email, payment provider keys) are encrypted at rest.</li>
        <li>Each business's data is isolated from every other business on the platform.</li>
        <li>Access to the dashboard requires an authenticated session.</li>
      </ul>
      <p>No system is 100% secure, but we take reasonable technical measures to protect your information.</p>

      <h2>9. Your rights under POPIA</h2>
      <p>If you're in South Africa (or otherwise covered by POPIA), you have the right to:</p>
      <ul>
        <li>Ask what personal information we hold about you.</li>
        <li>Ask us to correct inaccurate information.</li>
        <li>Ask us to delete your information, subject to legal retention requirements.</li>
        <li>Object to how we're processing your information.</li>
        <li>Lodge a complaint with South Africa's Information Regulator if you believe we've mishandled your data.</li>
      </ul>
      <p>To exercise any of these, contact us using the details in section 11. If your data was collected by a tenant business (you booked an appointment with them), you may also need to contact that business directly, since they control that data.</p>

      <h2>10. Children</h2>
      <p>
        PackStack accounts (tenant owners and staff) are intended for business use by adults.
        We don't knowingly collect account information from children. A tenant's booking page
        may be used by customers of any age depending on the services offered by that
        business.
      </p>

      <h2>11. Contact us</h2>
      <p>
        Questions about this policy, or want to exercise your rights above? Email{' '}
        <a href="mailto:packstack36@gmail.com">packstack36@gmail.com</a> or call{' '}
        <a href="tel:+27782685826">+27 78 268 5826</a>. We're based in Johannesburg, South
        Africa.
      </p>

      <h2>12. Changes to this policy</h2>
      <p>
        If we change how we handle personal information, we'll update this page and change the
        "Last updated" date at the top.
      </p>
    </LegalPage>
  )
}
