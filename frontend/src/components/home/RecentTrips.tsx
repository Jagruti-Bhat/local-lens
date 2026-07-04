import { useEffect, useState } from "react";

import TripCard from "@/components/trip/TripCard";
import { getTrips } from "@/api/tripApi";
import { Trip } from "@/types/trip";

export default function RecentTrips() {
  const [trips, setTrips] = useState<Trip[]>([]);

  useEffect(() => {
    loadTrips();
  }, []);

  async function loadTrips() {
    try {
      const response = await getTrips();
      setTrips(response.data.data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <section className="py-20" id="recent-trips">
      <h2 className="text-4xl font-bold">Recent Trips</h2>

      <p className="text-slate-500 mt-2">Continue planning your journeys.</p>

      {trips.length === 0 ? (
        <div className="text-center py-20 text-slate-500">No trips yet.</div>
      ) : (
        <div className="grid lg:grid-cols-2 gap-8 mt-10">
          {trips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      )}
    </section>
  );
}
