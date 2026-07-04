import { Card, CardContent } from "@/components/ui/card";

import { Day } from "@/types/trip";

interface Props {
  day: Day;
}

export default function DayCard({ day }: Props) {
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold mb-6">Day {day.day}</h2>

      <p className="text-slate-500 mb-8">{day.title}</p>

      <div className="space-y-5">
        {day.activities.map((activity, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{activity.activity}</h3>

                  <p className="text-slate-500 mt-2">🕘 {activity.time}</p>

                  <p className="text-slate-500">📍 {activity.location}</p>
                </div>

                <div className="text-xl font-bold">{activity.cost}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
