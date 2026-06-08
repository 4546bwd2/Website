import { motion } from "framer-motion";
import { Scissors, Star, Droplets, Wind, Zap, Heart, Smile, Sparkles } from "lucide-react";

// ── Service Data ──────────────────────────────────────────
const SERVICES = [
  {
    icon: Scissors,
    name: "Custom Haircut",
    description:
      "Precision cut tailored to your face shape and style, finished with expert razor detailing for crisp edges.",
    price: "Rp 65.000",
    tag: "Most Popular",
  },
  {
    icon: Star,
    name: "The Mr. Ali Special",
    description:
      "Ali's signature 0-fade — the cut he's mastered over years of craft. Includes wash, hot towel, and face lotion.",
    price: "Rp 85.000",
    tag: "Signature",
  },
  {
    icon: Droplets,
    name: "Hot Towel Shave",
    description:
      "Traditional shave with aromatic hot towel prep, precision razor work, and a soothing face lotion finish.",
    price: "Rp 75.000",
    tag: "Premium",
  },
  {
    icon: Wind,
    name: "Scissor Cut",
    description:
      "Classic scissor technique for natural, textured results with a soft, lived-in finish that holds its shape.",
    price: "Rp 60.000",
    tag: null,
  },
  {
    icon: Zap,
    name: "Razor Cut",
    description:
      "Sharp edges, clean lines, and razor-precise finish that frames your face with confidence.",
    price: "Rp 65.000",
    tag: null,
  },
  {
    icon: Sparkles,
    name: "Shampoo & Treatment",
    description:
      "Full wash with premium shampoo, deep conditioning treatment, and gentle scalp care for healthy hair.",
    price: "Rp 45.000",
    tag: null,
  },
  {
    icon: Heart,
    name: "Head Massage",
    description:
      "Deeply relaxing scalp massage using warm oils. Included with select services or as a standalone treat.",
    price: "Rp 40.000",
    tag: "Fan Favourite",
  },
  {
    icon: Smile,
    name: "Kids Cut",
    description:
      "Gentle, patient, and fun cuts for the little ones. Ali has a magic touch that keeps kids calm and smiling.",
    price: "Rp 50.000",
    tag: null,
  },
];

// ── Service Card ──────────────────────────────────────────
function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[0];
  index: number;
}) {
  const Icon = service.icon;

  const handleBookThis = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.article
      className="service-card relative bg-[#232323] border border-[#F5F0E8]/5 rounded-sm p-6 flex flex-col gap-4 group cursor-default"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      aria-label={`${service.name} service — ${service.price}`}
    >
      {/* Tag */}
      {service.tag && (
        <div className="absolute top-4 right-4">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#1A1A1A] bg-[#C9A84C] px-2 py-0.5 rounded-full">
            {service.tag}
          </span>
        </div>
      )}

      {/* Icon */}
      <div className="w-11 h-11 rounded-sm bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center group-hover:bg-[#C9A84C]/20 group-hover:border-[#C9A84C]/40 transition-all duration-300">
        <Icon size={20} className="text-[#C9A84C]" aria-hidden="true" />
      </div>

      {/* Name */}
      <h3
        className="font-playfair text-[#F5F0E8] text-lg font-semibold leading-tight"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {service.name}
      </h3>

      {/* Description */}
      <p className="text-[#F5F0E8]/55 text-sm leading-relaxed flex-1">
        {service.description}
      </p>

      {/* Price + Book */}
      <div className="flex items-center justify-between pt-2 border-t border-[#F5F0E8]/5">
        <span className="text-[#C9A84C] font-bold text-lg">{service.price}</span>
        <a
          href="#booking"
          onClick={handleBookThis}
          className="text-[#F5F0E8]/50 text-xs font-semibold uppercase tracking-widest hover:text-[#C9A84C] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded-sm px-1"
          aria-label={`Book ${service.name} service`}
        >
          Book This →
        </a>
      </div>
    </motion.article>
  );
}

// ── Main Services Section ─────────────────────────────────
export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 lg:py-32 bg-[#1A1A1A] overflow-hidden"
      aria-label="Services section"
    >
      {/* Background accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-30"
        style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            className="section-tag mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            ✦ Our Menu
          </motion.p>
          <motion.h2
            className="font-playfair text-4xl sm:text-5xl font-bold text-[#F5F0E8] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What We{" "}
            <span className="text-[#C9A84C]">Offer</span>
          </motion.h2>
          <motion.div
            className="gold-divider max-w-xs mx-auto mt-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <motion.p
            className="text-[#F5F0E8]/55 text-base max-w-xl mx-auto mt-6 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Every service is delivered with Ali's personal touch — precise, warm, and always worth every rupiah.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.name} service={service} index={index} />
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-[#F5F0E8]/40 text-sm">
            Prices may vary. Walk in or call{" "}
            <a
              href="tel:0896-5263-9156"
              className="text-[#C9A84C] hover:text-[#E2C47A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded-sm"
              aria-label="Call Mr. Ali Barbershop at 0896-5263-9156"
            >
              0896-5263-9156
            </a>{" "}
            to confirm today's rates.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
