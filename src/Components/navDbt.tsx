import { Link } from "react-router";

function NavDbt() {
	return (
		<nav>
			<Link to="/">
				<img src="" alt="logo" />
			</Link>

			<article>
				<Link className="link" to="/Histoire">
					L'histoire
				</Link>
				<Link className="link" to="/IntroDebutant">
					Introduction
				</Link>
				<Link className="link" to="/Risques">
					ÀLes risques
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

export default NavDbt;
