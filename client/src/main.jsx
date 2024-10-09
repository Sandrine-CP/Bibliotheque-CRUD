import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import BookDetails from "./pages/BookDetail.jsx";
import AddBook from "./pages/AddBook.jsx";
import BookList from "./components/BookList.jsx";
import BookForm from "./components/BookForm.jsx";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/book",
				element: <BookList />,
			},
			{
				path: "/book/:id",
				element: <BookDetails />,
			},
			{
				path: "/book/update/:id",
				element: <BookForm />,
			},
			{
				path: "/book/new",
				element: <AddBook />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
