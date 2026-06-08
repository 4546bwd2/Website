import { motion } from "framer-motion";
import { Phone, MapPin, Clock, ExternalLink } from "lucide-react";

// ── Maps URL ──────────────────────────────────────────────
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Jl.+Poppies+II+No.2+Kuta+Bali+Mr+Ali+Barbershop";

// ── Hours Display ─────────────────────────────────────────
function HoursDisplay() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4" aria-label="Opening hours">
      {days.slice(0, 4).map((day) => (
        <div
          key={day}
          className={`px-3 py-2 rounded-sm text-center ${
            day === today
              ? "bg-[#C9A84C]/15 border border-[#C9A84C]/40"
              : "bg-[#1A1A1A]/50 border border-[#F5F0E8]/5"
          }`}
        >
          <p className={`text-xs font-semibold uppercase tracking-wider ${day === today ? "text-[#C9A84C]" : "text-[#F5F0E8]/40"}`}>
            {day.slice(0, 3)}
          </p>
          <p className={`text-xs mt-0.5 ${day === today ? "text-[#F5F0E8]" : "text-[#F5F0E8]/40"}`}>
            Until 11:30 PM
          </p>
        </div>
      ))}
      {days.slice(4).map((day) => (
        <div
          key={day}
          className={`px-3 py-2 rounded-sm text-center ${
            day === today
              ? "bg-[#C9A84C]/15 border border-[#C9A84C]/40"
              : "bg-[#1A1A1A]/50 border border-[#F5F0E8]/5"
          }`}
        >
          <p className={`text-xs font-semibold uppercase tracking-wider ${day === today ? "text-[#C9A84C]" : "text-[#F5F0E8]/40"}`}>
            {day.slice(0, 3)}
          </p>
          <p className={`text-xs mt-0.5 ${day === today ? "text-[#F5F0E8]" : "text-[#F5F0E8]/40"}`}>
            Until 11:30 PM
          </p>
        </div>
      ))}
    </div>
  );
}

// ── Booking CTA Section ───────────────────────────────────
export default function BookingCTA() {
  return (
    <section
      id="booking"
      className="relative py-24 lg:py-32 bg-[#232323] overflow-hidden"
      aria-label="Book an appointment or contact us"
    >
      {/* Background effects */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Top gold line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #C9A84C50, transparent)" }}
        aria-hidden="true"
      />

      {/* Bottom gold line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #C9A84C50, transparent)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tag */}
        <motion.p
          className="section-tag mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ✦ Come See Us
        </motion.p>

        {/* Headline */}
        <motion.h2
          className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F0E8] leading-tight mb-5"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Ready for the{" "}
          <span className="text-[#C9A84C]">Best Haircut</span>
          <br />
          of Your Life?
        </motion.h2>

        {/* Sub-copy */}
        <motion.p
          className="text-[#F5F0E8]/60 text-lg max-w-xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Walk in or call ahead. We're open late every day — because great hair doesn't have a curfew.
        </motion.p>

        {/* Gold divider */}
        <motion.div
          className="gold-divider max-w-xs mx-auto mb-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Call Button */}
          <a
            href="tel:0896-5263-9156"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#C9A84C] text-[#1A1A1A] font-bold text-base rounded-sm hover:bg-[#E2C47A] active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#232323] tracking-wide shadow-lg shadow-[#C9A84C]/20 min-w-[260px] justify-center"
            aria-label="Call Mr. Ali Barbershop at 0896-5263-9156"
          >
            <Phone
              size={18}
              className="group-hover:animate-bounce"
              aria-hidden="true"
            />
            Call Us: 0896-5263-9156
          </a>

          {/* Directions Button */}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent text-[#C9A84C] font-bold text-base rounded-sm border-2 border-[#C9A84C]/50 hover:border-[#C9A84C] hover:bg-[#C9A84C]/5 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#232323] tracking-wide min-w-[260px] justify-center"
            aria-label="Get directions to Mr. Ali Barbershop on Google Maps (opens in new tab)"
          >
            <MapPin size={18} aria-hidden="true" />
            Get Directions
            <ExternalLink size={14} className="opacity-60" aria-hidden="true" />
          </a>
        </motion.div>

        {/* Hours info box */}
        <motion.div
          className="max-w-2xl mx-auto bg-[#1A1A1A]/60 border border-[#C9A84C]/15 rounded-sm p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock size={16} className="text-[#C9A84C]" aria-hidden="true" />
            <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest">
              Opening Hours
            </span>
          </div>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-2"
            aria-label="Open daily, closes at 11:30 PM"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
              <span className="text-[#F5F0E8] font-bold text-lg">Open Daily</span>
            </div>
            <span className="text-[#F5F0E8]/30 hidden sm:block" aria-hidden="true">·</span>
            <span className="text-[#F5F0E8]/70 text-lg">
              Closes at{" "}
              <span className="text-[#C9A84C] font-semibold">11:30 PM</span>
            </span>
          </div>

          <p className="text-[#F5F0E8]/40 text-xs mb-4">
            Walk-ins welcome · Late night cuts available
          </p>

          <HoursDisplay />
        </motion.div>
      </div>
    </section>
  );
}
