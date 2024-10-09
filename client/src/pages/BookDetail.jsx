import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import "./styles/BookDetails.css";

// composants Material UI
import { IconButton, Snackbar, Alert } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function BookDetails() {
	const { id } = useParams();
	const [book, setBook] = useState(null);
	const [snackbar, setSnackbar] = useState({
		open: false,
		message: "",
		severity: "",
	});

	const navigate = useNavigate();

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

	// Gestion du delete by id
	const handleDelete = (id) => {
		if (window.confirm("Are you sure you want to delete this book?")) {
			api
				.delete(`/book/${id}`)
				.then((response) => {
					if (response.status === 200 && response.data.message) {
						setSnackbar({
							open: true,
							message: response.data.message,
							severity: "success",
						});
						setTimeout(() => {
							navigate("/");
						}, 2000);
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

	return book ? (
		<div className="book-detail">
			<img
				src={book.cover || "https://via.placeholder.com/150"}
				alt={book.title}
				style={{ margin: "20px", width: "50%", border: "1px solid black" }}
			/>
			<h2 style={{ textAlign: "center", marginBottom: "30px", color: "black" }}>
				{book.title}
			</h2>
			<p style={{ color: "black" }}>{book.description}</p>
			<p style={{ color: "black" }}>Price: € {book.price}</p>
			<IconButton
				aria-label="edit"
				color="secondary"
				onClick={() => navigate(`/book/update/${book.id}`)}
				sx={{ color: "#03DAC5" }}
			>
				<EditIcon />
			</IconButton>
			<IconButton
				aria-label="delete"
				color="error"
				onClick={() => handleDelete(book.id)}
				sx={{ margin: "10px" }}
			>
				<DeleteIcon />
			</IconButton>
			<Snackbar
				open={snackbar.open}
				autoHideDuration={3000}
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
	) : (
		<div>Loading...</div>
	);
}

export default BookDetails;
