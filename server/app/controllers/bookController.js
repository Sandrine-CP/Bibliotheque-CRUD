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

const readId = async (req, res, next) => {
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

module.exports = { browse, readId, update };
