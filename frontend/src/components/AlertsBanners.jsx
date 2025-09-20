// AlertsBanner.jsx
// Shows weather alerts in a banner

import React from "react";

function AlertsBanner({ alerts }) {
  return (
    <div className="bg-red-200 p-2 mb-4 rounded">
      <h2 className="font-bold">⚠️ Alerts</h2>
      <ul>
        {alerts.map((alert, i) => (
          <li key={i}>{alert}</li>
        ))}
      </ul>
    </div>
  );
}

export default AlertsBanner;
