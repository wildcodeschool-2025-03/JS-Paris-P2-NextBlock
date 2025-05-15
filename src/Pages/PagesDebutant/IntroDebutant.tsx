import { Link } from "react-router";
import NavDebutant from "../../Components/NavDebutant";

function IntroDebutant() {
	return (
		<>
			<body className="bodyText">
				<NavDebutant />
				<h1 className="h1-text">Introductions aux cryptos</h1>

				<main className="main-text">
					<article className="article-text">
						<div className="div-text">
							<h2 className="h2-text">Qu’est-ce qu’une cryptomonnaie ?</h2>
							<p className="paragraphe-text">
								Une cryptomonnaie, c’est une monnaie 100 % numérique qui ne
								dépend d’aucune banque ou gouvernement. Elle est sécurisée par
								des algorithmes cryptographiques (d’où le nom !) et fonctionne
								grâce à une technologie appelée blockchain. Contrairement à
								l’euro ou au dollar : <br /> -Elle n’est pas imprimée. <br />
								-Elle n’est pas stockée dans une banque. <br />
								-Elle est échangée de personne à personne via Internet.
								<br /> <br />
								En résumé : Une cryptomonnaie, c’est une monnaie décentralisée,
								numérique, transparente et sécurisée, qui permet d’échanger de
								la valeur partout dans le monde, sans intermédiaire
							</p>
						</div>

						<div className="div-image" id="img1Intro" />
					</article>

					<article id="article-text">
						<div id="div-text">
							<h2 className="h2-text">À quoi servent les cryptomonnaies ?</h2>
							<p className="paragraphe-text">
								Les cryptomonnaies ne sont pas là juste pour « faire de l’argent
								». Elles ont plein d’usages concrets : <br />
								<br />
								1. Envoyer et recevoir de l'argent Tu peux envoyer de l'argent à
								quelqu’un dans le monde entier en quelques minutes, sans passer
								par une banque.
								<br />
								<br /> 2. Remplacer les banques Avec la finance décentralisée
								(ou DeFi), tu peux prêter, emprunter, épargner… sans banque,
								juste avec ton téléphone et une app crypto.
								<br />
								<br /> 3. Acheter des biens ou services De plus en plus de sites
								acceptent les cryptos comme moyen de paiement. Tu peux acheter
								un ordi, une pizza, ou même réserver un vol ✈️. <br />
								<br />
								4. Posséder des objets numériques (NFTs) Tu peux prouver que tu
								es le propriétaire d’une œuvre d’art numérique, d’un personnage
								de jeu, ou d’un billet de concert unique.
								<br />
								<br /> 5. Construire un nouveau web Certaines cryptos permettent
								de créer des projets ouverts, transparents et décentralisés, où
								les utilisateurs reprennent le pouvoir (Web3). <br />
								<br />
								Comment fonctionne une cryptomonnaie ? Une cryptomonnaie est une
								monnaie numérique : elle n’existe que sur Internet, tu ne peux
								pas la toucher, mais tu peux l’envoyer, la recevoir, ou
								l’utiliser pour payer. <br />
								<br />
								Ce qui la rend unique, c’est qu’elle ne passe par aucune banque.
								Il n’y a aucun intermédiaire : les échanges se font directement
								entre les utilisateurs. C’est ce qu’on appelle un système
								décentralisé.
								<br />
								<br />
								Chaque personne qui possède de la cryptomonnaie a un
								portefeuille numérique (ou wallet) avec une adresse unique, un
								peu comme un RIB ou une adresse email. Pour envoyer une
								cryptomonnaie à quelqu’un, tu n’as qu’à entrer son adresse,
								choisir le montant, et valider la transaction. <br />
								<br />
								Une fois validée, cette transaction est vérifiée par un réseau
								mondial d’ordinateurs. Ce sont eux qui s’assurent que l’argent
								n’est pas « copié » ou utilisé deux fois. Ce processus s'appelle
								la validation ou consensus. <br />
								<br />
								Et devine quoi ? Tout ça se fait en quelques minutes, sans que
								tu aies besoin d’un banquier, d’un papier, ou d’un compte
								traditionnel.
							</p>
						</div>
					</article>

					<article className="article-text">
						<div className="div-text">
							<h2 className="h2-text">Qu’est-ce que la blockchain ?</h2>
							<p className="paragraphe-text">
								La blockchain, c’est le coeur technologique des cryptomonnaies.
								Sans elle, elles ne pourraient pas fonctionner. <br />
								<br />
								Imagine un grand cahier public numérique dans lequel chaque
								transaction est écrite à l’encre indélébile. Ce cahier n’est pas
								stocké dans un seul ordinateur, mais partagé entre des milliers
								d’ordinateurs dans le monde entier. C’est ça, une blockchain.{" "}
								<br />
								<br />
								Comment ça marche ? Chaque fois que quelqu’un effectue une
								transaction (par exemple : Alice envoie 2 Bitcoins à Bob), cette
								opération est envoyée à tout le réseau. <br />
								<br />
								Plusieurs transactions sont regroupées dans un "bloc". Ce bloc
								est ensuite vérifié par les ordinateurs du réseau (appelés nœuds
								ou validateurs). Ils s’assurent que tout est correct.
								<br /> Une fois validé, ce bloc est ajouté à la chaîne des blocs
								précédents : c’est la blockchain (chaîne de blocs). Chaque
								nouveau bloc est lié au précédent par un code unique, ce qui
								rend la chaîne incassable et impossible à falsifier.
								<br />
								<br />
								Pourquoi c’est important ? <br />
								<br />- Sécurité : une fois une transaction enregistrée, elle ne
								peut plus être modifiée. <br />- Transparence : tout le monde
								peut voir ce qui se passe sur la blockchain.
								<br /> - Confiance sans tiers : pas besoin de banque ou
								d’autorité centrale pour garantir que les choses fonctionnent.
							</p>
						</div>

						<div className="div-image" id="img2Intro" />
					</article>

					<div className="divBtnChapitre">
						<Link className="btnChapitre" to="/Risques">
							Passez au chapitre suivant
						</Link>
					</div>
				</main>
			</body>
		</>
	);
}

export default IntroDebutant;
