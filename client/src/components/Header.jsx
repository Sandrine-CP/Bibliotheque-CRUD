import { IconButton, AppBar, Toolbar, Typography, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./styles/Header.css";

function Header() {
	return (
		<AppBar
			position="static"
			sx={{
				backgroundColor: "#a2d2ff",
				boxShadow: "none",
			}}
		>
			<Toolbar sx={{ justifyContent: "space-between" }}>
				{/* Icône Home */}
				<IconButton color="inherit" href="/" sx={{ marginRight: 1 }}>
					<HomeIcon />
				</IconButton>
				<Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
					{/* Titre à côté de l'icône Home */}
					<Typography variant="h6" component="div">
						My CRUD Practice website
					</Typography>
				</Box>
				<Box>
					<IconButton
						color="inherit"
						href="https://github.com/Sandrine-CP"
						target="_blank"
					>
						<GitHubIcon />
					</IconButton>
					<IconButton
						color="inherit"
						href="https://www.linkedin.com/in/sandrine-cazenave-peyrasson"
						target="_blank"
					>
						<LinkedInIcon />
					</IconButton>
				</Box>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
