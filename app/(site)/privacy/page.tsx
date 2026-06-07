import LegalLayout from "@/components/ui/LegalLayout";

export const metadata = {
  title: "Privacy Policy — Echoing Holistic Health™",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your information."
      lastUpdated="June 2026"
    >
      <div className="legal-disclaimer">
        This Privacy Policy applies to Echoing Holistic Health™ and all services available at EchoingHolisticHealth.com. By using our website or providing your information, you agree to the practices described below.
      </div>

      <h2>Information We Collect</h2>
      <p>We collect information you provide directly to us, including:</p>
      <ul>
        <li><strong>Name and email address</strong> — when you join our community, waitlist, or sign up for updates</li>
        <li><strong>Birthday</strong> — optionally provided when joining our community</li>
        <li><strong>Wellness focus preferences</strong> — optionally provided to personalize your experience</li>
        <li><strong>Order and contact information</strong> — when you place an order or contact us</li>
      </ul>
      <p>We may also collect non-personal information such as browser type, pages visited, and general usage data through standard web analytics tools.</p>

      <h2>How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Send product announcements, wellness tips, and community updates (with your consent)</li>
        <li>Fulfill and communicate about your orders</li>
        <li>Notify you about vendor events, pop-ups, and community activities</li>
        <li>Improve our website and services</li>
        <li>Respond to your questions and requests</li>
      </ul>

      <h2>How We Store Your Information</h2>
      <p>Your data is stored securely using Supabase, a GDPR-compliant data infrastructure provider. We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website, provided they agree to keep your information confidential.</p>

      <h2>Email Communications</h2>
      <p>By joining our community or waitlist, you consent to receive email communications from Echoing Holistic Health™. You may unsubscribe at any time by clicking the unsubscribe link in any email or by contacting us at <a href="mailto:Contact@EchoingHolisticHealth.com">Contact@EchoingHolisticHealth.com</a>.</p>

      <h2>Cookies</h2>
      <p>Our website uses cookies to remember your preferences and improve your browsing experience. Cookies are small text files stored on your device. You can control cookie settings through your browser, though disabling cookies may affect some site functionality.</p>

      <h2>Children&apos;s Privacy</h2>
      <p>Our website is not directed to children under 13 years of age, and we do not knowingly collect personal information from children under 13.</p>

      <h2>Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access the personal information we hold about you</li>
        <li>Request correction of inaccurate information</li>
        <li>Request deletion of your information</li>
        <li>Opt out of marketing communications at any time</li>
      </ul>
      <p>To exercise any of these rights, contact us at <a href="mailto:Contact@EchoingHolisticHealth.com">Contact@EchoingHolisticHealth.com</a>.</p>

      <h2>Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of our website after changes constitutes acceptance of the updated policy.</p>

      <h2>Contact Us</h2>
      <p>If you have questions about this Privacy Policy, please contact us at:<br />
      <strong>Echoing Holistic Health™</strong><br />
      Houston, Texas<br />
      <a href="mailto:Contact@EchoingHolisticHealth.com">Contact@EchoingHolisticHealth.com</a><br />
      <a href="https://www.EchoingHolisticHealth.com">EchoingHolisticHealth.com</a></p>
    </LegalLayout>
  );
}
