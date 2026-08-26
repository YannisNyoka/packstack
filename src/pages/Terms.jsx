import LegalPage from '../components/LegalPage/LegalPage'
import { useSEO } from '../hooks/useSEO'

export default function Terms() {
  useSEO({
    title: 'Terms of Service',
    description: 'The terms governing your use of the PackStack platform and any custom digital work PackStack takes on.',
    path: '/terms',
  })

  return (
    <LegalPage title="Terms of Service" lastUpdated="26 August 2026">
      <p>
        These terms govern your use of PackStack's software platform (currently the Booking
        Appointment app, with more apps planned) and, separately, any custom digital work
        (web, app, SEO, or social media projects) we take on. By using PackStack or engaging
        us for custom work, you agree to these terms.
      </p>

      <h2>1. The service</h2>
      <p>
        PackStack is a multi-tenant business software platform. Today it includes Booking
        Appointment - online booking, staff scheduling, customer and loyalty management,
        deposit payments, and related tools for service businesses. You can sign up for an
        account ("tenant") yourself at any time, or we can set one up for you directly.
      </p>
      <p>
        Custom digital work - bespoke web development, app development, SEO, or social media
        management - is separate from the platform and, where the scope is significant, may be
        governed by its own written agreement or statement of work in addition to these terms.
      </p>

      <h2>2. Accounts</h2>
      <p>
        A business ("tenant") gets an owner account when we provision it; the owner can then
        create staff accounts. You're responsible for keeping your login credentials
        confidential and for all activity under your account. Tell us immediately if you
        suspect unauthorized access.
      </p>

      <h2>3. Subscriptions and billing</h2>
      <ul>
        <li>
          New tenants get one month of free access to the entire system, no card required
          upfront. If you haven't subscribed by the end of that month, your account is
          suspended in the same way described below for non-payment, until you subscribe.
        </li>
        <li>After the trial, subscription fees are billed monthly and processed by PayFast.</li>
        <li>
          If a payment fails, your account enters a grace period during which the dashboard
          keeps working but shows a payment-due notice. If it isn't resolved within that grace
          period, the account is suspended: your public booking page stops accepting new
          bookings and the dashboard becomes read-only except for billing, until you pay to
          reactivate.
        </li>
        <li>You can cancel at any time; cancellation takes effect at the end of your current billing period.</li>
      </ul>

      <h2>4. Your data, your responsibility</h2>
      <p>
        If you're a tenant business, you decide what customer information to collect through
        your booking page and how you use it. You're responsible for complying with South
        Africa's Protection of Personal Information Act (POPIA) and any other law that applies
        to how you handle your customers' data - see our{' '}
        <a href="/privacy">Privacy Policy</a> for how we, as your data processor, handle it on
        your behalf. You're also responsible for the accuracy of business information you enter
        (services, pricing, staff details).
      </p>

      <h2>5. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use PackStack for anything unlawful, fraudulent, or harmful.</li>
        <li>Use the WhatsApp or email integrations to send unsolicited marketing or spam unrelated to a customer's actual booking.</li>
        <li>Attempt to access another tenant's data, bypass our security measures, or disrupt the platform for other users.</li>
        <li>Resell or white-label the platform itself without our written agreement.</li>
      </ul>
      <p>We may suspend or terminate accounts that violate this section.</p>

      <h2>6. Third-party services</h2>
      <p>
        Some features depend on third-party providers you choose to connect - Yoco for deposit
        payments, WATI for WhatsApp, Resend for email. Your use of those providers is also
        subject to their own terms. We aren't responsible for outages or issues on their end,
        though we design the platform so a provider outage never loses or corrupts your
        booking data.
      </p>

      <h2>7. Intellectual property</h2>
      <p>
        We own the PackStack platform - the software, design, and branding. You retain
        ownership of your own business data, content, and branding assets (logos, business
        details, customer records) that you put into the platform. For custom digital work,
        ownership of the final deliverables transfers to you on full payment, unless a separate
        agreement says otherwise.
      </p>

      <h2>8. Service availability</h2>
      <p>
        We work to keep PackStack available and reliable, but as an early-stage product we
        don't currently guarantee a specific uptime commitment or service-level agreement.
        We'll tell you about planned maintenance where we reasonably can.
      </p>

      <h2>9. Limitation of liability</h2>
      <p>
        PackStack is provided "as is." To the extent permitted by law, we aren't liable for
        indirect, incidental, or consequential damages arising from your use of the platform
        (for example, lost bookings or lost revenue from a service interruption). Our total
        liability for any claim relating to the platform is limited to the fees you paid us in
        the 3 months before the claim arose.
      </p>

      <h2>10. Termination</h2>
      <p>
        You may stop using PackStack at any time by cancelling your subscription. We may
        suspend or terminate an account for non-payment (see section 3) or a breach of section
        5. On termination, we'll retain your data for a reasonable period in case you want to
        export it or reactivate, then delete it in line with our{' '}
        <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>11. Changes to these terms</h2>
      <p>
        We may update these terms as the platform evolves. We'll update the "Last updated" date
        above when we do; continuing to use PackStack after a change means you accept the
        updated terms.
      </p>

      <h2>12. Governing law</h2>
      <p>These terms are governed by the laws of South Africa, and any dispute will be subject to the jurisdiction of the South African courts.</p>

      <h2>13. Contact us</h2>
      <p>
        Questions about these terms? Email{' '}
        <a href="mailto:packstack36@gmail.com">packstack36@gmail.com</a> or call{' '}
        <a href="tel:+27782685826">+27 78 268 5826</a>.
      </p>
    </LegalPage>
  )
}
