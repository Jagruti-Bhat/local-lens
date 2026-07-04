import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createTrip } from "@/api/tripApi";

import { INTERESTS } from "@/constants/interests";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

import { toast } from "sonner";

export default function CreateTrip() {
  const navigate = useNavigate();

  const [destination, setDestination] = useState("");

  const [days, setDays] = useState(3);

  const [budget, setBudget] = useState(10000);

  const [interests, setInterests] = useState<string[]>([]);

  const [loading, setLoading] = useState(false);

  function toggleInterest(value: string) {
    if (interests.includes(value)) {
      setInterests(interests.filter((i) => i !== value));
    } else {
      setInterests([...interests, value]);
    }
  }

  async function handleSubmit() {
    if (!destination) {
      toast.error("Destination is required");
      return;
    }

    if (interests.length === 0) {
      toast.error("Select at least one interest");
      return;
    }

    try {
      setLoading(true);

      const response = await createTrip({
        destination,
        days,
        budget,
        interests,
      });

      toast.success("Trip created successfully!");

      navigate(`/trip/${response.data.data.id}`);
    } catch (err) {
      console.error(err);
      toast.error("Failed to create trip");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto py-12">
      <Card className="rounded-3xl shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl">Create Your Journey</CardTitle>
        </CardHeader>

        <CardContent className="space-y-8">
          <div>
            <Label>Destination</Label>

            <Input
              className="mt-2"
              placeholder="Goa"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label>Days</Label>

              <Input
                className="mt-2"
                type="number"
                min={1}
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
              />
            </div>

            <div>
              <Label>Budget (₹)</Label>

              <Input
                className="mt-2"
                type="number"
                min={1000}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
              />
            </div>
          </div>

          <div>
            <Label>Select Interests</Label>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {INTERESTS.map((interest) => (
                <label
                  key={interest}
                  className="flex items-center gap-2 border rounded-lg p-3 cursor-pointer hover:bg-slate-50"
                >
                  <Checkbox
                    checked={interests.includes(interest)}
                    onCheckedChange={() => toggleInterest(interest)}
                  />

                  {interest}
                </label>
              ))}
            </div>
          </div>

          <Button
            className="w-full h-12"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Trip"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
