import Link from "next/link";
import { MapPin, Star } from "lucide-react";
import type { Destination } from "@/lib/destination-data";

type DestinationCardProps = {
  destination: Destination;
};

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <img
        src={destination.image}
        alt={destination.name}
        className="h-64 w-full object-cover"
      />

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              {destination.name}
            </h3>
            <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
              <MapPin className="h-4 w-4 text-blue-600" strokeWidth={2.2} />
              <span>{destination.country}</span>
            </div>
          </div>

          <div className="flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-600">
            <Star className="h-4 w-4 fill-current" strokeWidth={2.2} />
            <span>{destination.rating}</span>
          </div>
        </div>

        <p className="text-sm leading-6 text-gray-600">
          {destination.description}
        </p>

        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-gray-400">
              Starting from
            </p>
            <p className="mt-1 text-lg font-semibold text-blue-700">
              {destination.price}
            </p>
          </div>

          <Link
            href={`/destinations/${destination.slug}`}
            className="rounded-full bg-blue-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-800"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}