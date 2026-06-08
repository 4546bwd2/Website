import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, MapPin } from "lucide-react";

const backgroundImage = "/about-bg.png";

// ── Barber Scissors Decorative ────────────────────────────
function AliImagePlaceholder() {
  return (
    <div
      className="relative w-full aspect-[3/4] max-w-sm mx-auto rounded-sm overflow-hidden bg-[#232323] border border-[#C9A84C]/20"
      role="img"
      aria-label="Mr. Ali smiling with scissors in his barbershop in Kuta, Bali"
    >
      {/* Mr. Ali photo */}
      <img
        src="/mr-ali.png"
        alt="Mr. Ali smiling in his barbershop in Kuta, Bali"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "32% center" }}
      />

      {/* Bottom gradient for text legibility */}
      <div
        className="absolute inset-x-0 bottom-0 h-2/5"
        style={{
          background:
            "linear-gradient(to top, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.6) 50%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Name plate & rating */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center gap-2 pb-6">
        <div className="text-center">
          <p
            className="font-playfair text-[#C9A84C] text-2xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Mr. Ali
          </p>
          <p className="text-[#F5F0E8]/60 text-xs uppercase tracking-widest mt-1">
            Master Barber · Kuta, Bali
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1" aria-label="Rated 4.9 out of 5 stars">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="text-[#C9A84C] fill-[#C9A84C]" />
          ))}
          <span className="text-[#F5F0E8]/70 text-sm ml-1">4.9</span>
        </div>
      </div>

      {/* Gold frame corners */}
      <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#C9A84C]/50" aria-hidden="true" />
      <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#C9A84C]/50" aria-hidden="true" />
      <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#C9A84C]/50" aria-hidden="true" />
      <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#C9A84C]/50" aria-hidden="true" />
    </div>
  );
}

// ── Stat Pill ─────────────────────────────────────────────
function StatPill({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 px-6 py-4 bg-[#1A1A1A] border border-[#C9A84C]/15 rounded-sm">
      <span className="font-playfair text-[#C9A84C] text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
        {value}
      </span>
      <span className="text-[#F5F0E8]/50 text-xs uppercase tracking-wider">{label}</span>
    </div>
  );
}

// ── About Section ─────────────────────────────────────────
export default function About() {
  const [imageOpacity, setImageOpacity] = useState(0.27);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (!aboutSection) return;

      const rect = aboutSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        const progress = 1 - sectionTop / windowHeight;
        const opacity = Math.max(0.27, Math.min(0.5, 0.27 + progress * 0.23));
        setImageOpacity(opacity);
      } else if (sectionTop >= windowHeight) {
        setImageOpacity(0.27);
      } else {
        setImageOpacity(0.5);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 bg-[#1A1A1A] overflow-hidden"
      aria-label="About Mr. Ali section"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: imageOpacity,
          transition: "opacity 0.1s ease-out",
        }}
        aria-hidden="true"
      />

      {/* Background radial */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(201,168,76,0.05) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <AliImagePlaceholder />
          </motion.div>

          {/* Right: Copy */}
          <div>
            <motion.p
              className="section-tag mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              ✦ The Man Behind the Chair
            </motion.p>

            <motion.h2
              className="font-playfair text-4xl sm:text-5xl font-bold text-[#F5F0E8] mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Meet{" "}
              <span className="text-[#C9A84C]">Mr. Ali</span>
            </motion.h2>

            <motion.div
              className="gold-divider max-w-[100px] mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ transformOrigin: "left" }}
            />

            <motion.p
              className="text-[#F5F0E8]/65 text-base leading-relaxed mb-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Ali has spent years mastering the art of barbering in the heart of Kuta, Bali — turning a small laneway shop into one of the island's most talked-about grooming destinations. His hands are steady, his eye for detail is razor sharp, and his commitment to every customer is total.
            </motion.p>

            <motion.p
              className="text-[#F5F0E8]/65 text-base leading-relaxed mb-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              But what truly sets Ali apart is his spirit. He brings pure joy into every session — singing karaoke, cracking jokes, and making every single person feel like a VIP. Music fills the air, laughter is constant, and the energy is simply electric.
            </motion.p>

            <motion.p
              className="text-[#F5F0E8]/65 text-base leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Whether you're a local or a traveller passing through Bali, Ali greets every customer personally and makes sure you leave not just with a great haircut — but with a memory you'll actually want to share.
            </motion.p>

            {/* Pull Quote */}
            <motion.blockquote
              className="relative mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="absolute -top-2 -left-2 text-[#C9A84C] text-5xl font-serif leading-none opacity-40" aria-hidden="true">"</div>
              <div className="bg-[#232323] border border-[#C9A84C]/20 rounded-sm p-6 pl-8">
                <p className="font-playfair text-[#F5F0E8] text-xl font-medium italic leading-relaxed" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Ali was the best! He really is master in his craft.
                </p>
                <footer className="flex items-center gap-2 mt-3">
                  <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="text-[#C9A84C] fill-[#C9A84C]" />
                    ))}
                  </div>
                  <span className="text-[#C9A84C] text-sm font-semibold">— Žan Gimpelj</span>
                </footer>
              </div>
            </motion.blockquote>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              aria-label="Mr. Ali Barbershop statistics"
            >
              <StatPill value="4.9★" label="Rating" />
              <StatPill value="323+" label="Reviews" />
              <StatPill value="Daily" label="Open 'til 11:30PM" />
            </motion.div>

            {/* Location */}
            <motion.div
              className="flex items-center gap-2 mt-6 text-[#F5F0E8]/40 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <MapPin size={14} className="text-[#C9A84C] shrink-0" aria-hidden="true" />
              <span>Jl. Poppies II No.2, Kuta, Kabupaten Badung, Bali 80361</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
