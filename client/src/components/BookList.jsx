import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import "./styles/BookList.css";

function BookList() {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		api
			.get("/book") // Le chemin relatif à baseURL
			.then((response) => {
				setBooks(response.data);
			})
			.catch((error) => {
				console.error("Error fetching books:", error); // Vérifie le message d'erreur ici
			});
	}, []);

	return (
		<div>
			<h1>Book list</h1>
			<ul>
				{books.map((book) => (
					<li key={book.id}>
						<Link to={`/book/${book.id}`}>{book.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default BookList;
