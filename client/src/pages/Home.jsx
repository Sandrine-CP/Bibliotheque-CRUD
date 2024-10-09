import { useEffect, useState } from "react";
import { dividerClasses, Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import BookList from "../components/BookList";
import "./styles/Home.css";

function Home() {
	const [showScroll, setShowScroll] = useState(false);
	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 300) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 300) {
			setShowScroll(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", checkScrollTop);
		return () => window.removeEventListener("scroll", checkScrollTop);
	}, [showScroll]);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className="home__container">
			<BookList />
			{showScroll && (
				<Fab
					color="primary"
					size="small"
					onClick={scrollToTop}
					sx={{
						position: "fixed",
						bottom: 16,
						right: 16,
						zIndex: 100,
						backgroundColor: "#6200EE",
						color: "#fff",
						"&:hover": { backgroundColor: "#3700B3" },
					}}
				>
					<KeyboardArrowUpIcon />
				</Fab>
			)}
		</div>
	);
}

export default Home;
