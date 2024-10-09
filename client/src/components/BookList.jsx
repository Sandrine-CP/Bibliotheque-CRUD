import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "./styles/BookList.css";

// composants Material UI
import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	Grid,
	IconButton,
	Snackbar,
	Alert,
	Button,
	Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function BookList() {
	const [books, setBooks] = useState([]);
	const [snackbar, setSnackbar] = useState({
		open: false,
		message: "",
		severity: "",
	});
	const navigate = useNavigate();

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

	// Gestion du delete by id
	const handleDelete = (id) => {
		if (window.confirm("Are you sure you want to delete this book?")) {
			api
				.delete(`/book/${id}`)
				.then((response) => {
					if (response.status === 200 && response.data.message) {
						setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
						setSnackbar({
							open: true,
							message: response.data.message,
							severity: "success",
						});
					} else {
						setSnackbar({
							open: true,
							message: "Failed to delete book",
							severity: "error",
						});
					}
				})
				.catch((error) => {
					console.error("Error deleting book:", error);
					setSnackbar({
						open: true,
						message: "An error occurred while deleting",
						severity: "eroor",
					});
				});
		}
	};

	return (
		<div className="book-gallery__container">
			<h1 className="book-gallery__title">Book Gallery</h1>
			<div className="book-gallery__add-button">
				<Button
					variant="contained"
					color="success"
					startIcon={<AddCircleOutlineIcon />}
					onClick={() => navigate("/book/new")}
					sx={{ textTransform: "none" }}
					type="button"
				>
					Add New Book
				</Button>
			</div>
			{/* Utilisation de Grid UI material pour afficher les cartes en mode galerie */}
			<Grid container spacing={3}>
				{books.map((book) => (
					<Grid item xs={12} sm={6} md={3} key={book.id}>
						{/* Affichage de chaque livre sous forme de Card */}
						<Card
							className="book__card"
							sx={{
								height: 300,
								width: "100%",
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
								transition: "transform 0.3s ease-in-out",
								"&:hover": { transform: "scale(1.02)" },
							}}
						>
							<CardMedia
								component="img"
								height="200"
								image={book.cover || "https://via.placeholder.com/150"} // Affiche une image par défaut si `cover` est null
								alt={book.title}
								sx={{
									width: "100%", // Prendre toute la largeur du conteneur
									height: "200px", // Fixer une hauteur
									objectFit: "contain", // Adapter l'image pour couvrir le conteneur sans déformer
								}}
							/>
							<Box sx={{ flexGrow: 1, padding: "16px" }}>
								{/* Titre */}
								<Typography gutterBottom variant="h5" component="div">
									{book.title}
								</Typography>
								{/* Description avec limitation de lignes */}
								{/* <Typography
									variant="body2"
									color="text.secondary"
									sx={{
										overflow: "hidden",
										textOverflow: "ellipsis",
										display: "-webkit-box",
										WebkitLineClamp: 2, // Affiche jusqu'à 3 lignes maximum
										WebkitBoxOrient: "vertical",
										fontSize: "0.85rem",
									}}
								>
									{book.description || "No description available."}
								</Typography> */}
							</Box>
							{/* Prix */}
							<Typography
								variant="h6"
								color="primary"
								sx={{ padding: "8px", alignSelf: "center", fontSize: "1rem" }}
							>
								Price: € {book.price}
							</Typography>
							<CardContent
								style={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
								}}
							>
								{/* Voir le livre */}
								<IconButton
									aria-label="view"
									color="primary"
									onClick={() => navigate(`/book/${book.id}`)}
								>
									<VisibilityIcon />
								</IconButton>
								{/* Éditer le livre */}
								<IconButton
									aria-label="edit"
									color="secondary"
									onClick={() => navigate(`/book/update/${book.id}`)}
								>
									<EditIcon />
								</IconButton>
								{/* Supprimer le livre */}
								<IconButton
									aria-label="delete"
									color="error"
									onClick={() => handleDelete(book.id)}
								>
									<DeleteIcon />
								</IconButton>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
			<Snackbar
				open={snackbar.open}
				autoHideDuration={8000}
				onClose={() => setSnackbar({ open: false, message: "", severity: "" })}
			>
				<Alert
					onClose={() =>
						setSnackbar({ open: false, message: "", severity: "" })
					}
					severity={snackbar.severity}
				>
					{snackbar.message}
				</Alert>
			</Snackbar>
		</div>
	);
}

export default BookList;
