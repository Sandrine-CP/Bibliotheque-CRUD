// Load the express module to create a web application

const cors = require("cors");
const express = require("express");

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json());

// Import the API router
const apiRouter = require("./routers/api/router");

// Mount the API router under the "/api" endpoint
app.use("/api", apiRouter);

module.exports = app;
