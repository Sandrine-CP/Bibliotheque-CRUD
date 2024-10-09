const AbstractRepository = require("./AbstractRepository");

class BookRepository extends AbstractRepository {
	constructor() {
		super({ table: "books" });
	}

	async readAll() {
		const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
		return rows;
	}

	async readId(id) {
		const [rows] = await this.database.query(
			`SELECT id, title, description, cover, price FROM ${this.table} WHERE id = ?`,
			[id],
		);
		return rows[0];
	}

	async update(id, book) {
		const { title, description, cover, price } = book;
		const [result] = await this.database.query(
			`UPDATE ${this.table} SET title = ?, description = ?, cover = ?, price= ? WHERE id = ?`,
			[title, description, cover, price, id],
		);
		return result.affectedRows;
	}

	async create(book) {
		const { title, description, cover, price } = book;
		const [result] = await this.database.query(
			`INSERT INTO ${this.table} (title, description, cover, price) VALUES (?, ?, ?, ?)`,
			[title, description, cover, price],
		);
		return result.insertId;
	}

	async delete(id) {
		const [result] = await this.database.query(
			`DELETE FROM ${this.table} WHERE id = ?
            `,
			[id],
		);
		return result.affectedRows;
	}
}

module.exports = BookRepository;
