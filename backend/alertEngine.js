// alertEngine.js
// Simple rules to generate weather alerts

function checkAlerts(forecast) {
  const alerts = [];

  forecast.temperature_2m_max.forEach((temp, i) => {
    const date = forecast.time[i];

    if (temp > 40) {
      alerts.push(`⚠️ Heatwave on ${date} (Max: ${temp}°C)`);
    }
    if (forecast.precipitation_sum[i] > 50) {
      alerts.push(`🌧️ Heavy rain on ${date} (Rainfall: ${forecast.precipitation_sum[i]} mm)`);
    }
  });

  return alerts;
}

module.exports = { checkAlerts };
