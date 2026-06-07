import LegalLayout from "@/components/ui/LegalLayout";

export const metadata = {
  title: "Houston Delivery — Echoing Holistic Health™",
};

export default function DeliveryPage() {
  return (
    <LegalLayout
      title="Houston Delivery"
      subtitle="Fresh Healing Water™ delivered to your door."
      lastUpdated="June 2026"
    >
      <div className="legal-disclaimer">
        <strong>Minimum Delivery Order: 4 Pouches</strong><br />
        Customers must purchase a minimum of four (4) pouches to qualify for delivery.
      </div>

      <h2>Delivery Area</h2>
      <p>We currently deliver to <strong>Houston, Texas and surrounding service areas</strong>. If you are unsure whether we deliver to your location, please contact us at <a href="mailto:Contact@EchoingHolisticHealth.com">Contact@EchoingHolisticHealth.com</a> before placing your order.</p>

      <h2>Delivery Days</h2>
      <ul>
        <li><strong>Saturday</strong></li>
        <li><strong>Sunday</strong></li>
      </ul>
      <p>Delivery windows are coordinated after your order is confirmed. Contact us to schedule your preferred delivery time.</p>

      <h2>Local Pickup</h2>
      <p>Local pickup is available <strong>by appointment only</strong>. To arrange a pickup, contact us at <a href="mailto:Contact@EchoingHolisticHealth.com">Contact@EchoingHolisticHealth.com</a> after placing your order.</p>

      <h2>Pack Options for Delivery</h2>
      <ul>
        <li><strong>Starter Pack</strong> — 4 Pouches · $46 · Mix &amp; Match</li>
        <li><strong>Weekly Hydration Pack</strong> — 8 Pouches · $88</li>
        <li><strong>Wellness Pack</strong> — 12 Pouches · $132 (Most Popular)</li>
        <li><strong>Monthly Hydration Supply</strong> — 24 Pouches · $252</li>
        <li><strong>Family Pack</strong> — 36 Pouches · $324</li>
      </ul>

      <h2>Product Handling After Delivery</h2>
      <ul>
        <li>Keep Healing Water™ refrigerated immediately upon receipt</li>
        <li>Best if consumed within the number of days listed on the label</li>
        <li>Shake well before enjoying</li>
        <li>Can be frozen — great for adding to water as ice cubes throughout the day</li>
      </ul>

      <h2>Important Notice</h2>
      <p>Due to the perishable nature of Healing Water™, all sales are final unless an error occurred with your order. Please see our <a href="/refunds">Refund Policy</a> for full details.</p>

      <h2>Contact Us</h2>
      <p>To place an order, schedule delivery, or arrange pickup:<br />
      <a href="mailto:Contact@EchoingHolisticHealth.com">Contact@EchoingHolisticHealth.com</a></p>
    </LegalLayout>
  );
}
