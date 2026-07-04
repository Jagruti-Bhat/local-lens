import { BudgetBreakdown } from "../types/trip";

interface Props {
  budget: BudgetBreakdown;
}

export default function BudgetCard({ budget }: Props) {
  return (
    <div className="border rounded-lg p-5 mt-6">
      <h2 className="text-xl font-semibold mb-4">Budget Breakdown</h2>

      <p>✈️ Flights: {budget.flights}</p>
      <p>🏨 Hotel: {budget.hotel}</p>
      <p>🍜 Food: {budget.food}</p>
      <p>🚕 Transport: {budget.transport}</p>
    </div>
  );
}
