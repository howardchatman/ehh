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
        <strong>All Sales Are Final. No Cancellations.</strong> Healing Water™ is a perishable, made-to-order product. All sales are final at the time of payment. Cancellations are not accepted under any circumstances once payment has been processed.
      </div>

      <h2>Made to Order — No Cancellations</h2>
      <p>
        Every batch of Healing Water™ is crafted fresh and made to order specifically for you. Preparation begins promptly upon receipt of payment. For this reason, <strong>all orders are non-cancellable and non-refundable once payment has been processed</strong>, regardless of when the request is made.
      </p>
      <p>
        By completing your purchase, you acknowledge and agree that your order cannot be cancelled, modified, or reversed after payment is submitted. Please review your order carefully before completing checkout.
      </p>

      <h2>Why We Cannot Accept Returns or Refunds</h2>
      <p>Healing Water™ is a perishable food and beverage product made with fresh, real ingredients including alkaline water, sea moss water, fresh fruit, and herbs. For health, safety, and food integrity reasons, we are unable to accept returns or issue refunds on any delivered or fulfilled product. Once a product has left our facility, we cannot verify that it has been stored at proper temperatures or handled appropriately.</p>

      <h2>Exceptions — Order Errors Only</h2>
      <p>The only exception to our no-refund, no-cancellation policy is in the case of a verifiable error made by Echoing Holistic Health™ — such as receiving the wrong product, a missing item, or a product that was damaged prior to delivery due to our handling. To report an order error:</p>
      <ul>
        <li>Contact us within <strong>24 hours</strong> of receiving your order</li>
        <li>Email <a href="mailto:Contact@EchoingHolisticHealth.com">Contact@EchoingHolisticHealth.com</a></li>
        <li>Include your order details and a clear description of the issue</li>
        <li>Photos are helpful and may be requested to process your claim</li>
      </ul>
      <p>We will review your claim and respond promptly. Resolutions may include a replacement or store credit at our sole discretion. Change-of-mind, personal scheduling conflicts, or failure to be available for delivery do not qualify as order errors and will not be considered for exceptions.</p>

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
