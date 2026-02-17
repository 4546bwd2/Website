import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "Our Story" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navBg = scrolled || !isHome
    ? "bg-cream/95 backdrop-blur-md shadow-sm border-b border-sand"
    : "bg-transparent";

  const textColor = scrolled || !isHome ? "text-charcoal" : "text-white";
  const logoColor = scrolled || !isHome ? "text-terracotta" : "text-white";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className={`font-heading text-2xl sm:text-3xl font-semibold tracking-wide transition-colors duration-300 ${logoColor}`}
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Baliterraneo
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-terracotta/10 ${
                    location.pathname === link.to
                      ? `${textColor} font-semibold`
                      : `${textColor} opacity-80 hover:opacity-100`
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi%2C%20I'd%20like%20to%20reserve%20a%20table.`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 bg-terracotta text-white px-5 py-2.5 rounded-xl text-sm font-semibold 
                  hover:bg-terracotta-dark transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-terracotta/20
                  active:scale-[0.98]"
              >
                <Phone className="w-4 h-4" />
                Reserve
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${textColor}`}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-cream pt-20 lg:hidden"
          >
            <div className="flex flex-col items-center gap-2 px-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`w-full text-center py-3 px-4 text-lg rounded-xl transition-all duration-200 ${
                    location.pathname === link.to
                      ? "bg-terracotta/10 text-terracotta font-semibold"
                      : "text-charcoal hover:bg-sand"
                  }`}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi%2C%20I'd%20like%20to%20reserve%20a%20table.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full text-center flex items-center justify-center gap-2 bg-terracotta text-white px-6 py-3.5 rounded-xl text-lg font-semibold 
                  hover:bg-terracotta-dark transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                Reserve a Table
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
