import { Link } from "react-router";
import NavDebutant from "../../Components/NavDebutant";
import imgFondHome from "../../img/imgFondHome.png";
import imgFondText from "../../img/imgFondText.png";

function Risques() {
	return (
		<>
			<main className="bodyText">
				<NavDebutant />
				<h1 className="h1-text">Les risques</h1>

				<section className="main-text">
					<div className="text-intro">
						<h2 className="h2-text-intro">
							Comprendre les risques des cryptomonnaies
						</h2>
						<p className="paragraphe-text-intro">
							Les cryptomonnaies ouvrent la porte à un monde nouveau,
							passionnant et plein d’opportunités. Mais comme toute technologie
							puissante, elles viennent aussi avec leur lot de risques. Voici
							les principaux à connaître pour naviguer dans cet univers en toute
							conscience.
						</p>
					</div>

					<article className="article-text">
						<div className="div-text">
							<h2 className="h2-text">Volatilité extrême</h2>
							<p className="paragraphe-text">
								Les cryptomonnaies peuvent perdre ou gagner énormément de valeur
								en très peu de temps.
								<br />
								<br /> Un jour tu gagnes 30 %, le lendemain tu perds 50 %.
								<br />
								<br /> Le marché peut être influencé par un tweet, une rumeur ou
								une décision politique.
								<br />
								<br /> Ce n’est pas un terrain pour les gens qui n’aiment pas
								l’instabilité.
							</p>
						</div>

						<div className="div-image" id="img1R" />
						{/* <img src={imgFondHome} alt="" /> */}
					</article>

					<article className="article-text">
						<div className="div-text">
							<h2 className="h2-text">Perte d’accès à ton portefeuille</h2>
							<p className="paragraphe-text">
								Ton argent est stocké dans un wallet (portefeuille numérique).
								<br />
								Mais si tu perds ton mot de passe ou ta seed phrase (phrase de
								récupération)… il est impossible de récupérer tes fonds. <br />
								Pas de SAV, pas de « mot de passe oublié », pas de banque.{" "}
								<br />
								<br />
								Tu es le seul responsable de la sécurité de ton argent.
							</p>
						</div>

						<div className="div-text">
							<h2 className="h2-text">Projets qui disparaissent</h2>
							<p className="paragraphe-text">
								Des milliers de cryptos existent, mais beaucoup sont
								abandonnées, perdent leur valeur ou sont des escroqueries
								déguisées (rug pull).
								<br />
								<br />
								Un projet peut sembler solide aujourd’hui, et s'effondrer
								demain.
								<br />
								<br />
								Investir dans la crypto, c’est comme soutenir une startup : il
								faut faire ses recherches.
							</p>
						</div>
					</article>

					<article className="article-text">
						<div className="div-image" id="img2R" />

						<div className="div-text">
							<h2 className="h2-text">Arnaques et fraudes</h2>
							<p className="paragraphe-text">
								Le monde crypto attire aussi les escrocs :<br />
								<br /> -Faux projets qui promettent des gains rapides. <br />
								-Sites de phishing qui volent tes clés privées. <br />
								-Influenceurs douteux qui poussent à l’achat de «shitcoins».{" "}
								<br />
								<br />
								Toujours vérifier, se renseigner, et ne jamais partager ses clés
								privées.
							</p>
						</div>
					</article>

					<article className="article-text">
						<div className="div-text">
							<h2 className="h2-text">Réglementation floue ou changeante</h2>
							<p className="paragraphe-text">
								Les lois sur les cryptos changent selon les pays, et parfois
								très vite : <br />
								<br />
								-Certaines plateformes peuvent devenir illégales.
								<br /> -Des impôts peuvent s’appliquer sans que tu le saches.{" "}
								<br />
								-Certains pays interdisent purement l’usage des cryptos. <br />
								-Toujours se renseigner sur la réglementation locale.
							</p>
						</div>

						<div className="div-image" id="img3R" />
					</article>

					<article className="article-text">
						<div className="div-image" id="img4R" />

						<div className="div-text">
							<h2 className="h2-text">Bugs techniques ou piratages</h2>
							<p className="paragraphe-text">
								Même les grandes plateformes (exchanges) peuvent :<br />
								<br /> -Être piratées.
								<br />
								-Avoir des failles de sécurité. <br />
								-Bloquer temporairement l'accès à tes fonds.
								<br />
								-Privilégier les plateformes fiables, et ne jamais tout laisser
								sur un seul site.
							</p>
						</div>
					</article>

					<div className="divBtnChapitre">
						<Link className="btnChapitre" to="/Transition">
							Passez au chapitre suivant
						</Link>
					</div>
				</section>
			</main>
		</>
	);
}

export default Risques;
