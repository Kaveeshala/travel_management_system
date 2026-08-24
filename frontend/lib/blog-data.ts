export type BlogPost = {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Must-Visit Tropical Destinations for Your Next Escape",
    category: "Destinations",
    excerpt:
      "Discover breathtaking beach locations, island adventures, and relaxing getaways perfect for your next vacation.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    author: "Travel Admin",
    date: "May 12, 2026",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "How to Find the Best Flight Deals Without the Stress",
    category: "Flights",
    excerpt:
      "Simple tips to compare routes, save money, and choose smarter flight options for any type of journey.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
    author: "Nadee Perera",
    date: "June 03, 2026",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Luxury vs Budget Hotels: How to Choose the Right Stay",
    category: "Hotels",
    excerpt:
      "Compare comfort, amenities, and value so you can book a stay that truly fits your travel goals.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    author: "Ayesha Silva",
    date: "June 15, 2026",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Why Guided Tours Can Make Travel More Memorable",
    category: "Tours",
    excerpt:
      "From local insights to smoother planning, see why guided experiences still matter in modern travel.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    author: "Travel Admin",
    date: "June 28, 2026",
    readTime: "4 min read",
  },
  {
    id: 5,
    title: "Packing Tips for First-Time International Travelers",
    category: "Travel Tips",
    excerpt:
      "A practical checklist to help you pack lighter, stay organized, and avoid common travel mistakes.",
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=80",
    author: "Ishara Fernando",
    date: "July 05, 2026",
    readTime: "5 min read",
  },
  {
    id: 6,
    title: "Best City Breaks for a Long Weekend in 2026",
    category: "City Breaks",
    excerpt:
      "Short on time but still want a refreshing trip? These cities are ideal for fast, exciting getaways.",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80",
    author: "Nadee Perera",
    date: "July 11, 2026",
    readTime: "5 min read",
  },
];