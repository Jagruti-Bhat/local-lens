import { DayPlan } from "../types/trip";

interface Props {
  day: DayPlan;
}

export default function DayCard({ day }: Props) {
  return (
    <div className="border rounded-lg p-5 mb-5">
      <h2 className="text-xl font-bold">Day {day.day}</h2>

      <h3 className="text-lg mb-4">{day.title}</h3>

      <div className="space-y-3">
        {day.activities.map((activity, index) => (
          <div key={index} className="border rounded-md p-3 bg-gray-50">
            <p>
              <strong>🕒 Time:</strong> {activity.time}
            </p>

            <p>
              <strong>🎯 Activity:</strong> {activity.activity}
            </p>

            <p>
              <strong>📍 Location:</strong> {activity.location}
            </p>

            <p>
              <strong>💰 Cost:</strong> {activity.cost}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
