import "./Risques.css";
import NavDebutant from "../../Components/NavDebutant";
import imgFondHome from "../../img/imgFondHome.png";

function Risques() {
	return (
		<>
			<NavDebutant />
			<h1>Les risques</h1>

			<main className="main-text">
				<div className="text-intro">
					<h2 className="h2-text">Comprendre les risques des cryptomonnaies</h2>
					<p className="paragraphe-text">
						Les cryptomonnaies ouvrent la porte à un monde nouveau, passionnant
						et plein d’opportunités. Mais comme toute technologie puissante,
						elles viennent aussi avec leur lot de risques. Voici les principaux
						à connaître pour naviguer dans cet univers en toute conscience.
					</p>
				</div>

				<article className="article-text">
					<div className="div-text">
						<h2 className="h2-text">Volatilité extrême</h2>
						<p className="paragraphe-text">
							Les cryptomonnaies peuvent perdre ou gagner énormément de valeur
							en très peu de temps. Un jour tu gagnes 30 %, le lendemain tu
							perds 50 %. Le marché peut être influencé par un tweet, une rumeur
							ou une décision politique. Ce n’est pas un terrain pour les gens
							qui n’aiment pas l’instabilité.
						</p>
					</div>

					<div className="div-image" />
					{/* <img src={imgFondHome} alt="" /> */}
				</article>

				<article className="article-text">
					<div className="div-text">
						<h2 className="h2-text">Perte d’accès à ton portefeuille</h2>
						<p className="paragraphe-text">
							Ton argent est stocké dans un wallet (portefeuille numérique).
							Mais si tu perds ton mot de passe ou ta seed phrase (phrase de
							récupération)… il est impossible de récupérer tes fonds. Pas de
							SAV, pas de « mot de passe oublié », pas de banque. Tu es le seul
							responsable de la sécurité de ton argent.
						</p>
					</div>

					<div className="div-image" />
				</article>

				<article className="article-text">
					<div className="div-text">
						<h2 className="h2-text">Projets qui disparaissent</h2>
						<p className="paragraphe-text">
							Des milliers de cryptos existent, mais beaucoup sont abandonnées,
							perdent leur valeur ou sont des escroqueries déguisées (rug pull).
							Un projet peut sembler solide aujourd’hui, et s'effondrer demain.
							Investir dans la crypto, c’est comme soutenir une startup : il
							faut faire ses recherches.
						</p>
					</div>

					<div className="div-image" />
				</article>

				<article className="article-text">
					<div className="div-text">
						<h2 className="h2-text">Arnaques et fraudes</h2>
						<p className="paragraphe-text">
							Le monde crypto attire aussi les escrocs : -Faux projets qui
							promettent des gains rapides. -Sites de phishing qui volent tes
							clés privées. -Influenceurs douteux qui poussent à l’achat de
							«shitcoins». Toujours vérifier, se renseigner, et ne jamais
							partager ses clés privées.
						</p>
					</div>

					<div className="div-image" />
				</article>

				<article className="article-text">
					<div className="div-text">
						<h2 className="h2-text">Réglementation floue ou changeante</h2>
						<p className="paragraphe-text">
							Les lois sur les cryptos changent selon les pays, et parfois très
							vite : -Certaines plateformes peuvent devenir illégales. -Des
							impôts peuvent s’appliquer sans que tu le saches. -Certains pays
							interdisent purement l’usage des cryptos. -Toujours se renseigner
							sur la réglementation locale.
						</p>
					</div>

					<div className="div-image" />
				</article>

				<article className="article-text">
					<div className="div-text">
						<h2 className="h2-text">Bugs techniques ou piratages</h2>
						<p className="paragraphe-text">
							Même les grandes plateformes (exchanges) peuvent : -Être piratées.
							-Avoir des failles de sécurité. -Bloquer temporairement l'accès à
							tes fonds. -Privilégier les plateformes fiables, et ne jamais tout
							laisser sur un seul site.
						</p>
					</div>

					<div className="div-image" />
				</article>
			</main>
		</>
	);
}

export default Risques;
