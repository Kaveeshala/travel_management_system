export type FlightDeal = {
  id: number;
  airline: string;
  from: string;
  to: string;
  fromCode: string;
  toCode: string;
  departure: string;
  arrival: string;
  duration: string;
  price: string;
  stops: string;
  image: string;
  tag: string;
};

export const flightDeals: FlightDeal[] = [
  {
    id: 1,
    airline: "Emirates",
    from: "Colombo",
    to: "Dubai",
    fromCode: "CMB",
    toCode: "DXB",
    departure: "08:30 AM",
    arrival: "11:45 AM",
    duration: "4h 15m",
    price: "$320",
    stops: "Non-stop",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
    tag: "Best Deal",
  },
  {
    id: 2,
    airline: "Qatar Airways",
    from: "Colombo",
    to: "Paris",
    fromCode: "CMB",
    toCode: "CDG",
    departure: "10:20 PM",
    arrival: "08:10 AM",
    duration: "13h 50m",
    price: "$780",
    stops: "1 Stop",
    image:
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=1200&q=80",
    tag: "Popular",
  },
  {
    id: 3,
    airline: "Singapore Airlines",
    from: "Colombo",
    to: "Tokyo",
    fromCode: "CMB",
    toCode: "HND",
    departure: "07:10 AM",
    arrival: "09:30 PM",
    duration: "10h 20m",
    price: "$890",
    stops: "1 Stop",
    image:
      "https://images.unsplash.com/photo-1540339832862-474599807836?auto=format&fit=crop&w=1200&q=80",
    tag: "Trending",
  },
  {
    id: 4,
    airline: "Etihad Airways",
    from: "Colombo",
    to: "London",
    fromCode: "CMB",
    toCode: "LHR",
    departure: "09:40 PM",
    arrival: "07:30 AM",
    duration: "14h 20m",
    price: "$860",
    stops: "1 Stop",
    image:
      "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=1200&q=80",
    tag: "Top Route",
  },
  {
    id: 5,
    airline: "AirAsia",
    from: "Colombo",
    to: "Bangkok",
    fromCode: "CMB",
    toCode: "BKK",
    departure: "06:50 AM",
    arrival: "01:10 PM",
    duration: "4h 50m",
    price: "$240",
    stops: "Non-stop",
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=80",
    tag: "Budget",
  },
  {
    id: 6,
    airline: "Turkish Airlines",
    from: "Colombo",
    to: "Istanbul",
    fromCode: "CMB",
    toCode: "IST",
    departure: "05:30 AM",
    arrival: "12:45 PM",
    duration: "9h 45m",
    price: "$670",
    stops: "1 Stop",
    image:
      "https://images.unsplash.com/photo-1521727857535-28d2047314ac?auto=format&fit=crop&w=1200&q=80",
    tag: "Hot Pick",
  },
  {
    id: 7,
    airline: "SriLankan Airlines",
    from: "Colombo",
    to: "Maldives",
    fromCode: "CMB",
    toCode: "MLE",
    departure: "01:15 PM",
    arrival: "02:35 PM",
    duration: "1h 20m",
    price: "$180",
    stops: "Non-stop",
    image:
      "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=1200&q=80",
    tag: "Quick Escape",
  },
  {
    id: 8,
    airline: "Malaysia Airlines",
    from: "Colombo",
    to: "Singapore",
    fromCode: "CMB",
    toCode: "SIN",
    departure: "11:00 AM",
    arrival: "05:20 PM",
    duration: "5h 50m",
    price: "$290",
    stops: "1 Stop",
    image:
      "https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1200&q=80",
    tag: "City Break",
  },
];