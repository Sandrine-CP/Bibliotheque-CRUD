// Load the express module to create a web application

const express = require("express");
// const cors = require("cors");

const app = express();

// app.use(
//     cors({
//       origin: [
//         process.env.CLIENT_URL, // keep this one, after checking the value in `server/.env`
//         "http://mysite.com",
//         "http://another-domain.com",
//       ],
//       credentials: true,
//     })
//   );

app.use(express.json());

// Import the API router
const apiRouter = require("./routers/apiRouter");

// Mount the API router under the "/api" endpoint
app.use("/api", apiRouter);

module.exports = app;
