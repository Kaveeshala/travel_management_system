export type Tour = {
  id: number;
  title: string;
  location: string;
  duration: string;
  groupSize: string;
  price: string;
  rating: number;
  image: string;
  description: string;
  tag: string;
};

export const tours: Tour[] = [
  {
    id: 1,
    title: "Bali Beach Escape",
    location: "Bali, Indonesia",
    duration: "5 Days / 4 Nights",
    groupSize: "2 - 8 People",
    price: "$520",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
    description:
      "Relax on tropical beaches, enjoy sunset dinners, and explore island culture.",
    tag: "Best Seller",
  },
  {
    id: 2,
    title: "Dubai Desert Adventure",
    location: "Dubai, UAE",
    duration: "4 Days / 3 Nights",
    groupSize: "2 - 10 People",
    price: "$610",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80",
    description:
      "Experience luxury, city highlights, and thrilling desert safari adventures.",
    tag: "Adventure",
  },
  {
    id: 3,
    title: "Romantic Paris Getaway",
    location: "Paris, France",
    duration: "6 Days / 5 Nights",
    groupSize: "2 - 6 People",
    price: "$790",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80",
    description:
      "Explore charming streets, famous landmarks, and romantic evening cruises.",
    tag: "Romantic",
  },
  {
    id: 4,
    title: "Swiss Alps Explorer",
    location: "Interlaken, Switzerland",
    duration: "7 Days / 6 Nights",
    groupSize: "4 - 12 People",
    price: "$980",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    description:
      "Enjoy alpine views, scenic rail rides, and unforgettable mountain adventures.",
    tag: "Premium",
  },
  {
    id: 5,
    title: "Thailand Island Hopper",
    location: "Phuket, Thailand",
    duration: "5 Days / 4 Nights",
    groupSize: "2 - 10 People",
    price: "$430",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=1200&q=80",
    description:
      "Hop between stunning islands with beach fun, food, and nightlife.",
    tag: "Budget Pick",
  },
  {
    id: 6,
    title: "Tokyo City Lights Tour",
    location: "Tokyo, Japan",
    duration: "6 Days / 5 Nights",
    groupSize: "2 - 8 People",
    price: "$850",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=1200&q=80",
    description:
      "Discover modern culture, neon districts, street food, and iconic attractions.",
    tag: "Trending",
  },
  {
    id: 7,
    title: "Santorini Sunset Journey",
    location: "Santorini, Greece",
    duration: "5 Days / 4 Nights",
    groupSize: "2 - 6 People",
    price: "$720",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=1200&q=80",
    description:
      "Stay on scenic cliffs, enjoy sea views, and watch world-famous sunsets.",
    tag: "Honeymoon",
  },
  {
    id: 8,
    title: "Maldives Luxury Retreat",
    location: "Maldives",
    duration: "4 Days / 3 Nights",
    groupSize: "2 - 4 People",
    price: "$1200",
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=80",
    description:
      "Escape to overwater villas, crystal-clear lagoons, and premium relaxation.",
    tag: "Luxury",
  },
];