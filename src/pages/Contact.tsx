import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Mail,
  Navigation,
  Instagram,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import { siteConfig } from "@/data/site";

export function Contact() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 bg-sea overflow-hidden">
        <div className="absolute inset-0 tile-pattern opacity-[0.03]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Get in Touch"
            subtitle="Reserve a table, ask a question, or just say hello — we'd love to hear from you"
            light
          />
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact cards */}
            <div className="lg:col-span-2 space-y-5">
              {/* WhatsApp CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-terracotta rounded-2xl p-6 sm:p-8 text-white"
              >
                <MessageCircle className="w-8 h-8 mb-4 text-white/80" />
                <h3
                  className="text-2xl font-semibold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Reserve via WhatsApp
                </h3>
                <p className="mt-2 text-white/80 text-sm leading-relaxed">
                  The fastest way to book your table. Send us a message and
                  we'll confirm your reservation.
                </p>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi%2C%20I'd%20like%20to%20reserve%20a%20table.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 bg-white text-terracotta px-5 py-3 rounded-xl text-sm font-semibold hover:bg-cream transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Open WhatsApp
                </a>
              </motion.div>

              {/* Info cards */}
              {[
                {
                  icon: <MapPin className="w-5 h-5" />,
                  label: "Address",
                  value: siteConfig.contact.address,
                  action: {
                    text: "Get Directions",
                    href: siteConfig.contact.mapsUrl,
                    icon: <Navigation className="w-3 h-3" />,
                  },
                },
                {
                  icon: <Clock className="w-5 h-5" />,
                  label: "Opening Hours",
                  value: `Daily: ${siteConfig.hours.weekday}`,
                  subtext: siteConfig.hours.note,
                },
                {
                  icon: <Phone className="w-5 h-5" />,
                  label: "Phone",
                  value: siteConfig.contact.phone,
                  action: {
                    text: "Call Us",
                    href: `tel:${siteConfig.contact.phone}`,
                    icon: <Phone className="w-3 h-3" />,
                  },
                },
                {
                  icon: <Mail className="w-5 h-5" />,
                  label: "Email",
                  value: siteConfig.contact.email,
                  action: {
                    text: "Send Email",
                    href: `mailto:${siteConfig.contact.email}`,
                    icon: <Mail className="w-3 h-3" />,
                  },
                },
                {
                  icon: <Instagram className="w-5 h-5" />,
                  label: "Instagram",
                  value: "@baliterraneo",
                  action: {
                    text: "Follow Us",
                    href: siteConfig.social.instagram,
                    icon: <Instagram className="w-3 h-3" />,
                  },
                },
              ].map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className="bg-white rounded-2xl p-5 border border-sand"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-terracotta/10 text-terracotta shrink-0">
                      {card.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/40 mb-1">
                        {card.label}
                      </p>
                      <p className="text-charcoal font-medium text-sm">
                        {card.value}
                      </p>
                      {card.subtext && (
                        <p className="text-xs text-charcoal/40 mt-1">
                          {card.subtext}
                        </p>
                      )}
                      {card.action && (
                        <a
                          href={card.action.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-terracotta font-medium mt-2 hover:underline"
                        >
                          {card.action.icon}
                          {card.action.text}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-sand rounded-2xl overflow-hidden h-full min-h-[400px] sm:min-h-[500px] flex flex-col items-center justify-center border border-sand"
              >
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-terracotta/10 flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-10 h-10 text-terracotta/40" />
                  </div>
                  <h3
                    className="text-2xl font-semibold text-charcoal mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Find Us on the Map
                  </h3>
                  <p className="text-sm text-charcoal/40 max-w-sm mb-6">
                    {siteConfig.contact.address}
                  </p>
                  <CTAButton
                    href={siteConfig.contact.mapsUrl}
                    external
                    icon={<Navigation className="w-4 h-4" />}
                  >
                    Open in Google Maps
                  </CTAButton>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 bg-sand">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            We can't wait to welcome you.
          </h2>
          <p className="mt-3 text-charcoal/60">
            For groups of 6 or more, please contact us in advance.
          </p>
        </div>
      </section>
    </main>
  );
}
