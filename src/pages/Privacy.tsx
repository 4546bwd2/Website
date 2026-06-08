import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, Scissors, Smartphone, MapPin, Mail } from "lucide-react";

// ── Privacy Policy Page ───────────────────────────────────
export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Privacy Policy — Mr. Ali Barbershop";
  }, []);

  const handleBackHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.history.pushState({}, "", "/");
    window.dispatchEvent(new PopStateEvent("popstate"));
    window.scrollTo(0, 0);
  };

  const sections = [
    {
      title: "1. What We Collect",
      content: [
        "We may collect your name and contact information if you reach out to us directly via phone or email.",
        "If you consent to cookies, we may collect browser and device information (browser type, pages visited, time on site) to help us understand how visitors use the site.",
        "No payment data is collected on this website. All bookings and payments are handled in person at the shop.",
      ],
    },
    {
      title: "2. Why We Collect It",
      content: [
        "To respond to your enquiries when you contact us directly.",
        "To understand how visitors navigate our website so we can improve it and serve you better.",
        "Cookie-based tracking only occurs with your explicit consent — if you decline, no tracking takes place.",
      ],
    },
    {
      title: "3. How We Use Cookies",
      content: [
        "Cookies are small files stored in your browser that help us remember your preferences and understand site usage.",
        "We only set cookies after you explicitly click 'Accept Cookies' on our cookie consent banner.",
        "If you click 'Decline', no tracking cookies are set and we do not collect any analytical data during your visit.",
        "You can change your preference at any time by clearing your browser's localStorage and cookies.",
      ],
    },
    {
      title: "4. How to Delete Your Data",
      content: [
        "You can clear browser cookies and localStorage at any time using your browser's privacy settings.",
        "In Chrome: Settings → Privacy and Security → Clear browsing data.",
        "In Firefox: Settings → Privacy & Security → Cookies and Site Data → Clear Data.",
        "To request deletion of any personal data we may hold (e.g., if you contacted us by email), please reach out to us at privacy@mrali-barbershop.com and we will respond within 30 days.",
      ],
    },
    {
      title: "5. Third Parties",
      content: [
        "We embed a Google Maps iframe on our website to help you find our location. Google may collect data through this embed in accordance with their own privacy policy (policies.google.com/privacy).",
        "We do not sell, rent, or share your personal information with any other third parties.",
        "We do not use Facebook Pixel, TikTok Pixel, or any other advertising tracking tools.",
      ],
    },
    {
      title: "6. Contact Us",
      content: [
        "If you have any questions about this privacy policy or how we handle your data, please don't hesitate to get in touch:",
        { type: "phone", text: "Phone: 0896-5263-9156" },
        { type: "address", text: "Address: Jl. Poppies II No.2, Kuta, Kabupaten Badung, Bali 80361" },
        { type: "email", text: "Email: privacy@mrali-barbershop.com" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-[#F5F0E8]">
      {/* Skip link */}
      <a
        href="#privacy-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#C9A84C] focus:text-[#1A1A1A] focus:px-4 focus:py-2 focus:font-semibold focus:rounded focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#1A1A1A]/95 backdrop-blur-md border-b border-[#C9A84C]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Scissors size={18} className="text-[#C9A84C]" aria-hidden="true" />
            <span
              className="font-playfair text-[#C9A84C] text-lg font-bold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Mr. Ali
            </span>
            <span className="text-[#F5F0E8]/30 text-xs uppercase tracking-widest hidden sm:block">
              · Barbershop
            </span>
          </div>
          <a
            href="/"
            onClick={handleBackHome}
            className="inline-flex items-center gap-2 text-[#C9A84C] text-sm font-semibold hover:text-[#E2C47A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded-sm"
            aria-label="Back to Mr. Ali Barbershop homepage"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to Home
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main id="privacy-content" tabIndex={-1}>
        {/* Hero */}
        <section
          className="relative py-16 lg:py-24 border-b border-[#C9A84C]/10 overflow-hidden"
          aria-label="Privacy policy header"
        >
          {/* Background */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% -10%, rgba(201,168,76,0.06) 0%, transparent 60%)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              className="w-14 h-14 rounded-sm bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center mx-auto mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Shield size={24} className="text-[#C9A84C]" aria-hidden="true" />
            </motion.div>

            <motion.h1
              className="font-playfair text-4xl sm:text-5xl font-bold text-[#F5F0E8] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Privacy{" "}
              <span className="text-[#C9A84C]">Policy</span>
            </motion.h1>

            <motion.div
              className="h-px max-w-xs mx-auto mb-6"
              style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />

            <motion.p
              className="text-[#F5F0E8]/50 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Last updated: January 2025
            </motion.p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-24" aria-label="Privacy policy content">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Intro */}
            <motion.div
              className="bg-[#232323] border border-[#C9A84C]/15 rounded-sm p-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-[#F5F0E8]/70 text-base leading-relaxed">
                Welcome to Mr. Ali Barbershop's privacy policy. We're a barbershop, not a tech company — so we keep things simple and honest. This page explains what (very little) data we collect, why we collect it, and how you remain in full control.
              </p>
            </motion.div>

            {/* Policy Sections */}
            <div className="flex flex-col gap-12">
              {sections.map((section, sectionIndex) => (
                <motion.section
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + sectionIndex * 0.08 }}
                  aria-labelledby={`section-${sectionIndex}`}
                >
                  <h2
                    id={`section-${sectionIndex}`}
                    className="font-playfair text-[#C9A84C] text-xl font-semibold mb-4 pb-3 border-b border-[#C9A84C]/15"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {section.title}
                  </h2>
                  <ul className="flex flex-col gap-3" role="list">
                    {section.content.map((item, itemIndex) => {
                      // Handle contact items with icons
                      if (typeof item === "object" && item.type) {
                        const IconMap: Record<string, React.ComponentType<{size: number, className: string, "aria-hidden": string}>> = {
                          phone: Smartphone,
                          address: MapPin,
                          email: Mail,
                        };
                        const Icon = IconMap[item.type];
                        return (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-3 text-[#F5F0E8]/65 text-sm leading-relaxed"
                          >
                            <Icon size={16} className="text-[#C9A84C] mt-1 shrink-0" aria-hidden="true" />
                            {item.text}
                          </li>
                        );
                      }
                      // Regular text items
                      return (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-3 text-[#F5F0E8]/65 text-sm leading-relaxed"
                        >
                          <span className="text-[#C9A84C] mt-1.5 shrink-0 text-xs" aria-hidden="true">
                            ◆
                          </span>
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </motion.section>
              ))}
            </div>

            {/* Back to home CTA */}
            <motion.div
              className="mt-16 pt-10 border-t border-[#C9A84C]/10 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <p className="text-[#F5F0E8]/40 text-sm mb-4">
                Have questions? We're always happy to chat.
              </p>
              <a
                href="/"
                onClick={handleBackHome}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A84C] text-[#1A1A1A] font-bold text-sm rounded-sm hover:bg-[#E2C47A] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A]"
                aria-label="Return to Mr. Ali Barbershop homepage"
              >
                <ArrowLeft size={16} aria-hidden="true" />
                Back to Home
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#C9A84C]/10 py-8" role="contentinfo">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#F5F0E8]/30 text-xs">
            © {new Date().getFullYear()} Mr Ali Barbershop · Kuta, Bali · All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
