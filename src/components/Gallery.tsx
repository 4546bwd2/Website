import { motion } from "framer-motion";
import { Scissors, Mic2, Star, Heart, Zap, Coffee } from "lucide-react";

// ── Gallery Placeholder Cards ─────────────────────────────
const GALLERY_ITEMS = [
  {
    label: "Precision Fades",
    icon: Scissors,
    bg: "from-[#2a1f0a] to-[#1A1A1A]",
    accent: "#C9A84C",
    span: "col-span-1 row-span-2",
  },
  {
    label: "Karaoke Sessions",
    icon: Mic2,
    bg: "from-[#1a0a2e] to-[#1A1A1A]",
    accent: "#9B59B6",
    span: "col-span-1",
  },
  {
    label: "Hot Towel Shaves",
    icon: Coffee,
    bg: "from-[#0a1a2e] to-[#1A1A1A]",
    accent: "#3498DB",
    span: "col-span-1",
  },
  {
    label: "Happy Customers",
    icon: Heart,
    bg: "from-[#2e0a0a] to-[#1A1A1A]",
    accent: "#D94F3D",
    span: "col-span-1",
  },
  {
    label: "Sharp Edges",
    icon: Zap,
    bg: "from-[#0a2e1a] to-[#1A1A1A]",
    accent: "#2ECC71",
    span: "col-span-1",
  },
  {
    label: "5-Star Results",
    icon: Star,
    bg: "from-[#2a1f0a] to-[#1A1A1A]",
    accent: "#C9A84C",
    span: "col-span-1",
  },
];

// ── Gallery Card ──────────────────────────────────────────
function GalleryCard({
  item,
  index,
}: {
  item: (typeof GALLERY_ITEMS)[0];
  index: number;
}) {
  const Icon = item.icon;
  const isPrecisionFades = item.label === "Precision Fades";
  const isKaraokeSessions = item.label === "Karaoke Sessions";
  const isSharpEdges = item.label === "Sharp Edges";
  const isHotTowelShaves = item.label === "Hot Towel Shaves";
  const isFiveStarResults = item.label === "5-Star Results";
  const isHappyCustomers = item.label === "Happy Customers";

  return (
    <motion.div
      className={`relative ${item.span} rounded-sm overflow-hidden border border-[#F5F0E8]/5 hover:border-[#C9A84C]/30 transition-all duration-300 group cursor-default`}
      style={{ minHeight: index === 0 ? "320px" : "150px" }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ scale: 1.01 }}
      role="img"
      aria-label={`Gallery: ${item.label}`}
    >
      {/* Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${item.bg}`}
        aria-hidden="true"
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Card image for Precision Fades */}
      {isPrecisionFades && (
        <div className="absolute inset-0 opacity-[0.5] group-hover:opacity-100 transition-opacity duration-300">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F449077f0aecf4345b14dd3a3853a5f94%2Fce7727657b304c9b871c4bdd08b1e7f7?format=webp&width=800&height=1200"
            alt="Precision Fades"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Card image for Karaoke Sessions */}
      {isKaraokeSessions && (
        <div className="absolute inset-0 opacity-[0.5] group-hover:opacity-100 transition-opacity duration-300">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F449077f0aecf4345b14dd3a3853a5f94%2Ff905a7558a8b4d93a4eaef3bca69b8be?format=webp&width=800&height=1200"
            alt="Karaoke Sessions"
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: "center 30%" }}
          />
        </div>
      )}

      {/* Card image for Sharp Edges */}
      {isSharpEdges && (
        <div className="absolute inset-0 opacity-[0.5] group-hover:opacity-100 transition-opacity duration-300">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F449077f0aecf4345b14dd3a3853a5f94%2F60f8f998494b47cf9782189cd6db27a7?format=webp&width=800&height=1200"
            alt="Sharp Edges"
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: "center 50%" }}
          />
        </div>
      )}

      {/* Card image for Hot Towel Shaves */}
      {isHotTowelShaves && (
        <div className="absolute inset-0 opacity-[0.5] group-hover:opacity-100 transition-opacity duration-300">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F449077f0aecf4345b14dd3a3853a5f94%2F5af069ee0abb4cb3a269408dcab53a8d?format=webp&width=800&height=1200"
            alt="Hot Towel Shaves"
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: "35% 20%" }}
          />
        </div>
      )}

      {/* Card image for 5-Star Results */}
      {isFiveStarResults && (
        <div className="absolute inset-0 opacity-[0.5] group-hover:opacity-100 transition-opacity duration-300">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F449077f0aecf4345b14dd3a3853a5f94%2Fd646d1ed74054f54bc2363ac3b884bb0?format=webp&width=800&height=1200"
            alt="5-Star Results"
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: "center 40%" }}
          />
        </div>
      )}

      {/* Card image for Happy Customers */}
      {isHappyCustomers && (
        <div className="absolute inset-0 opacity-[0.5] group-hover:opacity-100 transition-opacity duration-300">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F449077f0aecf4345b14dd3a3853a5f94%2Fbfed1a1701bf4fd8b398215c434b7baa?format=webp&width=800&height=1200"
            alt="Happy Customers"
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: "center 35%" }}
          />
        </div>
      )}

      {/* Content */}
      <div className={`absolute inset-0 flex ${(isPrecisionFades || isKaraokeSessions || isSharpEdges || isHotTowelShaves || isFiveStarResults || isHappyCustomers) ? (isHappyCustomers ? 'flex-col items-start justify-start p-4' : 'flex-col items-start justify-start p-4') : 'flex-col items-center justify-center gap-3 p-6'}`}>
        <div
          className="p-4 rounded-full transition-transform duration-300 group-hover:scale-110"
          style={{
            background: `${item.accent}15`,
            border: `1px solid ${item.accent}30`,
          }}
          aria-hidden="true"
        >
          <Icon size={index === 0 ? 36 : 24} style={{ color: item.accent }} />
        </div>
        {!isPrecisionFades && !isKaraokeSessions && !isSharpEdges && !isHotTowelShaves && !isFiveStarResults && !isHappyCustomers && (
          <span
            className="text-[#F5F0E8]/70 text-sm font-semibold text-center tracking-wide group-hover:text-[#F5F0E8] transition-colors duration-300"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: index === 0 ? "1.1rem" : "0.85rem",
            }}
          >
            {item.label}
          </span>
        )}
      </div>

      {/* Label for Precision Fades, Karaoke Sessions, Sharp Edges, Hot Towel Shaves, 5-Star Results & Happy Customers - centered */}
      {(isPrecisionFades || isKaraokeSessions || isSharpEdges || isHotTowelShaves || isFiveStarResults || isHappyCustomers) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className="text-[#F5F0E8]/70 text-sm font-semibold text-center tracking-wide group-hover:text-[#F5F0E8] transition-colors duration-300"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.1rem",
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.8), 0 0 12px rgba(0, 0, 0, 0.6)",
            }}
          >
            {item.label}
          </span>
        </div>
      )}

      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${item.accent}08 0%, transparent 70%)`,
        }}
        aria-hidden="true"
      />
    </motion.div>
  );
}

// ── Gallery Section ───────────────────────────────────────
export default function Gallery() {
  const handleBookNow = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="gallery"
      className="relative py-24 lg:py-32 bg-[#1A1A1A] overflow-hidden"
      aria-label="Gallery section"
    >
      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px z-10 opacity-30"
        style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
        aria-hidden="true"
      />

      {/* Background image overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ filter: "grayscale(100%)", opacity: 0.2 }}
        whileInView={{ filter: "grayscale(0%)", opacity: 0.35 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        style={{
          backgroundImage: `url("https://cdn.builder.io/api/v1/image/assets%2F449077f0aecf4345b14dd3a3853a5f94%2Fae365e3b71674e41aa7a99a9d8ff58fa?format=webp&width=800&height=1200")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.p
            className="section-tag mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            ✦ The Vibe
          </motion.p>
          <motion.h2
            className="font-playfair text-4xl sm:text-5xl font-bold text-[#F5F0E8] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Inside{" "}
            <span className="text-[#C9A84C]">Mr. Ali's</span>
          </motion.h2>
          <motion.div
            className="gold-divider max-w-xs mx-auto mt-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <motion.p
            className="text-[#F5F0E8]/55 text-base max-w-lg mx-auto mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A warm, electrifying corner of Kuta where music meets mastery.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {GALLERY_ITEMS.map((item, index) => (
            <GalleryCard key={item.label} item={item} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-[#F5F0E8]/40 text-sm mb-4">
            Come experience it yourself — no photo does it justice.
          </p>
          <a
            href="#booking"
            onClick={handleBookNow}
            className="inline-flex items-center px-7 py-3 bg-transparent text-[#C9A84C] font-semibold text-sm rounded-sm border border-[#C9A84C]/40 hover:bg-[#C9A84C]/5 hover:border-[#C9A84C] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A] tracking-wide"
            aria-label="Book your appointment at Mr. Ali Barbershop"
          >
            Book Your Appointment →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
