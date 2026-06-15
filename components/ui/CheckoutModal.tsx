"use client";

import { useState, useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const EASE = [0.22, 1, 0.36, 1] as const;

interface Props {
  priceId: string;
  productName: string;
  price: string;
  onClose: () => void;
}

export default function CheckoutModal({ priceId, productName, price, onClose }: Props) {
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  const fetchClientSecret = useCallback(async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priceId }),
    });
    const data = await res.json();
    if (!res.ok || !data.clientSecret) {
      const msg = data.error ?? "Checkout unavailable. Please try again.";
      setCheckoutError(msg);
      throw new Error(msg);
    }
    return data.clientSecret as string;
  }, [priceId]);

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(10, 37, 64, 0.7)",
          backdropFilter: "blur(6px)",
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.97 }}
          transition={{ duration: 0.4, ease: EASE }}
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: "white",
            width: "100%",
            maxWidth: "560px",
            maxHeight: "90vh",
            overflow: "auto",
            position: "relative",
            boxShadow: "0 24px 80px rgba(10,37,64,0.25)",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1.25rem 1.5rem",
              borderBottom: "1px solid rgba(10,37,64,0.08)",
              position: "sticky",
              top: 0,
              backgroundColor: "white",
              zIndex: 2,
            }}
          >
            <div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--aqua)", marginBottom: "0.2rem" }}>
                Healing Water™
              </p>
              <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", fontWeight: 400, color: "var(--ocean)" }}>
                {productName} — <span style={{ color: "var(--aqua)" }}>{price}</span>
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close checkout"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--ocean-mid)",
                opacity: 0.5,
                padding: "0.25rem",
                display: "flex",
                alignItems: "center",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "1"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "0.5"; }}
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* Embedded checkout */}
          <div style={{ padding: "0.5rem" }}>
            {checkoutError ? (
              <div style={{ padding: "2rem", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--ocean)", marginBottom: "0.5rem", fontWeight: 500 }}>
                  Unable to load checkout
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--ocean-mid)", opacity: 0.7, lineHeight: 1.6 }}>
                  {checkoutError}
                </p>
              </div>
            ) : (
              <EmbeddedCheckoutProvider stripe={stripePromise} options={{ fetchClientSecret }}>
                <EmbeddedCheckout />
              </EmbeddedCheckoutProvider>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Trigger button + modal state wrapper ─────────────────────────────────────
interface OrderButtonProps {
  priceId: string;
  productName: string;
  price: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export function OrderButton({ priceId, productName, price, className, style, children }: OrderButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={className}
        style={style}
      >
        {children ?? "Order Now"}
      </button>

      {open && (
        <CheckoutModal
          priceId={priceId}
          productName={productName}
          price={price}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
