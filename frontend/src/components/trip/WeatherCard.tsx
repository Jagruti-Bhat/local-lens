import { Card, CardContent } from "@/components/ui/card";
import { getWeatherIcon, getWeatherText } from "@/utils/weather";

interface Props {
  weather: any;
}

export default function WeatherCard({ weather }: Props) {
  const WeatherIcon = getWeatherIcon(weather.weather_code);

  return (
    <Card className="mt-10">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">Current Weather</h2>

            <p className="text-slate-500">
              {getWeatherText(weather.weather_code)}
            </p>
          </div>

          <WeatherIcon size={48} className="text-yellow-500" />
        </div>
      </CardContent>
    </Card>
  );
}
