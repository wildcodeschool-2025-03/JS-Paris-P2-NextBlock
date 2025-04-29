import "./NavIntermediaire.css";
import { Link } from "react-router";

function NavIntermediaire() {
	return (
		<nav>
			<Link to="/">
				<img src="" alt="logo" />
			</Link>

			<article>
				<Link className="link" to="/Histoire">
					Introduction
				</Link>
				<Link className="link" to="/IntroDebutant">
					Analyse
				</Link>
				<Link className="link" to="/Risques">
					Tockenomics
				</Link>
				<Link className="link" to="/AboutUs">
					À propos
				</Link>
			</article>

			<div className="CryptoNav">
				<button type="button">
					<Link className="link" to="/CryptoMonnaies">
						CryptoMonnaies
					</Link>
				</button>
				<button type="button">
					<Link className="link" to="/">
						changement de mode
					</Link>
				</button>
			</div>
		</nav>
	);
}

export default NavIntermediaire;
