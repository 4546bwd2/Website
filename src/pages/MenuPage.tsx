import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Download, Flame } from "lucide-react";
import { menuCategories } from "@/data/menu";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";

const tagColors: Record<string, string> = {
  V: "bg-olive/10 text-olive",
  VG: "bg-olive/20 text-olive",
  GF: "bg-terracotta/10 text-terracotta",
};

export function MenuPage() {
  const [activeSection, setActiveSection] = useState(menuCategories[0].id);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 bg-sea overflow-hidden">
        <div className="absolute inset-0 tile-pattern opacity-[0.03]" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Our Menu"
            subtitle="Handmade with love — Italian recipes, Mediterranean ingredients, served in Bali"
            light
          />
          <div className="mt-8">
            <CTAButton
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-charcoal"
              href="#"
              icon={<Download className="w-4 h-4" />}
            >
              Download PDF Menu
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Sticky section nav */}
      <div className="sticky top-16 sm:top-20 z-30 bg-cream/95 backdrop-blur-md border-b border-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav
            className="flex gap-1 overflow-x-auto py-3 menu-section-nav"
            aria-label="Menu sections"
          >
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToSection(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeSection === cat.id
                    ? "bg-terracotta text-white"
                    : "text-charcoal/60 hover:bg-sand hover:text-charcoal"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Menu sections */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {menuCategories.map((category) => (
          <div
            key={category.id}
            id={category.id}
            ref={(el) => { sectionRefs.current[category.id] = el; }}
            className="mb-16 last:mb-0 scroll-mt-36"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h2
                className="text-3xl sm:text-4xl font-semibold text-charcoal mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {category.title}
              </h2>
              <p className="text-charcoal/50 text-sm mb-8">
                {category.subtitle}
              </p>
              <div className="h-px w-full bg-gradient-to-r from-terracotta/30 via-terracotta/10 to-transparent mb-8" />
            </motion.div>

            <div className="space-y-1">
              {category.items.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group p-4 sm:p-5 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-200 border border-transparent hover:border-sand"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base sm:text-lg font-semibold text-charcoal">
                          {item.name}
                        </h3>
                        {item.popular && (
                          <span className="inline-flex items-center gap-1 text-[11px] bg-terracotta/10 text-terracotta px-2 py-0.5 rounded-full font-semibold">
                            <Flame className="w-3 h-3" />
                            Popular
                          </span>
                        )}
                        {item.tags?.map((tag) => (
                          <span
                            key={tag}
                            className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${tagColors[tag]}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="mt-1 text-sm text-charcoal/50 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    {item.price && (
                      <span className="text-sm font-semibold text-terracotta whitespace-nowrap pt-1">
                        {item.price}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Bottom note */}
        <div className="mt-16 p-6 bg-sand rounded-2xl text-center">
          <p className="text-sm text-charcoal/50">
            Prices are in Indonesian Rupiah (IDR). Subject to 10% tax and 5%
            service charge. Please inform our staff of any allergies or dietary
            requirements.
          </p>
          <p className="text-xs text-charcoal/30 mt-2">
            Menu items and prices are examples — TODO: Replace with actual menu data.
          </p>
        </div>
      </div>
    </main>
  );
}
