import { CalendarDays, IndianRupee, MapPin, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Trip } from "@/types/trip";

interface Props {
  trip: Trip;
  onGenerate: () => void;
  onDownloadPdf: () => void;
  generating?: boolean;
}

export default function DestinationBanner({
  trip,
  onGenerate,
  onDownloadPdf,
  generating = false,
}: Props) {
  return (
    <div className="relative overflow-hidden rounded-3xl shadow-xl">
      <img
        src={
          trip.imageUrl ||
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600"
        }
        alt={trip.destination}
        className="h-[420px] w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
        <Badge className="mb-5 bg-blue-600 hover:bg-blue-600">
          <Sparkles className="mr-2 h-4 w-4" />
          AI Travel Planner
        </Badge>

        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />

          <span className="text-lg">Destination</span>
        </div>

        <h1 className="mt-2 text-5xl font-bold">{trip.destination}</h1>

        <div className="mt-6 flex flex-wrap gap-6 text-lg">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5" />
            {trip.days} Days
          </div>

          <div className="flex items-center gap-2">
            <IndianRupee className="h-5 w-5" />₹{trip.budget}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {trip.interests.map((interest) => (
            <Badge
              key={interest}
              variant="secondary"
              className="bg-white/20 text-white hover:bg-white/30"
            >
              {interest}
            </Badge>
          ))}
        </div>

        <div className="mt-8">
          {trip.itinerary ? (
            <Button size="lg" variant="secondary" onClick={onDownloadPdf}>
              Download PDF
            </Button>
          ) : (
            <Button size="lg" onClick={onGenerate} disabled={generating}>
              {generating ? "Generating..." : "Generate AI Itinerary"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
