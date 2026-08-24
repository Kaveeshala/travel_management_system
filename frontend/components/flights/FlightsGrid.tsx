import FlightCard from "@/components/flights/FlightCard";
import { flightDeals } from "@/lib/flight-data";

export default function FlightsGrid() {
  return (
    <section className="mt-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {flightDeals.map((flight) => (
          <FlightCard key={flight.id} flight={flight} />
        ))}
      </div>
    </section>
  );
}