import "./Home.css";
import Nav from "../Components/Nav";
import imgFondHome from "../img/imgFondHome.png";

function Home() {
	return (
		<>
			<body className="bodyHome">
				<Nav />
				<main className="main-Home">
					<div className="div-home">
						<h1 className="grand-titre">NextBlock</h1>
						<p className="text-home">
							Le monde des crypto-monnaies peut sembler complexe, technique,
							parfois même intimidant… Et pourtant, il est en train de redéfinir
							la façon dont on pense l’argent, l’échange et l’innovation.
							Informez-vous, formez-vous, et prenez part à l’évolution en cours.
						</p>
						<button type="button">Commencez le parcours</button>
					</div>
				</main>
			</body>
		</>
	);
}

export default Home;
