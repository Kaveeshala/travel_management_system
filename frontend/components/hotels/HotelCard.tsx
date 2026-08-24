import { MapPin, Star, Wifi, Coffee, WavesLadder } from "lucide-react";
import type { Hotel } from "@/lib/hotel-data";

type HotelCardProps = {
  hotel: Hotel;
};

export default function HotelCard({ hotel }: HotelCardProps) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="h-64 w-full object-cover"
        />

        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-blue-700 backdrop-blur-sm">
          {hotel.tag}
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{hotel.name}</h3>
            <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
              <MapPin className="h-4 w-4 text-blue-600" strokeWidth={2.2} />
              <span>{hotel.location}</span>
            </div>
          </div>

          <div className="text-right">
            <div className="flex items-center justify-end gap-1 rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-600">
              <Star className="h-4 w-4 fill-current" strokeWidth={2.2} />
              <span>{hotel.rating}</span>
            </div>
            <p className="mt-1 text-xs text-gray-400">{hotel.reviews} reviews</p>
          </div>
        </div>

        <p className="text-sm leading-6 text-gray-600">{hotel.description}</p>

        <div className="flex flex-wrap gap-2">
          {hotel.amenities.map((amenity) => (
            <span
              key={amenity}
              className="rounded-full bg-blue-50 px-3 py-2 text-xs font-medium text-blue-700"
            >
              {amenity}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Wifi className="h-4 w-4 text-blue-600" strokeWidth={2.2} />
            <span>Wi-Fi</span>
          </div>

          <div className="flex items-center gap-1">
            <Coffee className="h-4 w-4 text-blue-600" strokeWidth={2.2} />
            <span>Breakfast</span>
          </div>

          <div className="flex items-center gap-1">
            <WavesLadder className="h-4 w-4 text-blue-600" strokeWidth={2.2} />
            <span>Pool</span>
          </div>
        </div>

        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-gray-400">
              Per night
            </p>
            <p className="mt-1 text-lg font-semibold text-blue-700">
              {hotel.price}
            </p>
          </div>

          <button className="rounded-full bg-blue-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-800">
            Book Stay
          </button>
        </div>
      </div>
    </article>
  );
}