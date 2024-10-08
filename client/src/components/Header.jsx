import { Link } from "react-router-dom";
import "./styles/Header.css";

function Header() {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link To="/">Home</Link>
					</li>
					<li>
						<Link To="/book/add">Add Book</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Header;
