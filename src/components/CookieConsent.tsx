import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

// ── Tracking Stubs ────────────────────────────────────────
function enableTracking(): void {
  // Stub: In production, initialize analytics (e.g. Google Analytics) here
  console.log("[Mr. Ali Barbershop] Tracking enabled — analytics initialized.");
}

function disableTracking(): void {
  // Stub: In production, disable analytics and remove tracking cookies here
  console.log("[Mr. Ali Barbershop] Tracking disabled — no analytics will run.");
}

// ── Cookie Key ────────────────────────────────────────────
const COOKIE_CONSENT_KEY = "cookie_consent";

// ── Cookie Consent Banner ─────────────────────────────────
export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check localStorage for existing consent
    const existing = localStorage.getItem(COOKIE_CONSENT_KEY);

    if (!existing) {
      // Show banner after 1-second delay on first visit
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      // Restore tracking state if already accepted
      if (existing === "accepted") {
        enableTracking();
      }
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
    enableTracking();
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setIsVisible(false);
    disableTracking();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          role="banner"
          aria-live="polite"
          aria-label="Cookie consent notice"
          className="fixed bottom-0 left-0 right-0 z-40 bg-[#232323] border-t border-[#C9A84C]/20 shadow-2xl shadow-black/50"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Gold top line */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, #C9A84C60, transparent)" }}
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Icon + Copy */}
              <div className="flex items-start gap-3 flex-1">
                <div
                  className="w-8 h-8 rounded-sm bg-[#C9A84C]/10 flex items-center justify-center shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <Cookie size={16} className="text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-[#F5F0E8] text-sm font-semibold mb-0.5">
                    Cookie Notice
                  </p>
                  <p className="text-[#F5F0E8]/60 text-xs leading-relaxed max-w-xl">
                    We use cookies to improve your experience and understand how you use our site. 
                    You can choose to accept or decline.{" "}
                    <a
                      href="/privacy"
                      className="text-[#C9A84C] underline underline-offset-2 hover:text-[#E2C47A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded-sm"
                      aria-label="Learn more about our privacy policy and cookie usage"
                    >
                      Learn More
                    </a>
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={handleDecline}
                  className="px-4 py-2 text-xs font-semibold text-[#F5F0E8]/60 border border-[#F5F0E8]/15 rounded-sm hover:border-[#F5F0E8]/30 hover:text-[#F5F0E8] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] tracking-wide"
                  aria-label="Decline cookies — no tracking will be used"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="px-5 py-2 text-xs font-bold bg-[#C9A84C] text-[#1A1A1A] rounded-sm hover:bg-[#E2C47A] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#232323] tracking-wide"
                  aria-label="Accept cookies — help us improve the site"
                >
                  Accept Cookies
                </button>
                <button
                  onClick={handleDecline}
                  className="p-1.5 text-[#F5F0E8]/30 hover:text-[#F5F0E8]/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded-sm"
                  aria-label="Dismiss cookie notice (same as declining)"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
