import { motion } from "framer-motion";
import { Mic2, Scissors, Sparkles, Star } from "lucide-react";

// ── Feature Card Data ─────────────────────────────────────
const FEATURES = [
  {
    icon: Mic2,
    title: "Live Karaoke Vibes",
    description:
      "Music fills the street. Ali might even sing with you. Customers have walked out laughing and smiling — the haircut was just a bonus.",
    color: "#C9A84C",
  },
  {
    icon: Scissors,
    title: "Master of His Craft",
    description:
      "Every cut is precise, every edge is razor sharp. Ali has spent years perfecting his technique, and it shows in every single customer he serves.",
    color: "#C9A84C",
  },
  {
    icon: Sparkles,
    title: "Full Treatment Included",
    description:
      "Wash, hot towel, face lotion. The full package. Not just a haircut — a complete grooming experience that leaves you looking and feeling incredible.",
    color: "#C9A84C",
  },
];

// ── Feature Card Component ────────────────────────────────
function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof FEATURES)[0];
  index: number;
}) {
  const Icon = feature.icon;

  return (
    <motion.div
      className="bg-[#1A1A1A] border border-[#C9A84C]/15 rounded-sm p-6 flex flex-col gap-4 hover:border-[#C9A84C]/40 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
    >
      <div
        className="w-12 h-12 rounded-sm flex items-center justify-center"
        style={{ background: "rgba(201, 168, 76, 0.08)", border: "1px solid rgba(201, 168, 76, 0.2)" }}
      >
        <Icon size={22} className="text-[#C9A84C]" aria-hidden="true" />
      </div>
      <h3
        className="font-playfair text-[#F5F0E8] text-lg font-semibold"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {feature.title}
      </h3>
      <p className="text-[#F5F0E8]/55 text-sm leading-relaxed">{feature.description}</p>
    </motion.div>
  );
}

// ── Experience Section ────────────────────────────────────
export default function Experience() {
  const handleBookNow = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="experience"
      className="relative py-24 lg:py-32 bg-[#232323] overflow-hidden"
      aria-label="The Mr. Ali experience"
    >
      {/* Background image overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ filter: "grayscale(100%)", opacity: 0.2 }}
        whileInView={{ filter: "grayscale(0%)", opacity: 0.35 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        style={{
          backgroundImage: `url("https://cdn.builder.io/api/v1/image/assets%2F449077f0aecf4345b14dd3a3853a5f94%2F71a7dc28cf5f4d0db4b32ad268aaad5d?format=webp&width=800&height=1200")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />

      {/* Decorative background */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 50% at 100% 50%, rgba(201,168,76,0.06) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Copy */}
          <div>
            <motion.p
              className="section-tag mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              ✦ More Than a Haircut
            </motion.p>

            <motion.h2
              className="font-playfair text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-[#F5F0E8] leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Not Just a Haircut.{" "}
              <span className="text-[#C9A84C] italic">An Experience.</span>
            </motion.h2>

            <motion.div
              className="gold-divider max-w-[120px] mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ transformOrigin: "left" }}
            />

            <motion.p
              className="text-[#F5F0E8]/65 text-base leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Step into Mr. Ali's laneway shop in Kuta and you'll notice something different immediately — karaoke music drifting through the warm Bali air, the smell of hot towels, and Ali himself greeting you with a massive grin.
            </motion.p>

            <motion.p
              className="text-[#F5F0E8]/65 text-base leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Customers don't just leave with sharper hair — they leave singing, laughing, and telling every person they meet to come here. The whole street comes alive. Ali's energy is contagious, his craft is undeniable, and the prices make it even more unbelievable.
            </motion.p>

            <motion.blockquote
              className="border-l-2 border-[#C9A84C] pl-5 py-2 mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-[#F5F0E8]/80 text-base italic leading-relaxed">
                "Karaoke continued throughout the service, which was honestly hilarious and I couldn't stop smiling. Cheaper than all the surrounding barber shops."
              </p>
              <footer className="text-[#C9A84C] text-sm font-semibold mt-2 flex items-center gap-1">
                — Alex Danielewski, Google Review
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-[#C9A84C] fill-[#C9A84C]" aria-hidden="true" />
                  ))}
                </div>
              </footer>
            </motion.blockquote>

            <motion.a
              href="#booking"
              onClick={handleBookNow}
              className="inline-flex items-center px-7 py-3.5 bg-[#C9A84C] text-[#1A1A1A] font-bold text-sm rounded-sm hover:bg-[#E2C47A] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#232323] tracking-wide"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              aria-label="Book your experience at Mr. Ali Barbershop"
            >
              Book Your Experience
            </motion.a>
          </div>

          {/* Right: Feature Cards */}
          <div className="flex flex-col gap-4">
            {FEATURES.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
