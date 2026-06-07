import LegalLayout from "@/components/ui/LegalLayout";
import Link from "next/link";

export const metadata = {
  title: "Shipping — Echoing Holistic Health™",
};

export default function ShippingPage() {
  return (
    <LegalLayout
      title="Shipping"
      subtitle="How Healing Water™ gets to you."
      lastUpdated="June 2026"
    >
      <h2>Houston — Local Delivery & Pickup</h2>
      <ul>
        <li><strong>Pickup Available</strong> — by appointment in Houston, TX</li>
        <li><strong>Local Delivery Available</strong> — Saturday and Sunday</li>
        <li><strong>Delivery Area:</strong> Houston, Texas and surrounding service areas</li>
        <li><strong>Minimum Delivery Order:</strong> 4 pouches</li>
      </ul>
      <p>To arrange local pickup or delivery, place your order and contact us at <a href="mailto:Contact@EchoingHolisticHealth.com">Contact@EchoingHolisticHealth.com</a> to confirm your preferred time.</p>

      <h2>Nationwide Shipping — Coming Soon</h2>
      <div className="legal-disclaimer">
        We are currently testing insulated shipping solutions to ensure every pouch arrives fresh and cold. Nationwide shipping will be available once we have confirmed a method that maintains product quality during transit.
      </div>
      <p>Want to be notified when nationwide shipping launches?</p>
      <Link href="/community" className="btn-ocean" style={{ display: "inline-flex", marginTop: "0.5rem" }}>
        Join the Community
      </Link>

      <h2>Product Handling After Delivery</h2>
      <ul>
        <li>Keep Healing Water™ refrigerated at all times</li>
        <li>Best if consumed within the number of days listed on the label</li>
        <li>Shake well before enjoying</li>
        <li>Can be frozen — great as ice cubes added to your water</li>
      </ul>

      <h2>Delivery Days</h2>
      <p>Local Houston delivery is available on <strong>Saturdays and Sundays</strong>. Orders must be placed in advance. Contact us to confirm your delivery window.</p>

      <h2>Questions?</h2>
      <p>Contact us at <a href="mailto:Contact@EchoingHolisticHealth.com">Contact@EchoingHolisticHealth.com</a> for any shipping or delivery questions.</p>
    </LegalLayout>
  );
}
