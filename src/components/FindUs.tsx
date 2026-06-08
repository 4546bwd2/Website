import { motion } from "framer-motion";
import { MapPin, ExternalLink, Music } from "lucide-react";

// ── Find Us Section ───────────────────────────────────────
export default function FindUs() {
  const MAPS_EMBED_URL =
    "https://maps.google.com/maps?q=Jl.+Poppies+II+No.2+Kuta+Bali&output=embed";

  const MAPS_LINK =
    "https://www.google.com/maps/search/?api=1&query=Jl.+Poppies+II+No.2+Kuta+Bali+Mr+Ali+Barbershop";

  return (
    <section
      id="find-us"
      className="relative py-24 lg:py-32 bg-[#1A1A1A] overflow-hidden"
      aria-label="Find us section — location and map"
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 z-0 opacity-8 bg-cover bg-center"
        style={{
          backgroundImage: `url("https://cdn.builder.io/api/v1/image/assets%2F449077f0aecf4345b14dd3a3853a5f94%2F867f6e776dc54dd4bbc5a9be07368278?format=webp&width=800&height=1200")`,
        }}
        aria-hidden="true"
      />

      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px z-10 opacity-30"
        style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.p
            className="section-tag mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            ✦ Location
          </motion.p>
          <motion.h2
            className="font-playfair text-4xl sm:text-5xl font-bold text-[#F5F0E8] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Find Us in{" "}
            <span className="text-[#C9A84C]">Kuta, Bali</span>
          </motion.h2>
          <motion.div
            className="gold-divider max-w-xs mx-auto mt-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left: Info Panel */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Address Card */}
            <div className="bg-[#232323] border border-[#C9A84C]/15 rounded-sm p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-sm bg-[#C9A84C]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={18} className="text-[#C9A84C]" aria-hidden="true" />
                </div>
                <div>
                  <h3
                    className="text-[#F5F0E8] font-semibold text-base mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Our Address
                  </h3>
                  <address className="text-[#F5F0E8]/60 text-sm not-italic leading-relaxed">
                    Jl. Poppies II No.2<br />
                    Kuta, Kec. Kuta<br />
                    Kabupaten Badung<br />
                    Bali 80361, Indonesia
                  </address>
                </div>
              </div>

              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#C9A84C] text-sm font-semibold hover:text-[#E2C47A] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded-sm"
                aria-label="Open Mr. Ali Barbershop in Google Maps (opens in new tab)"
              >
                Open in Google Maps
                <ExternalLink size={13} aria-hidden="true" />
              </a>
            </div>

            {/* Fun Tip Card */}
            <div className="bg-[#232323] border border-[#C9A84C]/15 rounded-sm p-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-sm bg-[#C9A84C]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Music size={18} className="text-[#C9A84C]" aria-hidden="true" />
                </div>
                <div>
                  <h3
                    className="text-[#F5F0E8] font-semibold text-base mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Can't Find Us?
                  </h3>
                  <p className="text-[#F5F0E8]/60 text-sm leading-relaxed">
                    Look for the karaoke music — you'll hear us before you see us!
                  </p>
                  <p className="text-[#F5F0E8]/40 text-xs mt-2">
                    We're right in the Poppies II laneway, one of Kuta's most vibrant streets.
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Quick Reference */}
            <div className="bg-[#232323] border border-[#C9A84C]/15 rounded-sm p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                <span className="text-[#F5F0E8] text-sm font-semibold">Open Now</span>
              </div>
              <p className="text-[#F5F0E8]/60 text-sm">
                Open <span className="text-[#F5F0E8] font-medium">every day</span> until{" "}
                <span className="text-[#C9A84C] font-bold">11:30 PM</span>
              </p>
              <p className="text-[#F5F0E8]/40 text-xs mt-1">No appointment needed — walk-ins welcome</p>
            </div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            className="lg:col-span-3 relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-sm overflow-hidden border border-[#C9A84C]/20" style={{ height: "400px" }}>
              {/* Map iframe */}
              <iframe
                src={MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map showing Mr. Ali Barbershop location at Jl. Poppies II No.2, Kuta, Bali"
                aria-label="Google Maps showing Mr. Ali Barbershop at Jl. Poppies II No.2, Kuta, Bali"
              />

              {/* Gold frame overlay corners */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#C9A84C]/60 pointer-events-none" aria-hidden="true" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#C9A84C]/60 pointer-events-none" aria-hidden="true" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#C9A84C]/60 pointer-events-none" aria-hidden="true" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#C9A84C]/60 pointer-events-none" aria-hidden="true" />
            </div>

            {/* Map caption */}
            <p className="text-[#F5F0E8]/30 text-xs text-center mt-3">
              Jl. Poppies II No.2, Kuta, Bali ·{" "}
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9A84C]/60 hover:text-[#C9A84C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded-sm"
                aria-label="View larger map on Google Maps (opens in new tab)"
              >
                View larger map ↗
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
