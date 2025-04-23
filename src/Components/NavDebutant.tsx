import "./NavDebutant.css";
import { Link } from "react-router";

function NavDebutant() {
	return (
		<nav>
			<Link to="/Histoire">Histoire</Link>
			<Link to="/introDebutant">Intro D</Link>
			<Link to="/Risques">Risques</Link>
		</nav>
	);
}

export default NavDebutant;
