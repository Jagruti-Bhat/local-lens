import axios from "axios";

export async function getWeather(city: string) {
  // Step 1: Convert city to latitude & longitude
  const geoResponse = await axios.get(
    "https://nominatim.openstreetmap.org/search",
    {
      params: {
        q: city,
        format: "json",
        limit: 1,
      },
      headers: {
        "Accept-Language": "en",
      },
    },
  );

  if (geoResponse.data.length === 0) {
    throw new Error("Location not found");
  }

  const { lat, lon } = geoResponse.data[0];

  // Step 2: Fetch weather

  const weatherResponse = await axios.get(
    "https://api.open-meteo.com/v1/forecast",
    {
      params: {
        latitude: lat,
        longitude: lon,
        current: [
          "temperature_2m",
          "relative_humidity_2m",
          "wind_speed_10m",
          "weather_code",
        ].join(","),
      },
    },
  );

  return weatherResponse.data.current;
}
