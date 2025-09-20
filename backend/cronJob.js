// cronJob.js
// Example scheduled job to fetch and log data every 6 hours

const cron = require("node-cron");
const fetch = require("node-fetch");

// Run job every 6 hours
cron.schedule("0 */6 * * *", async () => {
  console.log("🔄 Fetching latest forecast...");
  const url = "https://api.open-meteo.com/v1/forecast?latitude=28.6&longitude=77.2&daily=temperature_2m_max&timezone=auto&forecast_days=1";
  const res = await fetch(url);
  const data = await res.json();
  console.log("Latest Max Temp:", data.daily.temperature_2m_max[0]);
});
