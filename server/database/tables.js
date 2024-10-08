// Import the repository modules responsible for handling data operations on the tables
const BookRepository = require("./models/BookRepository");

// Create an empty object to hold data repositories for different tables
const tables = {};

/* ************************************************************************* */
// Register data repositories for tables
/* ************************************************************************* */

// Register each repository as data access point for its table

tables.books = new BookRepository();

/* ************************************************************************* */

// Use a Proxy to customize error messages when trying to access a non-existing table

// Export the Proxy instance with custom error handling
module.exports = new Proxy(tables, {
	get(obj, prop) {
		if (prop in obj) {
			return obj[prop];
		}
		// Si la propriété n'existe pas, lever une exception
		throw new ReferenceError(
			`Le repository ${prop} n'existe pas dans l'objet 'tables'. Assurez-vous qu'il est bien enregistré.`,
		);
	},
});
