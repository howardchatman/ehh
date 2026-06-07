import LegalLayout from "@/components/ui/LegalLayout";

export const metadata = {
  title: "Refund Policy — Echoing Holistic Health™",
};

export default function RefundsPage() {
  return (
    <LegalLayout
      title="Refund Policy"
      subtitle="Our policy regarding returns and refunds."
      lastUpdated="June 2026"
    >
      <div className="legal-disclaimer">
        <strong>All Sales Are Final.</strong> Due to the perishable nature of our products, all sales are final unless an error occurred with the order.
      </div>

      <h2>Why We Cannot Accept Returns</h2>
      <p>Healing Water™ is a perishable food and beverage product. For health and safety reasons, we are unable to accept returns or issue refunds on opened or delivered products. Once a product has left our facility, we cannot guarantee it has been stored at proper temperatures or handled appropriately.</p>

      <h2>Exceptions — Order Errors</h2>
      <p>If an error occurred on our part — such as receiving the wrong product, a missing item, or a product that was damaged during our handling — we will work with you to make it right. To report an order error:</p>
      <ul>
        <li>Contact us within <strong>24 hours</strong> of receiving your order</li>
        <li>Email <a href="mailto:Contact@EchoingHolisticHealth.com">Contact@EchoingHolisticHealth.com</a></li>
        <li>Include your order details and a description of the issue</li>
        <li>Photos are helpful and may be requested</li>
      </ul>
      <p>We will review your claim and respond promptly. Resolutions may include a replacement, store credit, or refund at our discretion.</p>

      <h2>Cancellations</h2>
      <p>Orders may be cancelled before they are prepared for delivery. To request a cancellation, contact us as soon as possible at <a href="mailto:Contact@EchoingHolisticHealth.com">Contact@EchoingHolisticHealth.com</a>. Once an order has been prepared or dispatched for delivery, it cannot be cancelled.</p>

      <h2>Product Concerns</h2>
      <p>If you have any concerns about the quality or condition of your Healing Water™ product, please contact us immediately. Your satisfaction and safety are our priority.</p>

      <h2>Contact Us</h2>
      <p><strong>Echoing Holistic Health™</strong><br />
      Houston, Texas<br />
      <a href="mailto:Contact@EchoingHolisticHealth.com">Contact@EchoingHolisticHealth.com</a><br />
      <a href="https://www.EchoingHolisticHealth.com">EchoingHolisticHealth.com</a></p>
    </LegalLayout>
  );
}
