export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: "food" | "ambience" | "people";
  span?: "tall" | "wide" | "normal";
}

// Using placeholder images — TODO: Replace with real restaurant photos
export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Beautifully plated pasta dish with fresh herbs",
    category: "food",
    span: "wide",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    alt: "Restaurant interior with warm Mediterranean ambience",
    category: "ambience",
    span: "tall",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    alt: "Wood-fired pizza fresh from the oven",
    category: "food",
    span: "normal",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    alt: "Tropical garden dining area",
    category: "ambience",
    span: "normal",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    alt: "Fresh breakfast spread with fruits and pastries",
    category: "food",
    span: "wide",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80",
    alt: "Espresso being prepared with care",
    category: "food",
    span: "normal",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    alt: "Pool area with tropical greenery",
    category: "ambience",
    span: "tall",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    alt: "Evening dining atmosphere with candles",
    category: "ambience",
    span: "normal",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80",
    alt: "Close-up of fresh Mediterranean ingredients",
    category: "food",
    span: "normal",
  },
];
