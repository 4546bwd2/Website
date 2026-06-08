// ============================================================
// Mr. Ali Barbershop — Chatbot Logic
// All responses are 100% hardcoded. No external APIs used.
// ============================================================

export interface ChatMessage {
  id: string;
  role: "bot" | "user";
  text: string;
  buttons?: QuickReply[];
  timestamp: Date;
}

export interface QuickReply {
  label: string;
  action: string;
}

// ──────────────────────────────────────────────────────────
// QUICK REPLY BUTTON RESPONSES
// ──────────────────────────────────────────────────────────

export interface BotResponse {
  text: string;
  buttons?: QuickReply[];
}

export const quickReplyResponses: Record<string, BotResponse> = {
  "services-prices": {
    text: "We offer custom cuts, hot towel shaves, scissor cuts, razor cuts, shampoo & treatment, head massage, and the famous Mr. Ali Special! Prices are very affordable compared to other barbershops in Kuta. Walk in or call 0896-5263-9156 for today's rates. 💈",
    buttons: [
      { label: "What's the Mr. Ali Special?", action: "mr-ali-special" },
      { label: "Book Now", action: "book-appointment" },
    ],
  },

  "opening-hours": {
    text: "We're open every day and close at 11:30 PM 🌙 So yes — late-night cuts are totally possible. Come by anytime!",
    buttons: [
      { label: "Where Are You?", action: "where-are-you" },
      { label: "Book Appointment", action: "book-appointment" },
    ],
  },

  "where-are-you": {
    text: "You'll find us at Jl. Poppies II No.2, Kuta, Bali — right in the laneways of Kuta. Tip: just listen for the karaoke music 🎤 You'll hear us before you see us!",
    buttons: [
      { label: "Get Directions", action: "get-directions" },
      { label: "Call Us", action: "call-us" },
    ],
  },

  "book-appointment": {
    text: "The easiest way to book is to give Ali a call directly: 📞 0896-5263-9156. Walk-ins are also very welcome — we're open late!",
    buttons: [
      { label: "Call Now", action: "call-us" },
      { label: "Opening Hours", action: "opening-hours" },
    ],
  },

  "about-mr-ali": {
    text: "Mr. Ali is a master barber based in Kuta, Bali with a 4.9-star rating from over 323 happy customers. He's famous for precise fades, hot towel shaves, and filling the whole street with karaoke energy 🎶 Every customer leaves with a smile — and a great cut!",
    buttons: [
      { label: "Services", action: "services-prices" },
      { label: "Book Now", action: "book-appointment" },
    ],
  },

  "mr-ali-special": {
    text: "The Mr. Ali Special is Ali's signature 0-fade cut — razor sharp, perfectly clean, and totally precise. It includes a wash, warm towel, and face lotion. Customers call it life-changing 😄✂️",
    buttons: [
      { label: "Book This", action: "book-appointment" },
      { label: "Other Services", action: "services-prices" },
    ],
  },

  "get-directions": {
    text: "📍 Head to Jl. Poppies II No.2, Kuta, Bali 80361. You can also search 'Mr Ali Barbershop Kuta' on Google Maps!",
    buttons: [
      { label: "Call Us", action: "call-us" },
      { label: "Opening Hours", action: "opening-hours" },
    ],
  },

  "call-us": {
    text: "Give Ali a ring: 📞 0896-5263-9156. He'll be happy to hear from you!",
    buttons: [
      { label: "Where Are You?", action: "where-are-you" },
      { label: "Services & Prices", action: "services-prices" },
    ],
  },
};

// ──────────────────────────────────────────────────────────
// OPENING GREETING
// ──────────────────────────────────────────────────────────

export const openingMessage: BotResponse = {
  text: "Hey! Welcome to Mr. Ali Barbershop 💈 I'm here to help. What would you like to know?",
  buttons: [
    { label: "Services & Prices", action: "services-prices" },
    { label: "Opening Hours", action: "opening-hours" },
    { label: "Where Are You?", action: "where-are-you" },
    { label: "Book Appointment", action: "book-appointment" },
    { label: "About Mr. Ali", action: "about-mr-ali" },
  ],
};

// ──────────────────────────────────────────────────────────
// DEFAULT QUICK REPLIES (shown after fallback)
// ──────────────────────────────────────────────────────────

export const defaultQuickReplies: QuickReply[] = [
  { label: "Services & Prices", action: "services-prices" },
  { label: "Opening Hours", action: "opening-hours" },
  { label: "Where Are You?", action: "where-are-you" },
  { label: "Book Appointment", action: "book-appointment" },
  { label: "About Mr. Ali", action: "about-mr-ali" },
];

// ──────────────────────────────────────────────────────────
// KEYWORD MATCHING — LAYER 2
// ──────────────────────────────────────────────────────────

export interface KeywordGroup {
  keywords: string[];
  response: BotResponse;
}

export const keywordGroups: KeywordGroup[] = [
  {
    keywords: ["price", "cost", "how much", "rate", "cheap", "expensive", "pricing"],
    response: {
      text: "Our prices are very affordable — cheaper than most barbershops in Kuta! Call 0896-5263-9156 for the latest rates 💈",
      buttons: [
        { label: "Services & Prices", action: "services-prices" },
        { label: "Book Appointment", action: "book-appointment" },
      ],
    },
  },
  {
    keywords: ["hours", "open", "close", "time", "when", "closing", "schedule"],
    response: {
      text: "We're open daily and close at 11:30 PM every night. Late-night cuts? No problem! 🌙",
      buttons: [
        { label: "Where Are You?", action: "where-are-you" },
        { label: "Book Appointment", action: "book-appointment" },
      ],
    },
  },
  {
    keywords: ["where", "location", "address", "directions", "find", "map", "kuta", "bali"],
    response: {
      text: "We're at Jl. Poppies II No.2, Kuta, Bali. Listen for the karaoke — you'll find us! 🎤",
      buttons: [
        { label: "Get Directions", action: "get-directions" },
        { label: "Call Us", action: "call-us" },
      ],
    },
  },
  {
    keywords: ["book", "appointment", "reserve", "schedule", "booking"],
    response: {
      text: "To book, call Ali directly at 0896-5263-9156. Walk-ins are always welcome too! 📞",
      buttons: [
        { label: "Call Now", action: "call-us" },
        { label: "Opening Hours", action: "opening-hours" },
      ],
    },
  },
  {
    keywords: ["karaoke", "music", "singing", "song", "sing"],
    response: {
      text: "Yes, karaoke is very real here 😂🎤 Ali loves to sing, and sometimes the whole shop joins in! Come for the cut, stay for the concert.",
      buttons: [
        { label: "About Mr. Ali", action: "about-mr-ali" },
        { label: "Book Appointment", action: "book-appointment" },
      ],
    },
  },
  {
    keywords: ["shave", "razor", "hot towel", "traditional", "towel"],
    response: {
      text: "Ali offers traditional hot towel shaves — prep, razor shave, warm towel, face lotion. It's the full luxury experience. ✂️🪒",
      buttons: [
        { label: "Services & Prices", action: "services-prices" },
        { label: "Book Appointment", action: "book-appointment" },
      ],
    },
  },
  {
    keywords: ["massage", "head massage", "relax", "relaxing"],
    response: {
      text: "Head massages are included with select services. It's deeply relaxing and part of what makes Mr. Ali's shop so special 💆",
      buttons: [
        { label: "Services & Prices", action: "services-prices" },
        { label: "Book Now", action: "book-appointment" },
      ],
    },
  },
  {
    keywords: ["good", "amazing", "best", "love", "great", "thank", "thanks", "wonderful", "excellent", "awesome"],
    response: {
      text: "That means the world to Ali! 🙏 He puts his heart into every cut. See you in the chair soon! 💈",
      buttons: [
        { label: "Book Appointment", action: "book-appointment" },
        { label: "Services & Prices", action: "services-prices" },
      ],
    },
  },
  {
    keywords: ["hi", "hello", "hey", "hola", "sup", "howdy", "greetings"],
    response: {
      text: "Hey there! Welcome to Mr. Ali Barbershop 💈 How can I help you today?",
      buttons: [
        { label: "Services & Prices", action: "services-prices" },
        { label: "Opening Hours", action: "opening-hours" },
        { label: "Where Are You?", action: "where-are-you" },
        { label: "Book Appointment", action: "book-appointment" },
        { label: "About Mr. Ali", action: "about-mr-ali" },
      ],
    },
  },
];

// ──────────────────────────────────────────────────────────
// FALLBACK RESPONSE
// ──────────────────────────────────────────────────────────

export const fallbackResponse: BotResponse = {
  text: "I'm not sure about that, but Ali definitely can help! Give him a call at 0896-5263-9156 or just come by — we're open until 11:30 PM 🪒",
  buttons: defaultQuickReplies,
};

// ──────────────────────────────────────────────────────────
// KEYWORD MATCHING FUNCTION
// ──────────────────────────────────────────────────────────

export function matchKeywords(input: string): BotResponse {
  const normalized = input.toLowerCase().trim();

  for (const group of keywordGroups) {
    for (const keyword of group.keywords) {
      if (normalized.includes(keyword)) {
        return group.response;
      }
    }
  }

  return fallbackResponse;
}

// ──────────────────────────────────────────────────────────
// GET QUICK REPLY RESPONSE
// ──────────────────────────────────────────────────────────

export function getQuickReplyResponse(action: string): BotResponse {
  return quickReplyResponses[action] ?? fallbackResponse;
}

// ──────────────────────────────────────────────────────────
// UNIQUE MESSAGE ID GENERATOR
// ──────────────────────────────────────────────────────────

export function generateMessageId(): string {
  return `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
