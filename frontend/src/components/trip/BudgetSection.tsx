import { Card, CardContent } from "@/components/ui/card";

interface Props {
  budget: {
    hotel: string;
    food: string;
    transport: string;
    flights: string;
  };
}

export default function BudgetSection({ budget }: Props) {
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-6">Budget Breakdown</h2>

      <div className="grid md:grid-cols-4 gap-5">
        <Card>
          <CardContent className="p-6">
            <p className="text-slate-500">🏨 Hotel</p>
            <h3 className="text-xl font-bold mt-2">{budget.hotel}</h3>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <p className="text-slate-500">🍜 Food</p>
            <h3 className="text-xl font-bold mt-2">{budget.food}</h3>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <p className="text-slate-500">🚕 Transport</p>
            <h3 className="text-xl font-bold mt-2">{budget.transport}</h3>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <p className="text-slate-500">✈ Flights</p>
            <h3 className="text-xl font-bold mt-2">{budget.flights}</h3>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
