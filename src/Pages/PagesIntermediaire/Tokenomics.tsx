import { Link } from "react-router";
import NavDebutant from "../../Components/NavDebutant";

function Tokenomics() {
	return (
		<main className="bodyText">
			<NavDebutant />
			<section className="main-text">
				<h1 className="h1-text">C’est quoi la Tokenomics ?</h1>
				<article className="article-text">
					<div className="div-text">
						<h2 className="h2-text">La tokenomics</h2>
						<p className="paragraphe-text">
							La tokenomics (ou token economics) désigne l’ensemble des règles
							économiques qui régissent un token ou une crypto-monnaie.
							<br /> Elle englobe :
							<br />
							<br /> -Combien de tokens existent au total (offre maximale)
							<br />
							-Comment ils sont distribués (ex : à l’équipe, aux investisseurs,
							à la communauté…)
							<br />
							-Leur utilité dans l’écosystème (paiement, gouvernance,
							récompense…)
							<br />
							-Les mécanismes de contrôle comme le burn (destruction de tokens)
							ou staking (blocage en échange de récompenses)
							<br />
							<br />
							En bref, la tokenomics permet de comprendre comment un projet gère
							sa monnaie, et donc de savoir si son modèle est durable, juste et
							intéressant pour investir
						</p>
					</div>
					<div className="div-image" />
				</article>

				<h2 className="h2-text">Les piliers fondamentaux de la tokenomics</h2>

				<article className="article-text">
					<div className="div-text">
						<h2 className="h2-text">1- L’offre totale (Total Supply)</h2>
						<p className="paragraphe-text">
							C’est le nombre maximum de tokens qui seront créés.
							<br />
							<br />
							Exemple : Bitcoin a une offre limitée à 21 millions. Ça crée de la
							rareté, donc potentiellement de la valeur.
						</p>
					</div>
					<div className="div-text">
						<h2 className="h2-text">
							2- L’offre en circulation (Circulating Supply)
						</h2>
						<p className="paragraphe-text">
							Combien de tokens sont déjà en circulation sur le marché ?
							<br />
							<br />
							Si une grosse partie n’est pas encore libérée (vesting), cela peut
							affecter le prix plus tard.
						</p>
					</div>
				</article>

				<article className="article-text">
					<div className="div-text">
						<h2 className="h2-text">3- L’allocation des tokens</h2>
						<p className="paragraphe-text">
							Regarde à qui vont les tokens :
							<br />
							<br />
							Équipe du projet (devs, fondateurs)
							<br />
							<br />
							Investisseurs privés
							<br />
							<br />
							Communauté
							<br />
							<br />
							Récompenses (staking, farming)
							<br />
							<br />
							Si l’équipe possède 60% des tokens et qu’ils ne sont pas bloqués
							dans le temps (vesting), ils peuvent tout vendre = gros risque de
							chute du prix.
						</p>
					</div>
					<div className="div-text">
						<h2 className="h2-text">4- L’utilité du token (Use Case)</h2>
						<p className="paragraphe-text">
							Un bon token doit servir à quelque chose :
							<br />
							<br />
							Payer des frais (ex : BNB sur Binance)
							<br />
							<br />
							Staker pour valider des blocs (ex : ETH en Proof of Stake)
							<br />
							<br />
							Accéder à des services ou avantages (ex : tokens de gouvernance)
							<br />
							<br />
							Si le token n’a aucune utilité réelle, il n’a souvent aucune
							valeur durable.
						</p>
					</div>
				</article>

				<article className="article-text">
					<div className="div-text">
						<h2 className="h2-text">5- La politique monétaire</h2>
						<p className="paragraphe-text">
							Est-ce que le token est inflationniste (de nouveaux tokens sont
							créés sans arrêt) ?
							<br />
							<br />
							Ou déflationniste (des tokens sont détruits, comme avec les burn)
							?
							<br />
							<br />
							Une bonne politique monétaire bien pensée permet d’éviter la perte
							de valeur.
							<br />
							<br />
							Exemple rapide : comparaison
							<br />
							<br />
							Projet Offre totale Distribution Utilité du token Bitcoin 21M
							Mining, public Moyen d’échange, réserve de valeur Shiba Inu 1
							quadrillion Très large, peu claire Très spéculatif Ethereum Pas de
							limite fixe Staking, frais de réseau Infrastructure du Web3
							<br />
							<br />
							Tu vois pourquoi il est essentiel d’analyser la tokenomics avant
							d’investir ?
						</p>
					</div>

					<div className="div-image" />
				</article>

				<article className="article-text">
					<div className="div-image" />

					<div className="div-text">
						<h2 className="h2-text">
							En résumé : pourquoi tu dois t’intéresser à la tokenomics
						</h2>
						<p className="paragraphe-text">
							Pour ne pas tomber dans les projets “pyramides” ou purement
							marketing
							<br />
							<br />
							Pour savoir si un token a un vrai avenir ou s’il va s’écraser
							<br />
							<br />
							Pour comprendre les mécanismes économiques derrière la valeur
							d’une crypto
							<br />
							<br />
							Une phrase à retenir : Le marketing attire, mais la tokenomics
							révèle.
						</p>
					</div>
				</article>

				<div className="divBtnChapitre">
					<Link className="btnChapitre" to="/">
						Retour à l'accueil
					</Link>
				</div>
			</section>
		</main>
	);
}

export default Tokenomics;
