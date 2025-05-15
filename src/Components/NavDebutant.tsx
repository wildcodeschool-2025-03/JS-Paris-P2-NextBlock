import "./NavDebutant.css";
import { Link, useOutletContext } from "react-router";
import SwitchMode from "./SwitchMode";
import logo from "../img/logocrypto.png";

function NavDebutant() {
	const { isBeginner, setIsBeginner } = useOutletContext();
	return (
		<nav className="NavP">
			<Link to="/">
				<img className="logo" src={logo} alt="logo" />
			</Link>

			{isBeginner ? (
				<article className="NavPages">
					<Link className="link" to="/Histoire">
						L'histoire
					</Link>
					<Link className="link" to="/IntroDebutant">
						Introduction
					</Link>
					<Link className="link" to="/Risques">
						Risques
					</Link>
					<Link className="link" to="/AboutUs">
						À propos
					</Link>
				</article>
			) : (
				<article className="NavPages">
					<Link className="link" to="/IntroIntermediaire">
						Introduction
					</Link>
					<Link className="link" to="/Analyse">
						Analyse
					</Link>
					<Link className="link" to="/Tockenomics">
						Tockenomics
					</Link>
					<Link className="link" to="/AboutUs">
						À propos
					</Link>
				</article>
			)}

			<div className="CryptoNav">
				<Link className="BtnCrypto" to="/CryptoMonnaies">
					CryptoMonnaies
				</Link>
			</div>
			<SwitchMode isBeginner={isBeginner} setIsBeginner={setIsBeginner} />
		</nav>
	);
}

export default NavDebutant;
