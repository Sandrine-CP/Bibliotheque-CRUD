const tables = require("../../database/tables");

const browse = async (req, res, next) => {
	try {
		const books = await tables.books.readAll();
		res.json(books);
	} catch (err) {
		console.error(err);
		next(err);
	}
};

const read = async (req, res, next) => {
	try {
		const { id } = req.params;
		const bookId = await tables.books.readId(id);

		if (bookId == null) {
			res.sendStatus(404);
		} else {
			res.json(bookId);
		}
	} catch (err) {
		console.error(err);
		next(err);
	}
};

const update = async (req, res, next) => {
	try {
		const { id } = req.params;
		const updatedBook = req.body;
		const affectedRows = await tables.books.update(id, updatedBook);
		if (affectedRows === 0) {
			res.status(404).json({ message: "Book not found" });
		} else {
			res.status(200).json({
				message: "Book successfully updated",
				id,
				updatedBook,
			});
		}
	} catch (err) {
		console.error(err);
		next(err);
	}
};

const add = async (req, res, next) => {
	try {
		// option Vérification que les champs saisis côté client sont bien présents
		// const { title, description, cover, price } = req.body;
		// if (!title || !description || !cover || price == null) {
		//     return res.status(400).json({ message: "Missing required fields" });
		//   }
		const newBook = req.body;
		const insertId = await tables.books.create(newBook);
		res
			.status(201)
			.json({ message: "Book successfully created", id: insertId });
	} catch (err) {
		console.error(err);
		next(err);
	}
};

const remove = async (req, res, next) => {
	try {
		const { id } = req.params;
		const affectedRows = await tables.books.delete(id);

		if (affectedRows === 0) {
			res.status(404).json({ message: "Book not found" });
		} else {
			res.status(200).json({ message: "Book successfully deleted" });
		}
	} catch (err) {
		console.error(err);
		next(err);
	}
};
module.exports = { browse, read, update, add, remove };
