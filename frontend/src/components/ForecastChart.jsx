// ForecastChart.jsx
// Plots 10-day forecast using simple HTML list (can replace with Chart.js/Recharts)

import React from "react";

function ForecastChart({ forecast }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-2">10-Day Forecast</h2>
      <ul>
        {forecast.time.map((day, i) => (
          <li key={day}>
            {day}: {forecast.temperature_2m_min[i]}°C - {forecast.temperature_2m_max[i]}°C, Rain: {forecast.precipitation_sum[i]} mm
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ForecastChart;
