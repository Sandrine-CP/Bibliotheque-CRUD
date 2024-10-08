// Load environment variables from .env file
require("dotenv").config();

// Check database connection
require("./database/client").checkConnection();

// Import express application from app/config.js
const app = require("./app/config");

// Get th eport from environment variables
const port = process.env.APP_PORT;

// Start the server and listen on specified port
app
	.listen(port, () => {
		console.log(`Server is listening on port ${port}`);
	})
	.on("error", (err) => {
		console.error("Error:", err.message);
	});
