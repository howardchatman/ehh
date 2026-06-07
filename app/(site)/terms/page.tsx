import LegalLayout from "@/components/ui/LegalLayout";

export const metadata = {
  title: "Terms & Conditions — Echoing Holistic Health™",
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      subtitle="Please read these terms carefully before using our website or purchasing our products."
      lastUpdated="June 2026"
    >
      <div className="legal-disclaimer">
        By accessing this website or purchasing from Echoing Holistic Health™, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website or services.
      </div>

      <h2>About Our Products</h2>
      <p>Echoing Holistic Health™ produces Healing Water™, a line of sea moss-powered functional hydration beverages crafted with alkaline water, sea moss water, fresh fruit, herbs, and real ingredients. Our products are sold in 15 oz pouches.</p>

      <div className="legal-disclaimer">
        <strong>Important:</strong> These statements have not been evaluated by the Food and Drug Administration. Our products are not intended to diagnose, treat, cure, or prevent any disease. The information provided on this website is for educational and informational purposes only and is not intended as medical advice. Always consult a qualified healthcare professional regarding health concerns. Individual experiences may vary.
      </div>

      <h2>Orders and Payment</h2>
      <ul>
        <li>A minimum of <strong>four (4) pouches</strong> is required to qualify for Houston delivery</li>
        <li>All prices are listed in US dollars</li>
        <li>We reserve the right to refuse or cancel any order at our discretion</li>
        <li>Product availability is subject to change without notice</li>
      </ul>

      <h2>Perishable Products — All Sales Final</h2>
      <p>Due to the perishable nature of Healing Water™ products, <strong>all sales are final</strong> unless an error occurred with your order. We do not accept returns on perishable food and beverage items. If you believe an error was made with your order, please contact us within 24 hours of receiving your order at <a href="mailto:Contact@EchoingHolisticHealth.com">Contact@EchoingHolisticHealth.com</a>.</p>

      <h2>Delivery and Pickup</h2>
      <ul>
        <li>Houston delivery is available on <strong>Saturdays and Sundays</strong></li>
        <li>Minimum delivery order: <strong>4 pouches</strong></li>
        <li>Delivery area: Houston, Texas and surrounding service areas</li>
        <li>Local pickup is available <strong>by appointment only</strong></li>
        <li>Nationwide shipping is coming soon — we are currently testing insulated shipping solutions</li>
      </ul>

      <h2>Product Handling and Storage</h2>
      <p>Healing Water™ products are perishable and must be kept refrigerated. You are responsible for proper handling and storage after delivery or pickup. We are not responsible for product degradation caused by improper storage after delivery.</p>

      <h2>Allergy Disclaimer</h2>
      <p>Our products contain real fruit, herbs, honey, and sea moss. Please review all ingredient information before purchasing. If you have known food allergies, sensitivities, or dietary restrictions, consult the full ingredient list and speak with a healthcare provider before consuming our products. We are not responsible for adverse reactions due to known or unknown allergies.</p>

      <h2>Intellectual Property</h2>
      <p>All content on this website — including text, images, logos, and design — is the property of Echoing Holistic Health™ and protected by applicable intellectual property laws. &ldquo;Healing Water™,&rdquo; &ldquo;Echoing Holistic Health™,&rdquo; &ldquo;From the Source to the Body™,&rdquo; and &ldquo;Hydration Made Easy™&rdquo; are trademarks of Echoing Holistic Health™. Unauthorized use is prohibited.</p>

      <h2>Limitation of Liability</h2>
      <p>Echoing Holistic Health™ shall not be liable for any indirect, incidental, or consequential damages arising from your use of our products or website. Our total liability shall not exceed the amount paid for the specific product giving rise to the claim.</p>

      <h2>Governing Law</h2>
      <p>These Terms and Conditions are governed by the laws of the State of Texas. Any disputes shall be resolved in the courts of Harris County, Texas.</p>

      <h2>Contact Us</h2>
      <p><strong>Echoing Holistic Health™</strong><br />
      Houston, Texas<br />
      <a href="mailto:Contact@EchoingHolisticHealth.com">Contact@EchoingHolisticHealth.com</a></p>
    </LegalLayout>
  );
}
