import "./Histoire.css";
import NavDebutant from "../../Components/NavDebutant";

function Histoire() {
	return (
		<>
			<NavDebutant />
			<h1>L’histoire des cryptos</h1>

			<main className="main-text">
				<article className="article-text">
					<div className="div-text">
						<h2 className="h2-text">Les débuts</h2>
						<p className="paragraphe-text">
							L’histoire passionnante des cryptomonnaies ou comment une idée
							folle a commencé à changer le monde. Il y a une quinzaine
							d’années, le monde de la finance tremblait. Les banques faisaient
							faillite, les gens perdaient confiance, et une question planait
							dans l’air : Et si on pouvait créer une monnaie sans banque ? Une
							monnaie gérée par tout le monde… et par personne à la fois ? C’est
							à ce moment précis qu’un inconnu, qu’on appelle Satoshi Nakamoto,
							publie un texte de quelques pages : le whitepaper de Bitcoin. Et
							là, une graine est plantée. Une graine qui allait donner naissance
							à tout un nouvel écosystème numérique.
						</p>
					</div>

					<div className="div-image" />
				</article>

				<article className="article-text">
					<div className="div-text">
						<h2 className="h2-text">
							Bitcoin : une idée simple, mais révolutionnaire
						</h2>
						<p className="paragraphe-text">
							Bitcoin, à la base, c’est juste une monnaie numérique. Mais
							attention : -Pas hébergée par une banque -Pas imprimée par un
							gouvernement -Pas contrôlée par une entreprise Non. Bitcoin
							fonctionne grâce à un réseau de milliers d’ordinateurs dans le
							monde, tous synchronisés par ce qu’on appelle une blockchain.
							Chaque transaction est enregistrée dans un bloc, qu’on ajoute à
							une chaîne de blocs — transparente, infalsifiable, publique. C’est
							ça, l’innovation : Une monnaie libre, sécurisée par des maths, du
							code, et la collaboration du réseau.
						</p>
					</div>

					<div className="div-image" />
				</article>

				<article className="article-text">
					<div className="div-text">
						<h2 className="h2-text">Une pizza, 10 000 bitcoins !!!</h2>
						<p className="paragraphe-text">
							Au début, personne ne prenait Bitcoin au sérieux. Mais un jour, en
							2010, un développeur décide d’acheter deux pizzas pour 10 000 BTC.
							C’est la première vraie transaction, et ça restera dans
							l’histoire. Aujourd’hui, ces pizzas vaudraient des millions. Pas
							mal pour un dîner entre amis, non ?
						</p>
					</div>

					<div className="div-image" />
				</article>

				<article className="article-text">
					<div className="div-text">
						<h2 className="h2-text">Puis vinrent les autres…</h2>
						<p className="paragraphe-text">
							À mesure que Bitcoin grandissait, une nouvelle idée a émergé : Et
							si on pouvait faire plus que de simples paiements ? C’est là
							qu’est né Ethereum, en 2015. Son créateur, Vitalik Buterin,
							voulait construire une plateforme intelligente, capable d'exécuter
							automatiquement des contrats numériques (appelés smart contracts).
							Avec Ethereum, les cryptomonnaies ne servaient plus juste à payer,
							mais à créer : -des applications décentralisées -des jeux -des
							œuvres numériques uniques (NFTs) -et même de la finance sans
							banque (DeFi)
						</p>
					</div>

					<div className="div-image" />
				</article>

				<article className="article-text">
					<div className="div-text">
						<h2 className="h2-text">Montée, chute, renaissance</h2>
						<p className="paragraphe-text">
							En 2021, les cryptos explosent. Tout le monde en parle : Bitcoin
							dépasse 60 000 $, des stars lancent leurs NFT, des entreprises
							investissent. Mais comme toute innovation jeune… il y a eu des
							excès. Des projets douteux, des arnaques, des chutes
							spectaculaires. En 2022, c’est l’hiver crypto : l’écosystème fait
							le tri.
						</p>
					</div>

					<div className="div-image" />
				</article>

				<article className="article-text">
					<div className="div-text">
						<h2 className="h2-text">Aujourd’hui : un nouveau départ</h2>
						<p className="paragraphe-text">
							Ce qu’il reste aujourd’hui, ce sont les fondations solides. Des
							projets sérieux. Des développeurs passionnés. Et une communauté
							mondiale qui croit à un internet plus libre, plus transparent,
							plus décentralisé. Les cryptomonnaies, ce n’est pas juste de
							l’argent. C’est une réinvention du système, une nouvelle manière
							de penser la valeur, la confiance et l’échange. Et tu sais quoi ?
							L’histoire est loin d’être finie. Elle ne fait même que commencer.
							Et toi… tu arrives pile au bon moment.
						</p>
					</div>

					<div className="div-image" />
				</article>
			</main>
		</>
	);
}

export default Histoire;
