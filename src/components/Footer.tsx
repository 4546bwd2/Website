import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Scissors } from "lucide-react";

// ── Logo Component ────────────────────────────────────────
function FooterLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="text-[#C9A84C]">
        <Scissors size={20} aria-hidden="true" />
      </div>
      <div className="flex flex-col leading-none">
        <span
          className="font-playfair text-[#C9A84C] text-xl font-bold tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Mr. Ali
        </span>
        <span className="text-[#F5F0E8] text-[9px] font-semibold tracking-[0.2em] uppercase opacity-50 mt-0.5">
          Barbershop · Kuta, Bali
        </span>
      </div>
    </div>
  );
}

// ── Quick Link ────────────────────────────────────────────
function QuickLink({ href, label, external = false }: { href: string; label: string; external?: boolean }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!external && href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <li>
      <a
        href={href}
        onClick={handleClick}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="text-[#F5F0E8]/50 text-sm hover:text-[#C9A84C] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded-sm"
        aria-label={external ? `${label} (opens in new tab)` : undefined}
      >
        {label}
      </a>
    </li>
  );
}

// ── Footer ────────────────────────────────────────────────
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative bg-[#111111] border-t border-[#C9A84C]/10"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Top gold line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #C9A84C40, transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Left: Logo + Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FooterLogo />
            <p className="text-[#F5F0E8]/40 text-sm leading-relaxed mt-5 max-w-xs">
              Master cuts. Kuta vibes. Bali's best.
            </p>
            <p className="text-[#F5F0E8]/30 text-sm leading-relaxed mt-3 max-w-xs">
              Bali's most legendary barbershop experience — where every customer leaves with a great cut and an even bigger smile.
            </p>

            {/* Rating */}
            <div
              className="flex items-center gap-2 mt-5"
              role="img"
              aria-label="Rated 4.9 out of 5 stars on Google"
            >
              <div className="flex gap-0.5" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#C9A84C] text-sm">★</span>
                ))}
              </div>
              <span className="text-[#F5F0E8]/50 text-xs">4.9 · 323 reviews</span>
            </div>
          </motion.div>

          {/* Center: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-[#F5F0E8] text-xs font-semibold uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-3">
                <QuickLink href="#services" label="Services" />
                <QuickLink href="#about" label="About Mr. Ali" />
                <QuickLink href="#reviews" label="Reviews" />
                <QuickLink href="#gallery" label="Gallery" />
                <QuickLink href="#find-us" label="Find Us" />
                <QuickLink href="#booking" label="Book Appointment" />
                <QuickLink href="/privacy" label="Privacy Policy" />
              </ul>
            </nav>
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-[#F5F0E8] text-xs font-semibold uppercase tracking-widest mb-5">
              Contact & Hours
            </h3>

            <div className="flex flex-col gap-4">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone size={15} className="text-[#C9A84C] mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-[#F5F0E8]/40 text-xs uppercase tracking-wider mb-0.5">Phone</p>
                  <a
                    href="tel:0896-5263-9156"
                    className="text-[#F5F0E8]/70 text-sm hover:text-[#C9A84C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded-sm"
                    aria-label="Call Mr. Ali Barbershop at 0896-5263-9156"
                  >
                    0896-5263-9156
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-[#C9A84C] mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-[#F5F0E8]/40 text-xs uppercase tracking-wider mb-0.5">Address</p>
                  <address className="text-[#F5F0E8]/70 text-sm not-italic leading-relaxed">
                    Jl. Poppies II No.2<br />
                    Kuta, Kabupaten Badung<br />
                    Bali 80361
                  </address>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <Clock size={15} className="text-[#C9A84C] mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-[#F5F0E8]/40 text-xs uppercase tracking-wider mb-0.5">Hours</p>
                  <p className="text-[#F5F0E8]/70 text-sm">
                    Open Daily<br />
                    <span className="text-[#C9A84C] font-semibold">Closes 11:30 PM</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 pt-6 border-t border-[#F5F0E8]/5 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p className="text-[#F5F0E8]/30 text-xs text-center sm:text-left">
            © {currentYear} Mr Ali Barbershop · Kuta, Bali · All Rights Reserved
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/privacy"
              className="text-[#F5F0E8]/30 text-xs hover:text-[#C9A84C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded-sm"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </a>
            <span className="text-[#F5F0E8]/10 text-xs" aria-hidden="true">·</span>
            <a
              href="tel:0896-5263-9156"
              className="text-[#F5F0E8]/30 text-xs hover:text-[#C9A84C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded-sm"
              aria-label="Call us at 0896-5263-9156"
            >
              0896-5263-9156
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
