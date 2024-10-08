const express = require("express");

const bookRouter = express.Router();

const {
	browse,
	readId,
	update,
} = require("../../../controllers/bookController");

// GET http://localhost:5001/api/book
bookRouter.get("/", browse);

// GET http://localhost:5001/api/book/id
bookRouter.get("/:id", readId);

// PUT http://localhost:5001/api/book/id
bookRouter.put("/:id", update);

module.exports = bookRouter;
