// server.js
// Main entry point for backend server (Node.js + Express)

const express = require("express");
const cors = require("cors");
const weatherRoutes = require("./weatherRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // allows frontend to call backend
app.use(express.json());

// Routes for weather API
app.use("/weather", weatherRoutes);

app.listen(PORT, () => {
  console.log(`✅ Backend server running on http://localhost:${PORT}`);
});
