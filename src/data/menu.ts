export interface MenuItem {
  name: string;
  description: string;
  price?: string;
  tags?: ("V" | "VG" | "GF")[];
  popular?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "breakfast",
    title: "Breakfast",
    subtitle: "Worth waking up for — served until 11:30",
    items: [
      {
        name: "Full Italian Breakfast",
        description:
          "Two eggs your way, prosciutto, fresh tomatoes, ciabatta toast, and a side of seasonal fruit.",
        price: "IDR 95K",
        popular: true,
      },
      {
        name: "Açaí Bowl",
        description:
          "Blended açaí topped with granola, banana, coconut flakes, and honey drizzle.",
        price: "IDR 75K",
        tags: ["V", "GF"],
      },
      {
        name: "Eggs Benedict Florentine",
        description:
          "Poached eggs on toasted English muffin with sautéed spinach and hollandaise.",
        price: "IDR 85K",
        tags: ["V"],
      },
      {
        name: "Pancake Stack",
        description:
          "Fluffy buttermilk pancakes with maple syrup, fresh berries, and whipped cream.",
        price: "IDR 70K",
        tags: ["V"],
      },
      {
        name: "Avocado Toast",
        description:
          "Smashed avocado on sourdough with cherry tomatoes, chili flakes, and poached egg.",
        price: "IDR 75K",
        tags: ["V"],
        popular: true,
      },
      {
        name: "Granola & Yogurt",
        description:
          "House-made granola with Greek yogurt, seasonal fruits, and a drizzle of local honey.",
        price: "IDR 60K",
        tags: ["V", "GF"],
      },
    ],
  },
  {
    id: "antipasti",
    title: "Antipasti",
    subtitle: "Small plates to start the story",
    items: [
      {
        name: "Bruschetta Classica",
        description:
          "Toasted ciabatta with fresh tomatoes, basil, garlic, and extra virgin olive oil.",
        price: "IDR 65K",
        tags: ["V", "VG"],
      },
      {
        name: "Burrata e Prosciutto",
        description:
          "Creamy burrata with San Daniele prosciutto, rocket, and aged balsamic.",
        price: "IDR 120K",
        popular: true,
      },
      {
        name: "Calamari Fritti",
        description:
          "Lightly fried calamari with lemon aioli and marinara sauce.",
        price: "IDR 85K",
      },
      {
        name: "Caprese Salad",
        description:
          "Buffalo mozzarella, vine tomatoes, fresh basil, and Sicilian olive oil.",
        price: "IDR 90K",
        tags: ["V", "GF"],
      },
    ],
  },
  {
    id: "pasta",
    title: "Pasta",
    subtitle: "Handmade daily — the Italian way",
    items: [
      {
        name: "Spaghetti Carbonara",
        description:
          "Classic Roman carbonara with guanciale, pecorino, egg yolk, and black pepper.",
        price: "IDR 110K",
        popular: true,
      },
      {
        name: "Pappardelle al Ragù",
        description:
          "Wide ribbons of fresh pasta with slow-cooked Bolognese ragù.",
        price: "IDR 120K",
      },
      {
        name: "Cacio e Pepe",
        description:
          "Tonnarelli pasta with Pecorino Romano and Tellicherry black pepper.",
        price: "IDR 95K",
        tags: ["V"],
      },
      {
        name: "Aglio Olio e Peperoncino",
        description:
          "Spaghetti with garlic, chili, parsley, and premium olive oil.",
        price: "IDR 85K",
        tags: ["V", "VG"],
      },
      {
        name: "Seafood Linguine",
        description:
          "Linguine with prawns, mussels, clams, cherry tomatoes, and white wine.",
        price: "IDR 145K",
        popular: true,
      },
    ],
  },
  {
    id: "pizza",
    title: "Pizza",
    subtitle: "Thin crust, wood-fired soul",
    items: [
      {
        name: "Margherita DOC",
        description:
          "San Marzano tomatoes, fior di latte, fresh basil, and Sicilian olive oil.",
        price: "IDR 95K",
        tags: ["V"],
        popular: true,
      },
      {
        name: "Quattro Formaggi",
        description:
          "Mozzarella, gorgonzola, fontina, and parmigiano with honey drizzle.",
        price: "IDR 115K",
        tags: ["V"],
      },
      {
        name: "Diavola",
        description:
          "Spicy salami, mozzarella, San Marzano tomatoes, and Calabrian chili oil.",
        price: "IDR 110K",
      },
      {
        name: "Prosciutto e Rucola",
        description:
          "San Daniele prosciutto, rocket, shaved Parmigiano, and truffle oil.",
        price: "IDR 130K",
      },
    ],
  },
  {
    id: "mains",
    title: "Mains",
    subtitle: "Hearty plates, Mediterranean soul",
    items: [
      {
        name: "Grilled Sea Bass",
        description:
          "Whole grilled sea bass with lemon, capers, roasted potatoes, and salsa verde.",
        price: "IDR 185K",
        tags: ["GF"],
      },
      {
        name: "Chicken Milanese",
        description:
          "Crispy breaded chicken with rocket, cherry tomatoes, and lemon dressing.",
        price: "IDR 135K",
      },
      {
        name: "Risotto ai Funghi",
        description:
          "Carnaroli rice with mixed wild mushrooms, thyme, and aged Parmigiano.",
        price: "IDR 120K",
        tags: ["V", "GF"],
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    subtitle: "A sweet ending, always",
    items: [
      {
        name: "Tiramisù",
        description:
          "Classic Italian tiramisù with mascarpone, espresso, and cocoa.",
        price: "IDR 65K",
        tags: ["V"],
        popular: true,
      },
      {
        name: "Panna Cotta",
        description:
          "Vanilla bean panna cotta with mixed berry coulis.",
        price: "IDR 55K",
        tags: ["V", "GF"],
      },
      {
        name: "Affogato",
        description:
          "Vanilla gelato drowned in a shot of hot espresso.",
        price: "IDR 50K",
        tags: ["V", "GF"],
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    subtitle: "Sip slow, stay a while",
    items: [
      {
        name: "Espresso / Doppio",
        description: "Rich Italian espresso — single or double shot.",
        price: "IDR 30K / 40K",
        tags: ["V", "VG", "GF"],
      },
      {
        name: "Aperol Spritz",
        description: "Aperol, prosecco, soda, and a slice of orange.",
        price: "IDR 95K",
        tags: ["V", "VG", "GF"],
        popular: true,
      },
      {
        name: "Fresh Juices",
        description:
          "Watermelon, pineapple, orange, or mixed tropical — freshly pressed.",
        price: "IDR 45K",
        tags: ["V", "VG", "GF"],
      },
      {
        name: "House Wine",
        description:
          "Selection of Italian reds and whites — ask your server for today's pour.",
        price: "IDR 75K",
        tags: ["V", "VG", "GF"],
      },
      {
        name: "Negroni",
        description: "Gin, Campari, sweet vermouth — stirred to perfection.",
        price: "IDR 110K",
        tags: ["V", "VG", "GF"],
      },
    ],
  },
];
