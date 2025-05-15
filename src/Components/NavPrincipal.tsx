import { Link } from "react-router";
import MenuBurger from "./MenuBurger";
import SwitchMode from "./SwitchMode";
import "./NavPrincipal.css";
import logo from "../img/logocrypto.png";

const debutant = {
	title: "Débutant",
	list: [
		{ title: "Histoire", url: "/Histoire" },
		{ title: "Introduction", url: "/Introduction" },
		{ title: "Les risques", url: "/Risques" },
	],
};

const intermediaire = {
	title: "Intermédiaire",
	list: [
		{ title: "Introduction", url: "/IntroIntermediaire" },
		{ title: "Analyse", url: "/Analyse" },
		{ title: "Tokenomics", url: "/Tokenimics" },
	],
};

function NavPrincipal() {
	return (
		<nav className="NavP">
			<Link to="/">
				<img className="logo" src={logo} alt="logo" />
			</Link>

			<div className="BurgerDiv">
				<MenuBurger pagesLevel={debutant} />
				<MenuBurger pagesLevel={intermediaire} />
				<Link className="link" to="/AboutUs">
					À propos
				</Link>
			</div>

			<div>
				<button type="button" className="btnChapitre" id="btnCrypto">
					Crypto-monnaies
				</button>
			</div>
		</nav>
	);
}

export default NavPrincipal;
