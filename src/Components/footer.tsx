import { Link } from "react-router";
import "./footer.css";

function Footer() {
	return (
		<footer className="Footer">
			<article className="TitreLogo">
				<div className="logoFooter">
					<h1 className="TitreFooter">
						Next<span className="CouleurLogo">Block</span>
					</h1>
					<p className="slogan">"Explore the future, one block at a time."</p>
				</div>
			</article>
			<div className="Page">
				<h2>Débutant</h2>
				<Link className="LinkFooter" to="/Histoire">
					L'Histoire
				</Link>
				<Link className="LinkFooter" to="/IntroDebutant">
					Introduction
				</Link>
				<Link className="LinkFooter" to="/Risques">
					Les risques
				</Link>
			</div>
			<div className="Page">
				<h2>Intermédiaire</h2>
				<Link className="LinkFooter" to="/Introduction">
					Introduction
				</Link>
				<Link className="LinkFooter" to="/Analyse">
					Analyse
				</Link>
				<Link className="LinkFooter" to="/Tokenomics">
					Tockenomics
				</Link>
			</div>
			<Link className="btnChapitre" id="btnCrypto" to="/CryptoMonnaies">
				Crypto-Monnaies
			</Link>
		</footer>
	);
}

export default Footer;
