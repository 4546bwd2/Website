import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({ title, subtitle, centered = true, light = false }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={centered ? "text-center" : ""}
    >
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight ${
          light ? "text-white" : "text-charcoal"
        }`}
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-base sm:text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-white/70" : "text-charcoal/60"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-0.5 w-16 bg-terracotta rounded-full ${
          centered ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
