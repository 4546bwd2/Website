import { motion } from "framer-motion";
import { Star, ChevronDown, Droplets, Hand, Mic } from "lucide-react";

// ── Animated Barber Pole SVG ──────────────────────────────
function AnimatedBarberPole() {
  return (
    <motion.div
      className="hidden lg:flex flex-col items-center absolute right-16 xl:right-24 top-1/2 -translate-y-1/2"
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
      aria-hidden="true"
    >
      {/* Pole cap top */}
      <div className="w-14 h-6 bg-gradient-to-b from-[#C9A84C] to-[#A07830] rounded-t-full shadow-lg" />
      
      {/* Pole body with stripes */}
      <div className="w-10 h-64 relative overflow-hidden rounded-sm shadow-2xl border border-[#C9A84C]/40">
        {/* Animated stripes */}
        <div
          className="barber-pole-anim absolute inset-0 opacity-95"
          style={{
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glass overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-white/8 via-white/15 to-white/5 pointer-events-none" />
        {/* Edge shine */}
        <div className="absolute inset-0 z-10 bg-gradient-to-l from-white/10 via-transparent to-transparent pointer-events-none" />
      </div>
      
      {/* Pole cap bottom */}
      <div className="w-14 h-6 bg-gradient-to-t from-[#C9A84C] to-[#A07830] rounded-b-full shadow-lg" />

      {/* Glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-20"
        animate={{
          boxShadow: [
            "0 0 20px 5px rgba(201,168,76,0.3)",
            "0 0 40px 10px rgba(201,168,76,0.5)",
            "0 0 20px 5px rgba(201,168,76,0.3)",
          ],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

// ── Star Rating Badge ─────────────────────────────────────
function StarRatingBadge() {
  return (
    <motion.div
      className="inline-flex items-center gap-2 bg-[#232323]/80 border border-[#C9A84C]/30 rounded-full px-4 py-2 backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      role="img"
      aria-label="Rated 4.9 out of 5 stars based on 323 Google reviews"
    >
      <div className="flex items-center gap-0.5" aria-hidden="true">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            className="text-[#C9A84C] fill-[#C9A84C]"
          />
        ))}
      </div>
      <span className="text-[#F5F0E8] text-sm font-semibold">4.9</span>
      <span className="text-[#F5F0E8]/50 text-sm">—</span>
      <span className="text-[#F5F0E8]/70 text-sm">323 Reviews on Google</span>
    </motion.div>
  );
}

// ── Background Effects ────────────────────────────────────
function HeroBackground() {
  return (
    <>
      {/* Base radial gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201,168,76,0.08) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(201,168,76,0.05) 0%, transparent 60%), #1A1A1A",
        }}
        aria-hidden="true"
      />

      {/* Background image overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10 bg-cover bg-center"
        style={{
          backgroundImage: `url("https://cdn.builder.io/api/v1/image/assets%2F449077f0aecf4345b14dd3a3853a5f94%2Fb546910cbcb841939ce56bd4b96159e1?format=webp&width=800&height=1200")`,
        }}
        aria-hidden="true"
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Decorative lines */}
      <div
        className="absolute top-0 left-0 right-0 h-px z-0 opacity-30"
        style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
        aria-hidden="true"
      />

      {/* Animated glow orb */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full z-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />
    </>
  );
}

// ── Main Hero ─────────────────────────────────────────────
export default function Hero() {
  const handleSeeOurWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleBookAppointment = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleScrollDown = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="main-content"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      tabIndex={-1}
      aria-label="Hero section — Mr. Ali Barbershop"
    >
      <HeroBackground />
      <AnimatedBarberPole />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center text-center lg:items-start lg:text-left">
        {/* Rating Badge */}
        <StarRatingBadge />

        {/* Section Tag */}
        <motion.p
          className="section-tag mt-8 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          ✦ Kuta, Bali's Finest Since Day One
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          className="font-playfair text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold leading-[1.05] mb-6 max-w-3xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="text-[#F5F0E8]">Bali's Most </span>
          <span
            className="text-[#C9A84C]"
            style={{
              textShadow: "0 0 40px rgba(201,168,76,0.4)",
            }}
          >
            Legendary
          </span>
          <span className="text-[#F5F0E8]"> Barber.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          className="text-[#F5F0E8]/70 text-xl sm:text-2xl font-light max-w-xl mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Master cuts. Hot towel shaves.{" "}
          <span className="text-[#C9A84C] font-medium">Karaoke included.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <a
            href="#booking"
            onClick={handleBookAppointment}
            className="inline-flex items-center justify-center px-8 py-4 bg-[#C9A84C] text-[#1A1A1A] font-bold text-base rounded-sm hover:bg-[#E2C47A] active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A] tracking-wide shadow-lg shadow-[#C9A84C]/20"
            aria-label="Book an appointment at Mr. Ali Barbershop"
          >
            Book an Appointment
          </a>
          <a
            href="#gallery"
            onClick={handleSeeOurWork}
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-[#C9A84C] font-bold text-base rounded-sm border border-[#C9A84C]/50 hover:border-[#C9A84C] hover:bg-[#C9A84C]/5 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A] tracking-wide"
            aria-label="See our work and gallery"
          >
            See Our Work
          </a>
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          className="flex flex-wrap gap-3 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          aria-label="Key features"
        >
          {[
            { icon: Droplets, label: "Hot Towel Shaves" },
            { icon: Hand, label: "Head Massage" },
            { icon: Mic, label: "Karaoke Vibes" },
            { icon: Star, label: "4.9 Rated" },
          ].map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="text-[#F5F0E8]/60 text-sm border border-[#F5F0E8]/10 rounded-full px-3 py-1 backdrop-blur-sm flex items-center gap-2" style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              <Icon size={14} className="text-[#C9A84C]" aria-hidden="true" />
              {label}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#F5F0E8]/40 hover:text-[#C9A84C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded-full p-2"
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        aria-label="Scroll down to see more"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="bounce-arrow" />
      </motion.button>
    </section>
  );
}
