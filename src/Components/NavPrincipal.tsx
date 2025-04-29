import { Link } from "react-router";
import MenuBurger from "./MenuBurger";
import SwitchMode from "./SwitchMode";
import "./NavPrincipal.css";

function NavPrincipal() {
	return (
		<nav className="NavP">
			<Link to="/">
				<img src="" alt="logo" />
			</Link>
			<div className="BurgerDiv">
				<MenuBurger />
				<Link className="link" to="/AboutUs">
					À propos
				</Link>
			</div>

			<div>
				<button type="button" className="BtnCrypto">
					crypto-monaies
				</button>
			</div>

			<SwitchMode />
		</nav>
	);
}

export default NavPrincipal;
