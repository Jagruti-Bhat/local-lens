import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Sparkles,
  Plane,
  MapPinned,
  CalendarDays,
  IndianRupee,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { Card, CardContent } from "@/components/ui/card";

export default function Hero() {
  return (
    <section className="relative py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-sm">
            <Sparkles className="h-4 w-4 text-blue-600" />

            <span className="text-sm">AI Powered Travel Planner</span>
          </div>

          <h1 className="mt-8 text-6xl font-extrabold tracking-tight leading-tight">
            Plan
            <span className="text-blue-600">Smarter.</span>
            <br />
            Travel Better.
          </h1>

          <p className="mt-8 text-lg text-slate-600 leading-8">
            Generate personalized travel itineraries, optimize your budget,
            discover attractions, and plan unforgettable trips in seconds.
          </p>

          <div className="flex gap-4 mt-10">
            <Button size="lg">
              <Link to="/create" className="flex items-center">
                Plan My Trip
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                document.getElementById("recent-trips")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              View Trips
            </Button>
          </div>

          {/* <div className="flex gap-10 mt-12">
            <div>
              <h2 className="text-3xl font-bold">500+</h2>

              <p className="text-slate-500">Trips Planned</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">4.9★</h2>

              <p className="text-slate-500">User Rating</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">20+</h2>

              <p className="text-slate-500">Countries</p>
            </div>
          </div> */}
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Card className="rounded-3xl shadow-2xl border-0">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold">Goa</h2>

                  <p className="text-slate-500">AI Generated Itinerary</p>
                </div>

                <Plane className="text-blue-600" size={40} />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="rounded-xl bg-slate-100 p-5">
                  <CalendarDays className="text-blue-600" />

                  <p className="mt-3 text-sm">Duration</p>

                  <h3 className="font-semibold">4 Days</h3>
                </div>

                <div className="rounded-xl bg-slate-100 p-5">
                  <IndianRupee className="text-blue-600" />

                  <p className="mt-3 text-sm">Budget</p>

                  <h3 className="font-semibold">₹25,000</h3>
                </div>

                <div className="rounded-xl bg-slate-100 p-5">
                  <MapPinned className="text-blue-600" />

                  <p className="mt-3 text-sm">Destination</p>

                  <h3 className="font-semibold">North Goa</h3>
                </div>

                <div className="rounded-xl bg-slate-100 p-5">
                  <Sparkles className="text-blue-600" />

                  <p className="mt-3 text-sm">AI Score</p>

                  <h3 className="font-semibold">98%</h3>
                </div>
              </div>

              <div className="mt-8 rounded-xl bg-blue-600 text-white p-6">
                <p className="font-semibold">Today's Highlight</p>

                <p className="mt-2 opacity-90">
                  Sunset at Chapora Fort followed by dinner at Thalassa.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
