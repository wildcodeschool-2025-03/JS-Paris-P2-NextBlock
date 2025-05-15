import { Link } from "react-router";
import NavDebutant from "../../Components/NavDebutant";

function Analyse() {
	return (
		<main className="bodyText">
			<NavDebutant />
			<section className="main-text">
				<h1 className="h1-text">L’analyse fondamentale et technique</h1>

				<div className="text-intro">
					<h2 className="h2-text-intro">
						Pour comprendre l'analyse technique cliquez sur le bouton ci-joint
						et accédez au cours complet.
					</h2>

					<p className="btnChapitre"> Bouton Analyse technique</p>

					<h2 className="h2-text-intro">
						L’analyse fondamentale est une méthode utilisée pour évaluer la
						valeur réelle d’un actif,
					</h2>

					<p className="paragraphe-text-intro">
						Les 5 piliers de l'analyse fondamental dans la crypto
					</p>
				</div>

				<article className="article-text">
					<div className="div-text">
						<h2 className="h2-text">1- Le problème que le projet résout</h2>
						<p className="paragraphe-text">
							Quel besoin réel le projet adresse-t-il ? <br /> <br />
							Est-ce un problème technique, financier, social ? <br />
							<br />
							Un bon projet résout un problème concret, pas juste une idée
							“cool”.
						</p>
					</div>

					<div className="div-text">
						<h2 className="h2-text">2- L’équipe et les partenaires</h2>
						<p className="paragraphe-text">
							Qui sont les fondateurs ? Ont-ils de l’expérience ? Un historique
							vérifiable ? <br />
							<br />Y a-t-il des investisseurs connus ou partenariats solides ?{" "}
							<br />
							<br />
							Astuce : cherche les profils LinkedIn, interviews, ou entreprises
							partenaires réelles.
						</p>
					</div>
				</article>

				<article className="article-text">
					<div className="div-text">
						<h2 className="h2-text">3- Le whitepaper</h2>
						<p className="paragraphe-text">
							Le whitepaper est un document technique qui présente :<br />
							<br /> -le concept du projet,
							<br />
							<br /> -sa technologie,
							<br />
							<br /> -sa roadmap,
							<br />
							<br /> -sa tokenomics.(voir page 3)
							<br />
							<br /> Lis-le attentivement. Un whitepaper flou, trop marketing ou
							bourré de jargon inutile = drapeau rouge.
						</p>
					</div>

					<div className="div-text">
						<h2 className="h2-text">4. La communauté et l’activité</h2>
						<p className="paragraphe-text">
							Le projet est-il actif sur GitHub (si open source) ? <br />
							<br />
							Est-ce qu’il y a de la communication régulière (Twitter, Discord,
							Medium) ? <br />
							<br />
							Une communauté vivante, mais pas toxique, est souvent bon signe.
						</p>
					</div>
				</article>

				<article className="article-text">
					<div className="div-text">
						<h2 className="h2-text">5- La tokenomics (vue plus haut)</h2>
						<p className="paragraphe-text">
							On n’investit pas sans comprendre :<br />
							<br /> -L’offre totale <br />
							<br />
							-Les allocations
							<br />
							<br /> -L’utilité réelle <br />
							<br />
							-La politique de distribution <br />
							<br />
							Un projet peut être top sur le papier… mais mal géré
							économiquement = risque énorme.
						</p>
					</div>
					<div className="div-image" />
				</article>

				<article className="article-text">
					<div className="div-image" />

					<div className="div-text">
						<h2 className="h2-text">
							En résumé: pourquoi faire une analyse fondamentale ?
						</h2>
						<p className="paragraphe-text">
							Pour éviter les scams ou projets sans avenir
							<br />
							<br /> Pour investir intelligemment sur du long terme <br />
							<br />
							Pour comprendre la valeur intrinsèque d’un projet
						</p>
					</div>
				</article>

				<article id="article-text">
					<div id="div-text">
						<h2 className="h2-text">BONUS : Ce qu’elle n’est pas</h2>
						<p className="paragraphe-text">
							L’analyse fondamentale ne te dit pas quand acheter, mais quoi
							acheter. Elle est complémentaire de l’analyse technique (qui se
							base sur les graphiques et les tendances de prix). Et la crypto
							dans tout ça ? L’analyse fondamentale classique vient du monde de
							la bourse. Mais en crypto, elle est encore plus importante, car :
							-les projets sont jeunes, -la régulation est faible, -et les
							arnaques existent. Un investisseur sérieux prend le temps de
							creuser un projet en profondeur, pas seulement de suivre un pump
							sur Twitter.
						</p>
					</div>
					<div id="div-image" />
				</article>

				<div className="divBtnChapitre">
					<Link className="btnChapitre" to="/Tokenomics">
						Passez au chapitre suivant
					</Link>
				</div>
			</section>
		</main>
	);
}

export default Analyse;
