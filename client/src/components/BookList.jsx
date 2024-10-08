import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import "./styles/BookList.css";

// Si tu utilises Material UI, importe les composants de Card :
import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	Button,
	Grid,
} from "@mui/material";

function BookList() {
	const [books, setBooks] = useState([]);

	// Récupère tous les livres depuis l'API
	useEffect(() => {
		api
			.get("/book")
			.then((response) => {
				setBooks(response.data);
			})
			.catch((error) => {
				console.error("Error fetching books:", error);
			});
	}, []);

	return (
		<div style={{ padding: "20px" }}>
			<h1 style={{ textAlign: "center", marginBottom: "30px" }}>
				Book Gallery
			</h1>
			{/* Utilisation de Grid pour afficher les cartes en mode galerie */}
			<Grid container spacing={3}>
				{books.map((book) => (
					<Grid item xs={12} sm={6} md={4} key={book.id}>
						{/* Affichage de chaque livre sous forme de Card */}
						<Card
							style={{
								height: "100%",
								display: "flex",
								flexDirection: "column",
							}}
						>
							<CardMedia
								component="img"
								height="200"
								image={book.cover || "https://via.placeholder.com/150"} // Affiche une image par défaut si `cover` est null
								alt={book.title}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									{book.title}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									{book.description
										? `${book.description.substring(0, 100)}...`
										: "No description available."}
								</Typography>
								<Typography
									variant="h6"
									color="primary"
									style={{ marginTop: "10px" }}
								>
									Price: ${book.price}
								</Typography>
							</CardContent>
							<CardContent style={{ marginTop: "auto" }}>
								<Link
									to={`/book/${book.id}`}
									style={{ textDecoration: "none" }}
								>
									<Button variant="contained" color="primary">
										Détails
									</Button>
								</Link>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</div>
	);
}

export default BookList;
