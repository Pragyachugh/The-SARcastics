// WeatherCard.jsx
// Shows today's weather summary

import React from "react";

function WeatherCard({ forecast }) {
  return (
    <div className="bg-blue-100 p-4 rounded-xl shadow-md mb-4">
      <h2 className="text-lg font-semibold">Today</h2>
      <p>Max Temp: {forecast.temperature_2m_max[0]}°C</p>
      <p>Min Temp: {forecast.temperature_2m_min[0]}°C</p>
      <p>Rain: {forecast.precipitation_sum[0]} mm</p>
    </div>
  );
}

export default WeatherCard;
