import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import "./styles/BookDetails.css";

function BookDetails() {
	const { id } = useParams();
	const [book, setBook] = useState(null);

	useEffect(() => {
		api
			.get(`/book/${id}`)
			.then((response) => {
				setBook(response.data);
			})
			.catch((error) => {
				console.error("Error fetching book details:", error);
			});
	}, [id]);

	return book ? (
		<div className="book-detail">
			<img
				src={book.cover || "https://via.placeholder.com/150"}
				alt={book.title}
			/>
			<h1 style={{ textAlign: "center", marginBottom: "30px", color: "black" }}>
				{book.title}
			</h1>
			<p style={{ color: "black" }}>{book.description}</p>
			<p style={{ color: "black" }}>Price: € {book.price}</p>
		</div>
	) : (
		<div>Loading...</div>
	);
}

export default BookDetails;
