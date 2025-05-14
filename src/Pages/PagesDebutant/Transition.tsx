import { Link } from "react-router";
import NavPrincipal from "../../Components/NavPrincipal";

function Transition() {
	return (
		<main className="bodyText">
			<NavPrincipal />
			<h1 className="h1-text">Tu es prêt à aller plus loin !</h1>

			<section className="main-text">
				<div className="text-intro">
					<p className="paragraphe-text-intro">
						Maintenant que tu as compris ce qu’est une cryptomonnaie, tu as posé
						les bases nécessaires pour explorer cet univers fascinant.  C’est le
						moment idéal pour découvrir comment investir, où acheter, et comment
						débuter dans le trading.
					</p>

					<h2 className="h2-text-intro">
						Que tu sois ici pour apprendre, pour t’initier ou pour passer à
						l’action, <br /> tu as déjà fait le plus dur : te lancer.
					</h2>
				</div>

				<div className="divBtnTransition">
					<Link className="btnChapitre" to="/IntroIntermediaire">
						Passez au mode intermédiaire
					</Link>
				</div>
			</section>
		</main>
	);
}

export default Transition;
