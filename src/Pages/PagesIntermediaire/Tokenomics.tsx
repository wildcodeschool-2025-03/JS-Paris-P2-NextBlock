import "./Tokenomics.css";
import NavIntermediaire from "../../Components/NavIntermediaire";

function Tokenomics() {
	return (
		<>
			<NavIntermediaire />
			<h1>C’est quoi la Tokenomics ?</h1>
			<article className="">
				<div>
					<h2 className="h2-text">La tokenomics</h2>
					<p className="">
						La tokenomics (ou token economics) désigne l’ensemble des règles
						économiques qui régissent un token ou une crypto-monnaie. Elle
						englobe : -Combien de tokens existent au total (offre maximale)
						-Comment ils sont distribués (ex : à l’équipe, aux investisseurs, à
						la communauté…) -Leur utilité dans l’écosystème (paiement,
						gouvernance, récompense…) -Les mécanismes de contrôle comme le burn
						(destruction de tokens) ou staking (blocage en échange de
						récompenses) En bref, la tokenomics permet de comprendre comment un
						projet gère sa monnaie, et donc de savoir si son modèle est durable,
						juste et intéressant pour investir
					</p>
					<div className="div-image"></div>
				</div>
			</article>

			<article>
				<h2 className="h2-text">Les piliers fondamentaux de la tokenomics</h2>
				<div>
					<h2 className="h2-text">1- L’offre totale (Total Supply)</h2>
					<p>
						C’est le nombre maximum de tokens qui seront créés. Exemple :
						Bitcoin a une offre limitée à 21 millions. Ça crée de la rareté,
						donc potentiellement de la valeur.
					</p>
				</div>
				<div>
					<h2 className="h2-text">
						2- L’offre en circulation (Circulating Supply)
					</h2>
					<p>
						Combien de tokens sont déjà en circulation sur le marché ? Si une
						grosse partie n’est pas encore libérée (vesting), cela peut affecter
						le prix plus tard.
					</p>
				</div>
				<div>
					<h2 className="h2-text">3- L’allocation des tokens</h2>
					<p>
						Regarde à qui vont les tokens : Équipe du projet (devs, fondateurs)
						Investisseurs privés Communauté Récompenses (staking, farming) Si
						l’équipe possède 60% des tokens et qu’ils ne sont pas bloqués dans
						le temps (vesting), ils peuvent tout vendre = gros risque de chute
						du prix.
					</p>
				</div>
				<div>
					<h2 className="h2-text">4- L’utilité du token (Use Case)</h2>
					<p>
						Un bon token doit servir à quelque chose : Payer des frais (ex : BNB
						sur Binance) Staker pour valider des blocs (ex : ETH en Proof of
						Stake) Accéder à des services ou avantages (ex : tokens de
						gouvernance) Si le token n’a aucune utilité réelle, il n’a souvent
						aucune valeur durable.
					</p>
				</div>
			</article>
			<article className="">
				<div>
					<h2 className="h2-text">5- La politique monétaire</h2>
					<p className="">
						Est-ce que le token est inflationniste (de nouveaux tokens sont
						créés sans arrêt) ? Ou déflationniste (des tokens sont détruits,
						comme avec les burn) ? Une bonne politique monétaire bien pensée
						permet d’éviter la perte de valeur. Exemple rapide : comparaison
						Projet Offre totale Distribution Utilité du token Bitcoin 21M
						Mining, public Moyen d’échange, réserve de valeur Shiba Inu 1
						quadrillion Très large, peu claire Très spéculatif Ethereum Pas de
						limite fixe Staking, frais de réseau Infrastructure du Web3 Tu vois
						pourquoi il est essentiel d’analyser la tokenomics avant d’investir
						?
					</p>
					<div className="div-image"></div>
				</div>
			</article>

			<article className="">
				<div>
					<h2 className="h2-text">
						En résumé : pourquoi tu dois t’intéresser à la tokenomics
					</h2>
					<p className="">
						Pour ne pas tomber dans les projets “pyramides” ou purement
						marketing Pour savoir si un token a un vrai avenir ou s’il va
						s’écraser Pour comprendre les mécanismes économiques derrière la
						valeur d’une crypto Une phrase à retenir : Le marketing attire, mais
						la tokenomics révèle.
					</p>
					<div className="div-image"></div>
				</div>
			</article>
		</>
	);
}

export default Tokenomics;
