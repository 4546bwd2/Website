import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { reviews, reviewsDisclaimer, overallRating, totalReviews } from "@/data/reviews";
import { ReviewCard } from "@/components/ReviewCard";
import { SectionHeading } from "@/components/SectionHeading";

export function Reviews() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 bg-sea overflow-hidden">
        <div className="absolute inset-0 tile-pattern opacity-[0.03]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Guest Reviews"
            subtitle="What people are saying about their Baliterraneo experience"
            light
          />
        </div>
      </section>

      {/* Rating Overview */}
      <section className="bg-white border-b border-sand">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-8 h-8 ${
                    i < Math.floor(overallRating)
                      ? "fill-terracotta text-terracotta"
                      : "fill-terracotta/30 text-terracotta/30"
                  }`}
                />
              ))}
            </div>
            <p
              className="text-5xl font-bold text-charcoal"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {overallRating}
            </p>
            <p className="mt-2 text-charcoal/50 text-sm">
              Based on {totalReviews}+ reviews on Google
            </p>
            <a
              href="https://www.google.com/maps" // TODO: Replace with actual Google Maps listing
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-4 text-terracotta text-sm font-medium hover:underline"
            >
              View on Google Maps
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} index={index} />
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-14 p-5 bg-sand rounded-2xl text-center">
            <p className="text-xs text-charcoal/40">{reviewsDisclaimer}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
