import { ArrowRight, Clock3, Plane, Ticket, Undo2 } from "lucide-react";
import type { FlightDeal } from "@/lib/flight-data";

type FlightCardProps = {
  flight: FlightDeal;
};

export default function FlightCard({ flight }: FlightCardProps) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <img
          src={flight.image}
          alt={`${flight.from} to ${flight.to}`}
          className="h-56 w-full object-cover"
        />

        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-blue-700 backdrop-blur-sm">
          {flight.tag}
        </div>

        <div className="absolute right-4 top-4 rounded-full bg-slate-950/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {flight.airline}
        </div>
      </div>

      <div className="space-y-5 p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-gray-400">
              From
            </p>
            <h3 className="mt-1 text-lg font-semibold text-gray-900">
              {flight.from}
            </h3>
            <p className="text-sm text-gray-500">{flight.fromCode}</p>
          </div>

          <div className="flex flex-col items-center text-blue-600">
            <Plane className="h-5 w-5" strokeWidth={2.2} />
            <ArrowRight className="mt-1 h-4 w-4" strokeWidth={2.2} />
          </div>

          <div className="text-right">
            <p className="text-xs uppercase tracking-[0.18em] text-gray-400">
              To
            </p>
            <h3 className="mt-1 text-lg font-semibold text-gray-900">
              {flight.to}
            </h3>
            <p className="text-sm text-gray-500">{flight.toCode}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
          <div className="rounded-2xl bg-gray-50 p-3">
            <p className="text-xs uppercase tracking-wide text-gray-400">
              Departure
            </p>
            <p className="mt-1 font-medium text-gray-900">{flight.departure}</p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-3">
            <p className="text-xs uppercase tracking-wide text-gray-400">
              Arrival
            </p>
            <p className="mt-1 font-medium text-gray-900">{flight.arrival}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
          <div className="flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2">
            <Clock3 className="h-4 w-4 text-blue-600" strokeWidth={2.2} />
            <span>{flight.duration}</span>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2">
            <Undo2 className="h-4 w-4 text-blue-600" strokeWidth={2.2} />
            <span>{flight.stops}</span>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2">
            <Ticket className="h-4 w-4 text-blue-600" strokeWidth={2.2} />
            <span>{flight.airline}</span>
          </div>
        </div>

        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-gray-400">
              Starting from
            </p>
            <p className="mt-1 text-lg font-semibold text-blue-700">
              {flight.price}
            </p>
          </div>

          <button className="rounded-full bg-blue-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-800">
            Book Flight
          </button>
        </div>
      </div>
    </article>
  );
}