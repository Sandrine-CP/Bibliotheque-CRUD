import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import {
	TextField,
	Button,
	Box,
	Typography,
	Grid,
	Snackbar,
	Alert,
} from "@mui/material";
import "./styles/BookForm.css";

function BookForm() {
	const { id } = useParams();
	const [book, setBook] = useState({
		title: "",
		description: "",
		cover: "",
		price: "",
	});
	const navigate = useNavigate();
	const [snackbar, setSnackbar] = useState({
		open: false,
		message: "",
		severity: "",
	});

	useEffect(() => {
		if (id) {
			api
				.get(`/book/${id}`)
				.then((response) => {
					setBook(response.data);
				})
				.catch((error) => {
					console.error("Error fetching book details:", error);
				});
		}
	}, [id]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setBook({ ...book, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (id) {
			api
				.put(`/book/${id}`, book)
				.then(() => {
					setSnackbar({
						open: true,
						message: "Book successfully updated!",
						severity: "success",
					});
					setTimeout(() => {
						navigate("/");
					}, 1500);
				})
				.catch((error) => {
					console.error("Error updating book:", error);
					setSnackbar({
						open: true,
						message: "Failed to update book!",
						severity: "error",
					});
				});
		} else {
			api
				.post("/book", book)
				.then(() => {
					setSnackbar({
						open: true,
						message: "Book successfully added!",
						severity: "success",
					});
					setTimeout(() => {
						navigate("/");
					}, 1500);
				})
				.catch((error) => {
					console.error("Error adding book:", error);
					setSnackbar({
						open: true,
						message: "Failed to add book!",
						severity: "error",
					});
				});
		}
	};

	return (
		<Box sx={{ width: "100%", maxWidth: 600, mx: "auto", mt: 8, mb: 8 }}>
			<Typography
				variant="h4"
				component="h1"
				gutterBottom
				align="center"
				color="black"
				sx={{ marginBottom: 5 }}
			>
				{id ? "Edit Book" : "Add New Book"}
			</Typography>
			<form onSubmit={handleSubmit}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<TextField
							fullWidth
							label="Title"
							name="title"
							value={book.title}
							onChange={handleChange}
							required
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							fullWidth
							label="Description"
							name="description"
							value={book.description}
							onChange={handleChange}
							multiline
							rows={4}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							fullWidth
							label="Cover"
							name="cover"
							value={book.cover}
							onChange={handleChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							fullWidth
							label="Price €"
							name="price"
							value={book.price}
							onChange={handleChange}
							type="number"
							inputProps={{ step: "0.01" }}
						/>
					</Grid>
					<Grid item xs={12} sx={{ textAlign: "center" }}>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							sx={{
								backgroundColor: "#03DAC5",
								color: "black",
							}}
						>
							{id ? "Update Book" : "Add Book"}
						</Button>
					</Grid>
				</Grid>
			</form>
			<Snackbar
				open={snackbar.open}
				autoHideDuration={6000}
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
		</Box>
	);
}

export default BookForm;
