import { Link } from "react-router";
import MenuBurger from "./MenuBurger";
import SwitchMode from "./SwitchMode";
import "./NavPrincipal.css";

const debutant = {
	title: "Débutant",
	list: [
		{ title: "histoire", url: "/Histoire" },
		{ title: "Introduction", url: "/Introduction" },
		{ title: "Les risques", url: "/Risques" },
	],
};

const intermediaire = {
	title: "Intermédiaire",
	list: [
		{ title: "Introduction", url: "/Introduction" },
		{ title: "Analyse", url: "/Analyse" },
		{ title: "Tokenomics", url: "/Tokenimics" },
	],
};

function NavPrincipal() {
	return (
		<nav className="NavP">
			<Link to="/">
				<img src="" alt="logo" />
			</Link>
			<div className="BurgerDiv">
				<MenuBurger pagesLevel={debutant} />
				<MenuBurger pagesLevel={intermediaire} />
				<Link className="link" to="/AboutUs">
					À propos
				</Link>
			</div>

			<div>
				<button type="button" className="BtnCrypto">
					crypto-monaies
				</button>
			</div>
		</nav>
	);
}

export default NavPrincipal;
