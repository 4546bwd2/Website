import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// ── Barber Pole SVG Icon ──────────────────────────────────
function BarberPoleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="9" y="1" width="6" height="22" rx="3" fill="#C9A84C" opacity="0.15" />
      <rect x="9" y="1" width="6" height="22" rx="3" stroke="#C9A84C" strokeWidth="1.5" />
      <path d="M9 5 L15 9 M9 9 L15 13 M9 13 L15 17 M9 17 L15 21" stroke="#D94F3D" strokeWidth="1.2" />
      <path d="M9 3 L15 7 M9 7 L15 11 M9 11 L15 15 M9 15 L15 19" stroke="#F5F0E8" strokeWidth="0.8" opacity="0.5" />
      <circle cx="12" cy="1" r="2" fill="#C9A84C" />
      <circle cx="12" cy="23" r="2" fill="#C9A84C" />
    </svg>
  );
}

// ── Logo Component ────────────────────────────────────────
function Logo() {
  return (
    <a
      href="#main-content"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded-sm"
      aria-label="Mr. Ali Barbershop — Go to top"
    >
      <BarberPoleIcon className="h-8 w-5 shrink-0 transition-transform duration-300 group-hover:scale-110" />
      <div className="flex flex-col leading-none">
        <span
          className="font-playfair text-[#C9A84C] text-xl font-bold tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Mr. Ali
        </span>
        <span className="text-[#F5F0E8] text-[9px] font-semibold tracking-[0.2em] uppercase opacity-70 mt-0.5">
          Barbershop · Kuta, Bali
        </span>
      </div>
    </a>
  );
}

// ── Nav Links ─────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Find Us", href: "#find-us" },
];

function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onClick?.();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="relative text-[#F5F0E8] text-sm font-medium hover:text-[#C9A84C] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded-sm group"
      aria-label={`Navigate to ${label} section`}
    >
      {label}
      <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#C9A84C] transition-all duration-300 group-hover:w-full" />
    </a>
  );
}

// ── Book Now Button ───────────────────────────────────────
function BookNowButton({ onClick }: { onClick?: () => void }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector("#booking");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onClick?.();
  };

  return (
    <a
      href="#booking"
      onClick={handleClick}
      className="inline-flex items-center px-5 py-2 bg-[#C9A84C] text-[#1A1A1A] text-sm font-semibold rounded-sm hover:bg-[#E2C47A] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A] tracking-wide"
      aria-label="Book an appointment at Mr. Ali Barbershop"
    >
      Book Now
    </a>
  );
}

// ── Main Navbar ───────────────────────────────────────────
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  // Trap focus in drawer when open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      // Focus the first link in drawer
      setTimeout(() => {
        drawerRef.current?.querySelector("a")?.focus();
      }, 100);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <>
      {/* Skip to Main Content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#C9A84C] focus:text-[#1A1A1A] focus:px-4 focus:py-2 focus:font-semibold focus:rounded focus:outline-none"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("main-content")?.focus();
        }}
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#1A1A1A]/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-[#C9A84C]/10"
            : "bg-transparent"
        }`}
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          <Logo />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </div>

          <div className="hidden md:block">
            <BookNowButton />
          </div>

          {/* Mobile Hamburger */}
          <button
            ref={menuButtonRef}
            className="md:hidden p-2 text-[#F5F0E8] hover:text-[#C9A84C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded-sm"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />
            <motion.div
              ref={drawerRef}
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#1A1A1A] border-l border-[#C9A84C]/20 md:hidden flex flex-col"
              role="dialog"
              aria-label="Mobile navigation menu"
              aria-modal="true"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-[#C9A84C]/20">
                <Logo />
                <button
                  onClick={closeMenu}
                  className="p-2 text-[#F5F0E8] hover:text-[#C9A84C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded-sm"
                  aria-label="Close navigation menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex flex-col p-6 gap-1 flex-1" aria-label="Mobile navigation links">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        const target = document.querySelector(link.href);
                        if (target) {
                          target.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                        closeMenu();
                      }}
                      className="block py-3 px-4 text-[#F5F0E8] text-lg font-medium hover:text-[#C9A84C] hover:bg-[#C9A84C]/5 rounded-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]"
                    >
                      {link.label}
                    </a>
                  </motion.div>
                ))}
                <div className="mt-4">
                  <BookNowButton onClick={closeMenu} />
                </div>
              </nav>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-[#C9A84C]/20">
                <p className="text-[#F5F0E8]/40 text-xs">
                  Open Daily · Closes 11:30 PM
                </p>
                <a
                  href="tel:0896-5263-9156"
                  className="text-[#C9A84C] text-sm font-medium hover:text-[#E2C47A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded-sm"
                >
                  0896-5263-9156
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
