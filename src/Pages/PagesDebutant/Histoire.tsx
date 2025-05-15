import "./Histoire.css";
import { Link } from "react-router";
import NavDebutant from "../../Components/NavDebutant";

function Histoire() {
	return (
		<>
			<main className="bodyText">
				<NavDebutant />
				<h1 className="h1-text">L’histoire des cryptos</h1>

				<section className="main-text">
					<article className="article-text">
						<div className="div-text">
							<h2 className="h2-text">Les débuts</h2>
							<p className="paragraphe-text">
								L’histoire passionnante des cryptomonnaies ou comment une idée
								folle a commencé à changer le monde. Il y a une quinzaine
								d’années, le monde de la finance tremblait. <br />
								Les banques faisaient faillite, les gens perdaient confiance, et
								une question planait dans l’air : <br />
								<br />
								Et si on pouvait créer une monnaie sans banque ? Une monnaie
								gérée par tout le monde… et par personne à la fois ? <br />
								<br />
								C’est à ce moment précis qu’un inconnu, qu’on appelle Satoshi
								Nakamoto, publie un texte de quelques pages : le whitepaper de
								Bitcoin. Et là, une graine est plantée. Une graine qui allait
								donner naissance à tout un nouvel écosystème numérique.
							</p>
						</div>

						<div className="div-image" id="imgH1" />
					</article>

					<article className="article-text">
						<div className="div-image" id="imgH2" />

						<div className="div-text">
							<h2 className="h2-text">
								Bitcoin : une idée simple, mais révolutionnaire
							</h2>
							<p className="paragraphe-text">
								Bitcoin, à la base, c’est juste une monnaie numérique. Mais
								attention : <br />
								<br />
								-Pas hébergée par une banque <br />
								-Pas imprimée par un gouvernement <br />
								-Pas contrôlée par une entreprise <br />
								Non. Bitcoin fonctionne grâce à un réseau de milliers
								d’ordinateurs dans le monde, tous synchronisés par ce qu’on
								appelle une blockchain.
								<br />
								Chaque transaction est enregistrée dans un bloc, qu’on ajoute à
								une chaîne de blocs — transparente, infalsifiable, publique.
								<br />
								<br /> C’est ça, l’innovation : Une monnaie libre, sécurisée par
								des maths, du code, et la collaboration du réseau.
							</p>
						</div>
					</article>

					<article className="article-text">
						<div className="div-text">
							<h2 className="h2-text">Une pizza, 10 000 bitcoins !!!</h2>
							<p className="paragraphe-text">
								Au début, personne ne prenait Bitcoin au sérieux. <br />
								Mais un jour, en 2010, un développeur décide d’acheter deux
								pizzas pour 10 000 BTC.
								<br />
								C’est la première vraie transaction, et ça restera dans
								l’histoire. <br />
								<br />
								Aujourd’hui, ces pizzas vaudraient des millions. <br />
								Pas mal pour un dîner entre amis, non ?
							</p>
						</div>

						<div className="div-image" id="imgH3" />
					</article>

					<article id="article-text">
						<div id="div-text">
							<h2 className="h2-text">Puis vinrent les autres…</h2>
							<p className="paragraphe-text">
								À mesure que Bitcoin grandissait, une nouvelle idée a émergé :
								Et si on pouvait faire plus que de simples paiements ? <br />
								C’est là qu’est né Ethereum, en 2015.
								<br /> Son créateur, Vitalik Buterin, voulait construire une
								plateforme intelligente, capable d'exécuter automatiquement des
								contrats numériques (appelés smart contracts).
								<br />
								<br />
								Avec Ethereum, les cryptomonnaies ne servaient plus juste à
								payer, mais à créer : <br />
								-des applications décentralisées
								<br />
								-des jeux
								<br /> -des œuvres numériques uniques (NFTs) <br />
								-et même de la finance sans banque (DeFi)
							</p>
						</div>

						<div id="div-image" className="imgH4" />
					</article>

					<article className="article-text">
						<div className="div-image" id="imgH5" />

						<div className="div-text">
							<h2 className="h2-text">Montée, chute, renaissance</h2>
							<p className="paragraphe-text">
								En 2021, les cryptos explosent. <br />
								Tout le monde en parle : Bitcoin dépasse 60 000 $, des stars
								lancent leurs NFT, des entreprises investissent. <br /> <br />
								Mais comme toute innovation jeune… il y a eu des excès. Des
								projets douteux, des arnaques, des chutes spectaculaires. <br />
								En 2022, c’est l’hiver crypto : l’écosystème fait le tri.
							</p>
						</div>
					</article>

					<article className="article-text">
						<div className="div-text">
							<h2 className="h2-text">Aujourd’hui : un nouveau départ</h2>
							<p className="paragraphe-text">
								Ce qu’il reste aujourd’hui, ce sont les fondations solides. Des
								projets sérieux. <br />
								Des développeurs passionnés. <br />
								Et une communauté mondiale qui croit à un internet plus libre,
								plus transparent, plus décentralisé. <br /> <br />
								Les cryptomonnaies, ce n’est pas juste de l’argent. C’est une
								réinvention du système, une nouvelle manière de penser la
								valeur, la confiance et l’échange. <br /> <br /> Et tu sais quoi
								? <br />
								L’histoire est loin d’être finie. <br />
								Elle ne fait même que commencer. <br />
								Et toi… tu arrives pile au bon moment.
							</p>
						</div>

						<div className="div-image" id="imgH6" />
					</article>

					<div className="divBtnChapitre">
						<Link className="btnChapitre" to="/introDebutant">
							Passez au chapitre suivant
						</Link>
					</div>
				</section>
			</main>
		</>
	);
}

export default Histoire;
