import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import DayCard from "../components/DayCard";
import BudgetCard from "../components/BudgetCard";

import { getTrip, generateTrip } from "../api/tripApi";

import { Trip } from "../types/trip";

export default function TripDetails() {
  const { id } = useParams();

  const [trip, setTrip] = useState<Trip | null>(null);

  const [loading, setLoading] = useState(true);

  const [generating, setGenerating] = useState(false);

  useEffect(() => {
    fetchTrip();
  }, []);

  async function fetchTrip() {
    const response = await getTrip(id!);

    setTrip(response.data.data);

    setLoading(false);
  }

  async function generate() {
    setGenerating(true);

    await generateTrip(id!);

    await fetchTrip();

    setGenerating(false);
  }

  if (loading) {
    return <Loading />;
  }

  if (!trip) {
    return <div>Trip not found</div>;
  }

  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto p-8">
        <h1 className="text-4xl font-bold">{trip.destination}</h1>

        <p className="mt-3">{trip.days} Days</p>

        <p>₹{trip.budget}</p>

        <p>{trip.interests.join(", ")}</p>

        {!trip.itinerary && (
          <button
            onClick={generate}
            disabled={generating}
            className="bg-blue-600 text-white px-5 py-3 rounded mt-8"
          >
            {generating ? "Generating..." : "Generate Itinerary"}
          </button>
        )}

        {trip.itinerary && (
          <>
            <div className="space-y-5 mt-8">
              {trip.itinerary.days.map((day) => (
                <DayCard key={day.day} day={day} />
              ))}
            </div>

            <BudgetCard budget={trip.itinerary.budgetBreakdown} />

            <div className="border rounded-lg p-5 mt-6">
              <h2 className="text-xl font-semibold mb-3">Travel Tips</h2>

              <ul className="list-disc ml-5">
                {trip.itinerary.tips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
}
