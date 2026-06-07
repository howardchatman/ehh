import LegalLayout from "@/components/ui/LegalLayout";

export const metadata = {
  title: "Disclaimer & Liability — Echoing Holistic Health™",
  description: "Liability limitations, legal disclaimers, and protective notices for Echoing Holistic Health™ and Healing Water™.",
};

export default function DisclaimerPage() {
  return (
    <LegalLayout
      title="Disclaimer & Liability"
      subtitle="Legal notices, limitations of liability, and protective disclaimers governing your use of our website and products."
      lastUpdated="June 2026"
    >
      <div className="legal-disclaimer">
        Please read this Disclaimer and Liability page in its entirety before using this website or consuming any product sold by Echoing Holistic Health™. By accessing this website, placing an order, or consuming our products, you acknowledge that you have read, understood, and agreed to the terms set forth below.
      </div>

      {/* ── Core Notices — prominently displayed ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", margin: "2rem 0" }}>

        <div style={{ border: "1px solid var(--border)", borderLeft: "4px solid var(--aqua)", padding: "1.5rem 1.75rem", backgroundColor: "white" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ocean)", marginBottom: "0.6rem" }}>
            No Guaranteed Results
          </p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", fontWeight: 300, color: "var(--charcoal)", lineHeight: 1.8, margin: 0 }}>
            Echoing Holistic Health™ does not promise, guarantee, or represent that the use of Healing Water™ will produce any specific health, wellness, or hydration outcome. All descriptions of ingredients and their properties are based on general nutritional knowledge and are not a guarantee of results of any kind.
          </p>
        </div>

        <div style={{ border: "1px solid var(--border)", borderLeft: "4px solid var(--gold)", padding: "1.5rem 1.75rem", backgroundColor: "white" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ocean)", marginBottom: "0.6rem" }}>
            Results Vary by Individual
          </p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", fontWeight: 300, color: "var(--charcoal)", lineHeight: 1.8, margin: 0 }}>
            Every person&apos;s body is unique. Wellness outcomes are influenced by a wide range of individual factors including — but not limited to — age, genetics, overall health, existing medical conditions, diet, lifestyle habits, level of physical activity, and consistency of use. Any testimonials or customer experiences shared on this website reflect the individual results of that specific person and are not representative of what any other person may experience. Your results will be your own and may differ significantly.
          </p>
        </div>

        <div style={{ border: "1px solid var(--border)", borderLeft: "4px solid var(--ocean-mid)", padding: "1.5rem 1.75rem", backgroundColor: "white" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ocean)", marginBottom: "0.6rem" }}>
            Voluntary Assumption of Risk
          </p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", fontWeight: 300, color: "var(--charcoal)", lineHeight: 1.8, margin: 0 }}>
            The purchase and consumption of Healing Water™ is entirely voluntary. By choosing to purchase and consume our products, you acknowledge that you have exercised your own informed judgment in doing so, that you have reviewed the ingredient information and found it suitable for your personal health needs, and that you accept full personal responsibility for your decision. Echoing Holistic Health™ shall not be held liable for any outcome — anticipated or unanticipated — arising from your voluntary choice to consume our products.
          </p>
        </div>

      </div>

      {/* ── 1. No Medical Advice ── */}
      <h2>1. No Medical Advice</h2>
      <p>
        Echoing Holistic Health™ and Healing Water™ products are not intended to provide medical advice, diagnosis, or treatment. All content on this website — including text, recipes, wellness tips, and product descriptions — is provided for <strong>educational and informational purposes only</strong>.
      </p>
      <p>
        Nothing on this website should be construed as professional medical advice or a substitute for consultation with a licensed healthcare provider. Always seek the guidance of your physician, nutritionist, or other qualified health professional before making any dietary changes, beginning any wellness regimen, or consuming any new food or beverage product — particularly if you are pregnant, nursing, have a diagnosed medical condition, or are taking prescribed medications.
      </p>

      {/* ── 2. FDA Disclaimer ── */}
      <h2>2. FDA Disclaimer</h2>
      <p>
        In accordance with the <strong>Federal Food, Drug, and Cosmetic Act (21 U.S.C. § 301 et seq.)</strong> and regulations issued by the <strong>U.S. Food and Drug Administration (FDA)</strong> under <strong>21 CFR Part 101</strong> governing food labeling and health claims:
      </p>
      <div className="legal-disclaimer">
        These statements have not been evaluated by the Food and Drug Administration. Healing Water™ products are not intended to diagnose, treat, cure, or prevent any disease or medical condition.
      </div>
      <p>
        Any functional or wellness-related descriptions of our ingredients — including sea moss, alkaline water, chlorophyll, ginger, lemon, mint, raw honey, and electrolytes — are based on general nutritional information and traditional wellness use. These descriptions do not constitute medical claims and are not approved or reviewed by the FDA.
      </p>

      {/* ── 3. FTC Compliance ── */}
      <h2>3. Truthful Advertising — FTC Compliance</h2>
      <p>
        Echoing Holistic Health™ is committed to truthful, non-deceptive marketing in compliance with <strong>Section 5 of the Federal Trade Commission Act (15 U.S.C. § 45)</strong>, which prohibits unfair or deceptive acts or practices in commerce. All product claims made on this website reflect our genuine belief in our products, backed by general nutritional knowledge and ingredient transparency.
      </p>
      <p>
        Testimonials and customer reviews reflect individual experiences. Individual results will vary and are not guaranteed.
      </p>

      {/* ── 4. Texas Food Law ── */}
      <h2>4. Texas Food Safety Compliance</h2>
      <p>
        Healing Water™ is produced in compliance with applicable Texas food safety standards, including the <strong>Texas Food, Drug, and Cosmetic Act (Texas Health &amp; Safety Code Chapter 431)</strong> and regulations administered by the <strong>Texas Department of State Health Services (DSHS)</strong> and the <strong>Texas Department of Agriculture</strong> where applicable.
      </p>
      <p>
        Our products are perishable and must be kept refrigerated. Echoing Holistic Health™ is not liable for any illness, injury, or property damage resulting from improper storage, handling, or consumption of our products after delivery or pickup.
      </p>

      {/* ── 5. Allergy & Dietary ── */}
      <h2>5. Allergy and Dietary Disclaimer</h2>
      <p>
        Healing Water™ products contain real food ingredients including — but not limited to — sea moss, raw honey, fresh fruit, lemon, ginger, mint, chlorophyll, and electrolytes. These products may not be suitable for individuals with certain food allergies, sensitivities, or dietary restrictions.
      </p>
      <p>
        <strong>You are solely responsible for reviewing all ingredient information</strong> and determining whether our products are appropriate for your dietary needs and health status. Echoing Holistic Health™ shall not be held liable for any allergic reaction, adverse health effect, or dietary conflict resulting from consumption of our products.
      </p>
      <p>
        If you have known food allergies or medical dietary requirements, consult your healthcare provider before consuming Healing Water™.
      </p>

      {/* ── 6. Assumption of Risk ── */}
      <h2>6. Voluntary Assumption of Risk</h2>
      <p>
        The decision to purchase and consume Healing Water™ is made entirely at your own volition and at your own risk. By choosing to place an order and consume our products, you represent that you have independently reviewed the ingredient information, considered your personal health circumstances, and determined that our products are appropriate for you.
      </p>
      <p>
        You voluntarily assume all risks associated with the consumption of food and beverage products — including, without limitation, risks arising from individual health conditions, known or unknown allergies, dietary sensitivities, medication interactions, and personal physiological responses. This assumption of risk extends to any third party to whom you provide or share our products.
      </p>
      <p>
        Echoing Holistic Health™ is not responsible for, and expressly disclaims liability for, any adverse outcome resulting from your voluntary decision to consume our products.
      </p>

      {/* ── 7. No Warranty ── */}
      <h2>7. Disclaimer of Warranties</h2>
      <p>
        To the fullest extent permitted by applicable law, including <strong>Texas Business &amp; Commerce Code § 2.316</strong> (consistent with UCC § 2-316 regarding disclaimer of warranties), Echoing Holistic Health™ disclaims all express and implied warranties with respect to our products and website, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
      </p>
      <p>
        Our products are sold <strong>as-is</strong>. We make no warranty that our products will meet your specific health, wellness, or dietary goals.
      </p>

      {/* ── 8. Limitation of Liability ── */}
      <h2>8. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted under applicable law — including the <strong>Texas Civil Practice &amp; Remedies Code</strong> — Echoing Holistic Health™, its owner, agents, representatives, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:
      </p>
      <ul>
        <li>Your use of, or inability to use, our products or website</li>
        <li>Any health outcome related to consumption of our products</li>
        <li>Improper storage or handling of perishable products after delivery</li>
        <li>Reliance on any information provided on this website</li>
        <li>Any allergic or adverse reaction to our ingredients</li>
      </ul>
      <p>
        In all cases, <strong>our total liability to you shall not exceed the amount you paid for the specific product</strong> that is the subject of the claim.
      </p>

      {/* ── 9. Indemnification ── */}
      <h2>9. Indemnification</h2>
      <p>
        You agree to indemnify, defend, and hold harmless Echoing Holistic Health™ and its owner, officers, agents, and representatives from and against any claims, liabilities, damages, losses, and expenses — including reasonable legal fees — arising out of or in any way related to: (a) your access to or use of our website; (b) your purchase or consumption of our products; or (c) your violation of these terms.
      </p>

      {/* ── 10. Individual Results ── */}
      <h2>10. No Guaranteed Results — Individual Outcomes Vary</h2>
      <p>
        Echoing Holistic Health™ makes <strong>no promise, representation, or guarantee</strong> that the consumption of Healing Water™ will produce any particular health, wellness, hydration, or aesthetic outcome.
      </p>
      <p>
        Wellness outcomes are deeply personal and are shaped by a wide range of individual factors including age, genetics, overall health status, existing medical conditions, concurrent diet and nutrition, physical activity level, sleep quality, stress levels, consistency of use, and other lifestyle variables entirely outside of our control.
      </p>
      <p>
        Any testimonials, reviews, or customer experiences shared on this website or on our social media platforms represent the unique experience of that specific individual only. They are not intended to imply that you or any other person will achieve the same or similar results. <strong>Your results will be your own and may differ from those of others.</strong>
      </p>
      <p>
        By purchasing our products you acknowledge and agree that you do not rely on any implied or express promise of a specific result, and that Echoing Holistic Health™ shall bear no responsibility for outcomes that do not meet your personal expectations.
      </p>

      {/* ── 11. Third-Party Links ── */}
      <h2>11. Third-Party Links and Content</h2>
      <p>
        This website may contain links to third-party websites for informational purposes. Echoing Holistic Health™ does not control, endorse, or assume responsibility for the content, privacy practices, or accuracy of any third-party website. Accessing third-party links is done at your own risk.
      </p>

      {/* ── 12. Governing Law ── */}
      <h2>12. Governing Law and Jurisdiction</h2>
      <p>
        This Disclaimer and all matters arising from your use of this website and our products are governed exclusively by the laws of the <strong>State of Texas</strong>, without regard to conflicts of law principles. Any legal proceedings must be brought in the appropriate state or federal courts located in <strong>Harris County, Texas</strong>, and you hereby consent to personal jurisdiction in those courts.
      </p>

      {/* ── 13. Changes ── */}
      <h2>13. Updates to This Disclaimer</h2>
      <p>
        Echoing Holistic Health™ reserves the right to update or modify this Disclaimer at any time without prior notice. Changes will be reflected by the &ldquo;Last Updated&rdquo; date at the top of this page. Continued use of our website or products after any modification constitutes your acceptance of the updated terms.
      </p>

      {/* ── 14. Legal Counsel ── */}
      <h2>14. Seek Independent Legal Advice</h2>
      <p>
        Nothing on this page constitutes legal advice to you as a consumer. If you have specific legal questions regarding your rights or obligations in connection with our products, we encourage you to consult a licensed attorney in your jurisdiction.
      </p>

      {/* ── Contact ── */}
      <h2>Contact</h2>
      <p>
        For questions regarding this Disclaimer and Liability page:<br />
        <strong>Echoing Holistic Health™</strong><br />
        Houston, Texas<br />
        <a href="mailto:Contact@EchoingHolisticHealth.com">Contact@EchoingHolisticHealth.com</a><br />
        <a href="https://www.EchoingHolisticHealth.com">EchoingHolisticHealth.com</a>
      </p>
    </LegalLayout>
  );
}
