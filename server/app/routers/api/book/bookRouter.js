const express = require("express");

const bookRouter = express.Router();

const {
	browse,
	read,
	update,
	add,
	remove,
} = require("../../../controllers/bookController");
// GET
// http://localhost:5001/api/book - Lire tous les livres
bookRouter.get("/", browse);
// http://localhost:5001/api/book/id - Lire un livre spécifique par ID
bookRouter.get("/:id", read);

// PUT
// http://localhost:5001/api/book/id - Mettre à jour un livre par ID
bookRouter.put("/:id", update);

// POST
// http://localhost:5001/api/book - Créer un nouveau livre
bookRouter.post("/", add);

// DELETE
// http://localhost:5001/api/book/id - Supprimer un livre par ID
bookRouter.delete("/:id", remove);

module.exports = bookRouter;
