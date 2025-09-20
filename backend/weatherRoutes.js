// weatherRoutes.js
// Defines API endpoints for fetching weather data

const express = require("express");
const fetch = require("node-fetch"); // built-in in Node 18+, else install
const { checkAlerts } = require("./alertEngine");

const router = express.Router();

// Example GET endpoint: /weather?lat=28.6&lon=77.2
router.get("/", async (req, res) => {
  const { lat, lon } = req.query;

  if (!lat || !lon) {
    return res.status(400).json({ error: "Please provide lat & lon" });
  }

  try {
    // Call Open-Meteo API for 10-day forecast
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto&forecast_days=10`;

    const response = await fetch(url);
    const data = await response.json();

    // Run alert engine
    const alerts = checkAlerts(data);

    res.json({ forecast: data.daily, alerts });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch weather" });
  }
});

module.exports = router;
