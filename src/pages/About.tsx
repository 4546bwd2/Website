import { motion } from "framer-motion";
import { Heart, Leaf, Users, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import { siteConfig } from "@/data/site";
import { MessageCircle } from "lucide-react";

export function About() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 bg-sea overflow-hidden">
        <div className="absolute inset-0 tile-pattern opacity-[0.03]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-terracotta/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Our Story"
            subtitle="Italian roots, Bali soul — a family restaurant built on authenticity and love"
            light
          />
        </div>
      </section>

      {/* Story */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80"
                  alt="Baliterraneo dining atmosphere"
                  className="w-full h-[400px] sm:h-[500px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-terracotta text-white rounded-2xl p-6 shadow-xl max-w-[200px] hidden sm:block">
                <p
                  className="text-2xl font-bold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Italian
                </p>
                <p className="text-sm text-white/80 mt-1">
                  owned & operated
                </p>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-terracotta text-sm font-semibold tracking-widest uppercase">
                The beginning
              </span>
              <h2
                className="mt-4 text-3xl sm:text-4xl font-bold text-charcoal leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                From Italy to Bali — with love
              </h2>
              <div className="mt-6 space-y-4 text-charcoal/70 leading-relaxed">
                <p>
                  Baliterraneo was born from a simple dream: to bring the
                  authentic tastes of Italy to the tropical calm of Bali. Our
                  Italian owner brought generations of culinary tradition
                  — recipes passed down at family tables, techniques
                  learned in Italian kitchens, and an unwavering respect for
                  quality ingredients.
                </p>
                <p>
                  The name says it all — <em>Bali</em> meets{" "}
                  <em>Mediterraneo</em>. We blend the warmth and freshness of
                  Mediterranean cuisine with the relaxed, welcoming spirit of
                  Bali. Every dish tells a story of where we come from and
                  where we are now.
                </p>
                <p>
                  But Baliterraneo is more than food. It's about hospitality —
                  the kind where staff remember your name, kids are celebrated,
                  and every guest is treated like family. That's the Italian way.
                  That's the Bali way. That's our way.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 bg-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What We Believe In"
            subtitle="The pillars that make Baliterraneo, Baliterraneo"
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Heart className="w-7 h-7" />,
                title: "Hospitality First",
                description:
                  "Warm, cheerful, attentive — our staff are the heart of everything we do. We welcome you like family.",
              },
              {
                icon: <Leaf className="w-7 h-7" />,
                title: "Authentic Ingredients",
                description:
                  "We source the finest — imported Italian staples paired with fresh, local Bali produce for genuine flavor.",
              },
              {
                icon: <Users className="w-7 h-7" />,
                title: "Family-Friendly",
                description:
                  "Kids menus, high chairs, and a welcoming atmosphere. Because great food is better shared with those you love.",
              },
              {
                icon: <MapPin className="w-7 h-7" />,
                title: "Bali + Italy",
                description:
                  "Two beautiful cultures, one table. Mediterranean soul meets tropical calm in every detail.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-sand text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-terracotta/10 text-terracotta mb-5">
                  {value.icon}
                </div>
                <h3
                  className="text-lg font-semibold text-charcoal mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {value.title}
                </h3>
                <p className="text-sm text-charcoal/60 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Come taste the story.
          </h2>
          <p className="mt-4 text-charcoal/60 text-lg">
            We can't wait to welcome you — and your family — to our table.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi%2C%20I'd%20like%20to%20reserve%20a%20table.`}
              external
              icon={<MessageCircle className="w-5 h-5" />}
            >
              Reserve a Table
            </CTAButton>
            <CTAButton variant="outline" to="/menu">
              View Menu
            </CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}
