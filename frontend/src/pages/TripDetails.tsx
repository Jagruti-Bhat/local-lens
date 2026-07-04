import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import DayCard from "@/components/DayCard";
import BudgetSection from "@/components/trip/BudgetSection";
import TipsSection from "@/components/trip/TipsSection";

import { getTrip, generateItinerary } from "@/api/tripApi";

import { Trip } from "@/types/trip";
import { getWeather } from "@/api/weatherApi";
import WeatherCard from "@/components/trip/WeatherCard";
import { downloadTripPDF } from "@/utils/pdf";
import { toast } from "sonner";
import DestinationBanner from "@/components/trip/DestinationBanner";

export default function TripDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [trip, setTrip] = useState<Trip>();
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      loadTrip();
    }
  }, [id]);

  async function loadTrip() {
    try {
      const response = await getTrip(id!);

      const trip = response.data.data;
      setTrip(trip);

      // Weather should not break the page
      try {
        const weatherResponse = await getWeather(trip.destination);
        setWeather(weatherResponse);
      } catch (error) {
        console.error("Weather API failed:", error);

        toast.error("Unable to load weather information.");

        setWeather(null);
      }
    } catch (error) {
      console.error(error);

      toast.error("Failed to load trip.");

      navigate("/");
    }
  }

  async function handleGenerate() {
    try {
      setLoading(true);

      await generateItinerary(id!);

      await loadTrip();

      toast.success("Itinerary generated");
    } catch (err) {
      toast.error("Failed to generate itinerary");
    } finally {
      setLoading(false);
    }
  }

  if (!trip) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-5xl mx-auto py-10">
      <Button variant="ghost" onClick={() => navigate("/")}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
      <DestinationBanner
        trip={trip}
        onGenerate={handleGenerate}
        onDownloadPdf={() => downloadTripPDF(trip)}
        generating={loading}
      />

      <h1 className="text-5xl font-bold mt-6">{trip.destination}</h1>

      <div className="flex gap-4 mt-5">
        <Badge>{trip.days} Days</Badge>

        <Badge>₹{trip.budget}</Badge>
      </div>

      <div className="flex flex-wrap gap-3 mt-5">
        {trip.interests.map((interest) => (
          <Badge key={interest} variant="outline">
            {interest}
          </Badge>
        ))}
      </div>

      {!trip.itinerary && (
        <Button className="mt-10" onClick={handleGenerate}>
          Generate AI Itinerary
        </Button>
      )}

      {trip.itinerary && (
        <>
          {trip.itinerary.days.map((day) => (
            <DayCard key={day.day} day={day} />
          ))}

          <BudgetSection budget={trip.itinerary.budgetBreakdown} />

          <TipsSection tips={trip.itinerary.tips} />
        </>
      )}

      <Button variant="outline" onClick={() => downloadTripPDF(trip)}>
        Download PDF
      </Button>

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}
