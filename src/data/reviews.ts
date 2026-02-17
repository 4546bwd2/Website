export interface Review {
  quote: string;
  author: string;
  rating: number;
  highlight: string;
}

export const reviews: Review[] = [
  {
    quote:
      "The breakfast here is incredible — so many options and everything was fresh and beautifully presented. We came back every morning.",
    author: "Shelley N.",
    rating: 5,
    highlight: "Great breakfast",
  },
  {
    quote:
      "The Italian owner really knows his craft. This is OG Italian taste — authentic flavors you won't easily find elsewhere in Bali.",
    author: "Vania D.N.",
    rating: 5,
    highlight: "Authentic Italian",
  },
  {
    quote:
      "Staff are so attentive and welcoming. They were wonderful with our kids and made the whole family feel right at home.",
    author: "Trần T.T.N.",
    rating: 5,
    highlight: "Family-friendly",
  },
  {
    quote:
      "A hidden gem. The pasta is handmade and you can really taste the difference. Beautiful setting with that warm Mediterranean feel.",
    author: "Marco L.",
    rating: 5,
    highlight: "Handmade pasta",
  },
  {
    quote:
      "From the moment we walked in, the hospitality was incredible. Cheerful staff, delicious food, and a relaxing atmosphere.",
    author: "Sarah K.",
    rating: 5,
    highlight: "Warm hospitality",
  },
  {
    quote:
      "Best Italian food we had in Bali. The owner came to our table to check on us — that personal touch makes all the difference.",
    author: "James W.",
    rating: 5,
    highlight: "Personal touch",
  },
];

export const reviewsDisclaimer =
  "Reviews are paraphrased from Google Reviews. Ratings reflect individual guest experiences.";

export const overallRating = 4.8;
export const totalReviews = 200; // TODO: Replace with actual count
