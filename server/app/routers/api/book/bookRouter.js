const express = require("express");

const bookRouter = express.Router();

const { browse } = require("../../../controllers/bookController");

// http://localhost:5001/api/book
bookRouter.get("/", browse);

module.exports = bookRouter;
