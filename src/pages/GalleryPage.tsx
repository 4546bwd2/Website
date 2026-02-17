import { useState } from "react";
import { galleryImages } from "@/data/gallery";
import { SectionHeading } from "@/components/SectionHeading";
import { GalleryGrid } from "@/components/GalleryGrid";

type Filter = "all" | "food" | "ambience" | "people";

export function GalleryPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  const filters: { value: Filter; label: string }[] = [
    { value: "all", label: "All" },
    { value: "food", label: "Food" },
    { value: "ambience", label: "Ambience" },
    { value: "people", label: "People" },
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 bg-sea overflow-hidden">
        <div className="absolute inset-0 tile-pattern opacity-[0.03]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Gallery"
            subtitle="Mediterranean warmth captured — our space, our food, our soul"
            light
          />
        </div>
      </section>

      {/* Filters */}
      <div className="bg-cream border-b border-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2 justify-center">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  filter === f.value
                    ? "bg-terracotta text-white"
                    : "text-charcoal/60 hover:bg-sand hover:text-charcoal"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery grid */}
      <section className="py-12 sm:py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid images={filtered} />
        </div>
        <p className="text-center text-xs text-charcoal/30 mt-8">
          Photos are placeholders — TODO: Replace with real restaurant photos.
        </p>
      </section>
    </main>
  );
}
