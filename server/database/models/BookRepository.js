const AbstractRepository = require("./AbstractRepository");

class BookRepository extends AbstractRepository {
	constructor() {
		super({ table: "books" });
	}

	async readAll() {
		const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
		return rows;
	}
}

module.exports = BookRepository;
