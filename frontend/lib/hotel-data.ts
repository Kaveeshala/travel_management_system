export type Hotel = {
  id: number;
  name: string;
  location: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  tag: string;
  amenities: string[];
};

export const hotels: Hotel[] = [
  {
    id: 1,
    name: "Ocean Pearl Resort",
    location: "Maldives",
    price: "$320",
    rating: 4.9,
    reviews: 124,
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    description:
      "Luxury overwater escape with private villas, sea views, and premium service.",
    tag: "Luxury",
    amenities: ["Free Breakfast", "Pool", "Ocean View"],
  },
  {
    id: 2,
    name: "Skyline Grand Hotel",
    location: "Dubai, UAE",
    price: "$210",
    rating: 4.7,
    reviews: 98,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    description:
      "Modern city stay close to shopping, dining, and iconic skyline attractions.",
    tag: "City Stay",
    amenities: ["Wi-Fi", "Gym", "Airport Shuttle"],
  },
  {
    id: 3,
    name: "Santorini Blue Suites",
    location: "Santorini, Greece",
    price: "$260",
    rating: 4.8,
    reviews: 112,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    description:
      "Cliffside suites with panoramic sea views and unforgettable sunsets.",
    tag: "Romantic",
    amenities: ["Sea View", "Breakfast", "Infinity Pool"],
  },
  {
    id: 4,
    name: "Bali Palm Retreat",
    location: "Bali, Indonesia",
    price: "$180",
    rating: 4.6,
    reviews: 87,
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
    description:
      "A peaceful tropical hideaway surrounded by lush greenery and relaxing vibes.",
    tag: "Best Seller",
    amenities: ["Spa", "Pool", "Free Wi-Fi"],
  },
  {
    id: 5,
    name: "Tokyo Central Inn",
    location: "Tokyo, Japan",
    price: "$195",
    rating: 4.5,
    reviews: 73,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    description:
      "Smart and stylish city hotel with easy access to shopping and transport.",
    tag: "Trending",
    amenities: ["Wi-Fi", "Breakfast", "City View"],
  },
  {
    id: 6,
    name: "Alpine View Lodge",
    location: "Interlaken, Switzerland",
    price: "$290",
    rating: 4.8,
    reviews: 105,
    image:
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=1200&q=80",
    description:
      "Cozy mountain lodge with breathtaking alpine scenery and peaceful stays.",
    tag: "Adventure",
    amenities: ["Mountain View", "Breakfast", "Hot Tub"],
  },
  {
    id: 7,
    name: "Phuket Beach Resort",
    location: "Phuket, Thailand",
    price: "$160",
    rating: 4.4,
    reviews: 69,
    image:
      "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?auto=format&fit=crop&w=1200&q=80",
    description:
      "Sunny beachfront stay perfect for island hopping and tropical relaxation.",
    tag: "Beach",
    amenities: ["Beach Access", "Pool", "Free Breakfast"],
  },
  {
    id: 8,
    name: "Paris Boutique Stay",
    location: "Paris, France",
    price: "$275",
    rating: 4.7,
    reviews: 91,
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
    description:
      "Charming boutique hotel near cafes, museums, and classic Parisian streets.",
    tag: "Boutique",
    amenities: ["Wi-Fi", "Breakfast", "Balcony"],
  },
];