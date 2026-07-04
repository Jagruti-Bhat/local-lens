import { Link } from "react-router-dom";
import { Calendar, IndianRupee, ArrowRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

import { Trip } from "@/types/trip";

interface Props {
  trip: Trip;
}

const images = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d880",
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
];

export default function TripCard({ trip }: Props) {
  const image = images[trip.destination.length % images.length];

  return (
    <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition">
      <img
        src={image}
        alt={trip.destination}
        className="h-56 w-full object-cover"
      />

      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold">{trip.destination}</h2>

            <p className="text-slate-500 mt-1">AI Generated Trip</p>
          </div>

          <Badge>{trip.itinerary ? "Generated" : "Pending"}</Badge>
        </div>

        <div className="flex gap-6 mt-6">
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            {trip.days} Days
          </div>

          <div className="flex items-center gap-2">
            <IndianRupee size={18} />₹{trip.budget}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {trip.interests.map((interest) => (
            <Badge key={interest} variant="outline">
              {interest}
            </Badge>
          ))}
        </div>

        <Button>
          <Link to={`/trip/${trip.id}`}>Open Trip</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
