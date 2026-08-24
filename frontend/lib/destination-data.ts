export type Destination = {
  id: number;
  slug: string;
  name: string;
  country: string;
  image: string;
  price: string;
  rating: number;
  description: string;
  duration: string;
};

export const destinations: Destination[] = [
  {
    id: 1,
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    price: "$450",
    rating: 4.8,
    description: "Tropical beaches, cultural landmarks, and relaxing resorts.",
    duration: "5 Days",
  },
  {
    id: 2,
    slug: "paris",
    name: "Paris",
    country: "France",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80",
    price: "$780",
    rating: 4.7,
    description: "Romantic city breaks, iconic landmarks, and elegant experiences.",
    duration: "6 Days",
  },
  {
    id: 3,
    slug: "santorini",
    name: "Santorini",
    country: "Greece",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80",
    price: "$690",
    rating: 4.9,
    description: "Cliffside views, blue domes, and unforgettable sunsets.",
    duration: "5 Days",
  },
];