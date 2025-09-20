// App.jsx
// Main React component - fetches weather & shows dashboard

import React, { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard";
import ForecastChart from "./components/ForecastChart";
import AlertsBanner from "./components/AlertsBanner";

function App() {
  const [forecast, setForecast] = useState(null);
  const [alerts, setAlerts] = useState([]);
  const [city, setCity] = useState({ lat: 28.6, lon: 77.2 }); // Default: Delhi

  useEffect(() => {
    async function fetchWeather() {
      const res = await fetch(`http://localhost:5000/weather?lat=${city.lat}&lon=${city.lon}`);
      const data = await res.json();
      setForecast(data.forecast);
      setAlerts(data.alerts);
    }
    fetchWeather();
  }, [city]);

  return (
    <div className="p-4 font-sans">
      <h1 className="text-2xl font-bold mb-4">🌤️ Advanced Weather Dashboard</h1>
      {alerts.length > 0 && <AlertsBanner alerts={alerts} />}
      {forecast ? (
        <>
          <WeatherCard forecast={forecast} />
          <ForecastChart forecast={forecast} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
