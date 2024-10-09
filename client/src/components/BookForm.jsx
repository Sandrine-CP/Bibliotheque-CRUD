import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";
import "./styles/BookForm.css";

function BookForm() {
	const { id } = useParams();
	const [book, setBook] = useState({
		title: "",
		decsription: "",
		cover: "",
		price: "",
	});
	const navigate = useNavigate();

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
					alert("Book successfully updated!");
					navigate("/");
				})
				.catch((error) => {
					console.error("Error updating book:", error);
					alert("Failed to update book!");
				});
		} else {
			api
				.post("/book", book)
				.then(() => {
					alert("Book successfully added!");
					navigate("/");
				})
				.catch((error) => {
					console.error("Error updating book:", error);
					alert("Failed to add book!");
				});
		}
	};

	return (
		<Box sx={{ width: "100%", maxWidth: 600, mx: "auto", mt: 5 }}>
			{id ? "Edit Book" : "Add New Book"}
			<Typography
				variant="h4"
				component="h1"
				gutterBottom
				align="center"
				color="black"
			>
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
								label="Price ()€"
								name="price"
								value={book.price}
								onChange={handleChange}
								type="number"
								inputProps={{ step: "0.01" }}
							/>
						</Grid>
						<Grid item xs={12} sx={{ textAlign: "center" }}>
							<Button type="submit" variant="contained" color="primary">
								{id ? "Update Book" : "Add Book"}
							</Button>
						</Grid>
					</Grid>
				</form>
			</Typography>
		</Box>
	);
}

export default BookForm;
