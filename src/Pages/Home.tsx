import "./Home.css";
import { Link } from "react-router";
import Nav from "../Components/Nav";
import NavDbt from "../Components/navDbt";
import imgFondHome from "../img/imgFondHome.png";

function Home() {
	return (
		<>
			<body className="bodyHome">
				<NavDbt />
				<main className="main-Home">
					<div className="div-home">
						<h1 className="grand-titre">
							Next<span id="span-grand-titre">Block</span>
						</h1>
						<p className="text-home">
							Le monde des crypto-monnaies peut sembler complexe, technique,
							parfois même intimidant… <br /> Et pourtant, il est en train de
							redéfinir la façon dont on pense l’argent, l’échange et
							l’innovation. <br /> <br />
							Informez-vous, formez-vous, et prenez part à l’évolution en cours.
						</p>
						<Link className="link-home" to="/HomeDebutant">
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

export default Home;
