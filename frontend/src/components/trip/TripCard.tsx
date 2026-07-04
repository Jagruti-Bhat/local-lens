import { Link } from "react-router-dom";
import { Trip } from "../../types/trip";

interface Props {
  trip: Trip;
}

export default function TripCard({ trip }: Props) {
  return (
    <Link to={`/trip/${trip.id}`} className="block">
      <div className="border rounded-lg p-5 shadow hover:shadow-lg">
        <h2 className="text-xl font-semibold">{trip.destination}</h2>

        <p>{trip.days} Days</p>

        <p>₹{trip.budget}</p>

        <p>{trip.interests.join(", ")}</p>
      </div>
    </Link>
  );
}
