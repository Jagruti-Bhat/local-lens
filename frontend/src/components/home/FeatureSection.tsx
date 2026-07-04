import { features } from "@/constants/features";

import FeatureCard from "./FeatureCard";

export default function FeatureSection() {
  return (
    <section className="py-24">
      <div className="text-center">
        <p className="text-blue-600 font-semibold">WHY LOCAL LENS</p>

        <h2 className="text-5xl font-bold mt-4">Everything You Need</h2>

        <p className="text-slate-500 mt-6 max-w-2xl mx-auto">
          Local Lens combines AI, budgeting, weather, and destination insights
          into one travel planning experience.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
