import { Link } from "react-router";
import "./footer.css";

function Footer() {
	return (
		<footer>
			<div>
				<img src="" alt="logo" />
				<h1>NextBlock</h1>
				<p>"Explore the future, one block at a time."</p>
			</div>
			<div>
				<h2>Débutant</h2>
				<Link className="link" to="/Histoire">
					L'Histoire
				</Link>
				<Link className="link" to="/IntroDebutant">
					Introduction
				</Link>
				<Link className="link" to="/Risques">
					Les risques
				</Link>
			</div>
			<div>
				<h2>Intermédiaire</h2>
				<Link className="link" to="/Introduction">
					Introduction
				</Link>
				<Link className="link" to="/Analyse">
					Analyse
				</Link>
				<Link className="link" to="/Tokenomics">
					Tockenomics
				</Link>
			</div>
			<button type="button">Crypto-monnaies</button>
		</footer>
	);
}

export default Footer;
