import "./Home.css";
import { Link } from "react-router";
import Nav from "../Components/Nav";
import NavDebutant from "../Components/NavDebutant";
import imgFondHome from "../img/imgFondHome.png";

function HomeDebutant() {
	return (
		<>
			<body className="bodyHome">
				<NavDebutant />
				<main className="main-Home">
					<div className="div-home">
						<h1 className="grand-titre">
							Mode <br /> <span id="span-grand-titre">Débutant</span>
						</h1>
						<p className="text-home">
							Nous proposons une introduction claire et accessible à l’univers
							des crypto-monnaies. L’objectif est de vous familiariser avec les
							principes fondamentaux, les technologies utilisées et les enjeux
							économiques de cet écosystème en pleine évolution.
						</p>
						<Link>
							<button className="btn-home" type="button">
								Commencez le parcours
							</button>{" "}
						</Link>
					</div>
				</main>
			</body>
		</>
	);
}

export default HomeDebutant;
