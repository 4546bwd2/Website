import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import type { Review } from "@/data/reviews";

interface ReviewCardProps {
  review: Review;
  index?: number;
}

export function ReviewCard({ review, index = 0 }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-sand 
        hover:shadow-xl hover:shadow-terracotta/5 hover:-translate-y-1 transition-all duration-300"
    >
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-terracotta/20 to-olive/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm scale-[1.02]" />
      
      <Quote className="w-8 h-8 text-terracotta/20 mb-4" />
      
      <p className="text-charcoal/80 leading-relaxed mb-6 text-base">
        "{review.quote}"
      </p>

      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-charcoal">{review.author}</p>
          <span className="text-xs font-medium text-terracotta bg-terracotta/10 px-2 py-0.5 rounded-full">
            {review.highlight}
          </span>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-terracotta text-terracotta" />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
