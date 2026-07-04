import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

import { createTrip } from "../api/tripApi";

import { interests } from "../constants/interests";

export default function CreateTrip() {
  const navigate = useNavigate();

  const [destination, setDestination] = useState("");

  const [days, setDays] = useState(1);

  const [budget, setBudget] = useState(10000);

  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const [loading, setLoading] = useState(false);

  function toggleInterest(value: string) {
    if (selectedInterests.includes(value)) {
      setSelectedInterests(selectedInterests.filter((item) => item !== value));
    } else {
      setSelectedInterests([...selectedInterests, value]);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await createTrip({
        destination,
        days,
        budget,
        interests: selectedInterests,
      });

      navigate(`/trip/${response.data.data.id}`);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />

      <div className="max-w-3xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Create Trip</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label>Destination</label>

            <input
              className="w-full border rounded p-3 mt-2"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>

          <div>
            <label>Days</label>

            <input
              type="number"
              className="w-full border rounded p-3 mt-2"
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
            />
          </div>

          <div>
            <label>Budget</label>

            <input
              type="number"
              className="w-full border rounded p-3 mt-2"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
            />
          </div>

          <div>
            <label>Interests</label>

            <div className="grid grid-cols-2 gap-3 mt-3">
              {interests.map((interest) => (
                <label key={interest} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedInterests.includes(interest)}
                    onChange={() => toggleInterest(interest)}
                  />

                  {interest}
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-5 py-3 rounded"
          >
            {loading ? "Creating..." : "Create Trip"}
          </button>
        </form>
      </div>
    </>
  );
}
