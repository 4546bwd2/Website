import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Instagram, Facebook, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-sea text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3
              className="text-3xl font-semibold text-white mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Baliterraneo
            </h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Authentic Italian flavor, Bali ease. Italian-owned, family-friendly dining with warm Mediterranean hospitality.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/10 hover:bg-terracotta transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/10 hover:bg-terracotta transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/10 hover:bg-terracotta transition-colors duration-200"
                aria-label="TripAdvisor"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {[
                { to: "/menu", label: "Menu" },
                { to: "/gallery", label: "Gallery" },
                { to: "/about", label: "Our Story" },
                { to: "/reviews", label: "Reviews" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/70 hover:text-terracotta-light transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-terracotta-light shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex gap-3 text-sm text-white/70">
                <Phone className="w-4 h-4 text-terracotta-light shrink-0 mt-0.5" />
                <span>{siteConfig.contact.phone}</span>
              </li>
              <li className="flex gap-3 text-sm text-white/70">
                <Clock className="w-4 h-4 text-terracotta-light shrink-0 mt-0.5" />
                <span>Daily {siteConfig.hours.weekday}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Hours
            </h4>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex justify-between">
                <span>Mon – Fri</span>
                <span>{siteConfig.hours.weekday}</span>
              </div>
              <div className="flex justify-between">
                <span>Sat – Sun</span>
                <span>{siteConfig.hours.weekend}</span>
              </div>
              <p className="text-xs text-white/40 mt-3">{siteConfig.hours.note}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Baliterraneo Restaurant Bali. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Crafted with Mediterranean warmth
          </p>
        </div>
      </div>
    </footer>
  );
}
