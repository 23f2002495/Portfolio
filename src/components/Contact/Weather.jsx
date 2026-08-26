"use client";

import { useEffect, useState } from "react";

export default function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Kolkata&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
      );

      const data = await res.json();

      setWeather({
        temp: data.main.temp,
        condition: data.weather[0].main,
      });
    };

    fetchWeather();
  }, []);

  if (!weather) return <p className="text-gray-400">Loading weather...</p>;

  return (
    <p className="text-sm text-gray-400 mt-2">
      📍 Kolkata — {weather.temp}°C, {weather.condition}
    </p>
  );
}