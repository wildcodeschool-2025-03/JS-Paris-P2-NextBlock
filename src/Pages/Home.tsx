import "./Home.css";
import { Link } from "react-router";
/*import imgFondHome from "../img/imgFondHome.png";*/
import NavPrincipal from "../Components/NavPrincipal";

function Home() {
	return (
		<>
			<body className="bodyHome">
				<NavPrincipal />
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
							Commencez le parcours
						</Link>
					</div>
				</main>
			</body>
		</>
	);
}

export default Home;
