import { Box, Typography, Container, Link, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "./styles/Footer.css";

function Footer() {
	return (
		<Box
			sx={{
				backgroundColor: "primary.main",
				color: "white",
				py: 3,
				px: 2,
				mt: "auto",
			}}
			component="footer"
		>
			<Container maxWidth="md">
				<Typography variant="body1" align="center">
					CRUD Practice - made with 💖 by Sandrine-CP
				</Typography>

				<Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
					{/* Liens sociaux */}
					<Link href="https://github.com/Sandrine-CP" target="_blank">
						<IconButton aria-label="GitHub" sx={{ color: "white" }}>
							<GitHubIcon />
						</IconButton>
					</Link>
					<Link
						href="https://www.linkedin.com/in/sandrine-cazenave-peyrasson"
						target="_blank"
					>
						<IconButton aria-label="LinkedIn" sx={{ color: "white" }}>
							<LinkedInIcon />
						</IconButton>
					</Link>
					<Link href="cazenave.p.sandrine@gmail.com">
						<IconButton aria-label="Email" sx={{ color: "white" }}>
							<EmailIcon />
						</IconButton>
					</Link>
				</Box>
			</Container>
		</Box>
	);
}

export default Footer;
