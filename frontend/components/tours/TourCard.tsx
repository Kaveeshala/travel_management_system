import { Clock3, MapPin, Star, Users } from "lucide-react";
import type { Tour } from "@/lib/tour-data";

type TourCardProps = {
  tour: Tour;
};

export default function TourCard({ tour }: TourCardProps) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <img
          src={tour.image}
          alt={tour.title}
          className="h-72 w-full object-cover"
        />

        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-blue-700 backdrop-blur-sm">
          {tour.tag}
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{tour.title}</h3>
            <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
              <MapPin className="h-4 w-4 text-blue-600" strokeWidth={2.2} />
              <span>{tour.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-600">
            <Star className="h-4 w-4 fill-current" strokeWidth={2.2} />
            <span>{tour.rating}</span>
          </div>
        </div>

        <p className="text-sm leading-6 text-gray-600">{tour.description}</p>

        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
          <div className="flex items-center gap-2 rounded-full bg-gray-50 px-3 py-2">
            <Clock3 className="h-4 w-4 text-blue-600" strokeWidth={2.2} />
            <span>{tour.duration}</span>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-gray-50 px-3 py-2">
            <Users className="h-4 w-4 text-blue-600" strokeWidth={2.2} />
            <span>{tour.groupSize}</span>
          </div>
        </div>

        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-gray-400">
              Starting from
            </p>
            <p className="mt-1 text-lg font-semibold text-blue-700">
              {tour.price}
            </p>
          </div>

          <button className="rounded-full bg-blue-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-800">
            View Tour
          </button>
        </div>
      </div>
    </article>
  );
}