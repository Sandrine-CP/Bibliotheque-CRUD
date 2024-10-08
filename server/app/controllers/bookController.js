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

module.exports = { browse };
