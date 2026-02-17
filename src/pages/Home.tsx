import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  Sun,
  ChefHat,
  Heart,
  MapPin,
  Clock,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { CTAButton } from "@/components/CTAButton";
import { SectionHeading } from "@/components/SectionHeading";
import { ReviewCard } from "@/components/ReviewCard";
import { GalleryGrid } from "@/components/GalleryGrid";
import { reviews } from "@/data/reviews";
import { galleryImages } from "@/data/gallery";
import { siteConfig } from "@/data/site";
import { menuCategories } from "@/data/menu";

export function Home() {
  return (
    <main>
      {/* ───── HERO ───── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden film-grain">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
            alt="Mediterranean dining atmosphere"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70" />
        </div>

        {/* Decorative blobs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-olive/10 rounded-full blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 text-terracotta-light text-sm font-semibold tracking-widest uppercase mb-6">
              <span className="w-8 h-px bg-terracotta-light" />
              Italian-owned · Bali
              <span className="w-8 h-px bg-terracotta-light" />
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Authentic Italian flavor,
            <br />
            <span className="text-terracotta-light italic">Bali ease.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            Breakfast, lunch &amp; dinner — served with warm hospitality, fresh
            Mediterranean ingredients, and the ease of island living.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <CTAButton
              size="lg"
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi%2C%20I'd%20like%20to%20reserve%20a%20table.`}
              external
              icon={<MessageCircle className="w-5 h-5" />}
            >
              Reserve a Table
            </CTAButton>
            <CTAButton
              variant="outline"
              size="lg"
              to="/menu"
              className="border-white/30 text-white hover:bg-white hover:text-charcoal hover:border-white"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              View Menu
            </CTAButton>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ───── SOCIAL PROOF STRIP ───── */}
      <section className="bg-white border-y border-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-terracotta text-terracotta"
                />
              ))}
            </div>
            <p className="text-charcoal/60 text-sm sm:text-base max-w-lg">
              <span className="font-semibold text-charcoal">
                Loved for breakfast, authentic Italian taste,
              </span>{" "}
              and welcoming staff — rated 4.8 on Google.
            </p>
          </div>
        </div>
      </section>

      {/* ───── REVIEW HIGHLIGHTS ───── */}
      <section className="relative py-20 sm:py-28 bg-cream overflow-hidden">
        <div className="absolute inset-0 tile-pattern" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Guests Say"
            subtitle="Real words from real guests — from Google Reviews"
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((review, index) => (
              <ReviewCard key={index} review={review} index={index} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTAButton variant="ghost" to="/reviews" icon={<ArrowRight className="w-4 h-4" />}>
              Read All Reviews
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ───── SIGNATURE EXPERIENCE ───── */}
      <section className="py-20 sm:py-28 bg-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="The Baliterraneo Experience"
            subtitle="Where Mediterranean soul meets tropical calm"
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Sun className="w-8 h-8" />,
                title: "Breakfast Worth\nWaking Up For",
                description:
                  "Start your morning with a generous spread — from fluffy pancakes and açaí bowls to a full Italian breakfast with prosciutto and fresh ciabatta. Many options, all delicious.",
              },
              {
                icon: <ChefHat className="w-8 h-8" />,
                title: "OG Italian\nTaste",
                description:
                  "Italian-owned and operated. Handmade pasta, authentic recipes passed down through generations, and imported ingredients that bring the real flavors of Italy to your plate.",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Warm, Attentive\nService",
                description:
                  "Our staff are the heart of Baliterraneo — cheerful, welcoming, and genuinely attentive. Kids are celebrated, families are embraced, and every guest feels at home.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group bg-white rounded-2xl p-8 sm:p-10 text-center border border-sand hover:shadow-xl hover:shadow-terracotta/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-terracotta/10 text-terracotta mb-6 group-hover:bg-terracotta group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3
                  className="text-2xl font-semibold text-charcoal whitespace-pre-line leading-snug"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.title}
                </h3>
                <p className="mt-4 text-charcoal/60 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── MENU PREVIEW ───── */}
      <section className="relative py-20 sm:py-28 bg-cream overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-terracotta/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="A Taste of the Menu"
            subtitle="From sunrise breakfasts to candlelit dinners"
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {menuCategories.slice(0, 6).map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  to="/menu"
                  className="group block bg-white rounded-2xl p-6 border border-sand hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3
                      className="text-xl font-semibold text-charcoal group-hover:text-terracotta transition-colors"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {category.title}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-charcoal/30 group-hover:text-terracotta group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-sm text-charcoal/50 mb-4">{category.subtitle}</p>
                  <ul className="space-y-1.5">
                    {category.items.slice(0, 3).map((item) => (
                      <li
                        key={item.name}
                        className="flex justify-between text-sm"
                      >
                        <span className="text-charcoal/70 truncate mr-3">
                          {item.name}
                          {item.popular && (
                            <span className="ml-2 text-[10px] bg-terracotta/10 text-terracotta px-1.5 py-0.5 rounded-full font-medium">
                              Popular
                            </span>
                          )}
                        </span>
                        <span className="text-charcoal/40 shrink-0 text-xs">
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {category.items.length > 3 && (
                    <p className="mt-3 text-xs text-terracotta font-medium">
                      +{category.items.length - 3} more items
                    </p>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <CTAButton to="/menu" icon={<ArrowRight className="w-4 h-4" />}>
              View Full Menu
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ───── GALLERY TEASER ───── */}
      <section className="py-20 sm:py-28 bg-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="A Glimpse Inside"
            subtitle="Mediterranean warmth, Bali breeze, Italian soul"
          />
          <div className="mt-14">
            <GalleryGrid images={galleryImages} limit={6} />
          </div>
          <div className="mt-10 text-center">
            <CTAButton variant="ghost" to="/gallery" icon={<ArrowRight className="w-4 h-4" />}>
              View Full Gallery
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ───── LOCATION & HOURS ───── */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Find Us" subtitle="Your table is waiting" />

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Map placeholder */}
            <div className="lg:col-span-3 bg-sand rounded-2xl overflow-hidden min-h-[300px] sm:min-h-[400px] flex items-center justify-center border border-sand">
              <div className="text-center p-8">
                <MapPin className="w-12 h-12 text-terracotta/30 mx-auto mb-4" />
                <p className="text-charcoal/40 text-sm mb-4">
                  Map embed area
                </p>
                <CTAButton
                  variant="outline"
                  size="sm"
                  href={siteConfig.contact.mapsUrl}
                  external
                  icon={<MapPin className="w-4 h-4" />}
                >
                  Get Directions
                </CTAButton>
              </div>
            </div>

            {/* Info cards */}
            <div className="lg:col-span-2 space-y-4">
              {[
                {
                  icon: <MapPin className="w-5 h-5" />,
                  label: "Address",
                  value: siteConfig.contact.address,
                  action: {
                    text: "Get Directions",
                    href: siteConfig.contact.mapsUrl,
                  },
                },
                {
                  icon: <Clock className="w-5 h-5" />,
                  label: "Hours",
                  value: `Daily: ${siteConfig.hours.weekday}`,
                  subtext: siteConfig.hours.note,
                },
                {
                  icon: <Phone className="w-5 h-5" />,
                  label: "Reservations",
                  value: siteConfig.contact.phone,
                  action: {
                    text: "WhatsApp Us",
                    href: `https://wa.me/${siteConfig.contact.whatsapp}`,
                  },
                },
              ].map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-sand"
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
                        <p className="text-xs text-charcoal/40 mt-1">{card.subtext}</p>
                      )}
                      {card.action && (
                        <a
                          href={card.action.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-terracotta font-medium mt-2 hover:underline"
                        >
                          {card.action.text}
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── FINAL CTA ───── */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80"
            alt="Evening dining atmosphere"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sea/90 to-charcoal/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Reserve your table
              <br />
              <span className="italic text-terracotta-light">for tonight.</span>
            </h2>
            <p className="mt-4 text-white/60 text-lg max-w-lg mx-auto">
              Whether it's a family breakfast or a sunset dinner — we're
              here to make it memorable.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton
                size="lg"
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi%2C%20I'd%20like%20to%20reserve%20a%20table.`}
                external
                icon={<MessageCircle className="w-5 h-5" />}
              >
                Reserve via WhatsApp
              </CTAButton>
              <CTAButton
                variant="outline"
                size="lg"
                href={siteConfig.contact.mapsUrl}
                external
                className="border-white/30 text-white hover:bg-white hover:text-charcoal"
                icon={<MapPin className="w-5 h-5" />}
              >
                Get Directions
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
