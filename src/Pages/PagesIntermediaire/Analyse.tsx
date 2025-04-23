import "./Analyse.css";
import NavIntermediaire from "../../Components/NavIntermediaire";

function Analyse() {
	return (
		<>
			<NavIntermediaire />
			<h1>L’analyse fondamentale et technique</h1>

			<div>
				<h2>
					Pour comprendre l'analyse technique cliquez sur le bouton ci-joint et
					accédez au cours complet.
				</h2>
				<button type="button">analyse technique</button>
				<h2>
					L’analyse fondamentale est une méthode utilisée pour évaluer la valeur
					réelle d’un actif,
				</h2>

				<h3>Les 5 piliers de l'analyse fondamental dans la crypto</h3>
			</div>
			<article className="article-text">
				<div className="">
					<h2 className="h2-text">1- Le problème que le projet résout</h2>
					<p className="">
						Quel besoin réel le projet adresse-t-il ? Est-ce un problème
						technique, financier, social ? Un bon projet résout un problème
						concret, pas juste une idée “cool”.
					</p>
				</div>
			</article>
			<article className="article-text">
				<div className="">
					<h2 className="h2-text">2- L’équipe et les partenaires</h2>
					<p className="">
						Qui sont les fondateurs ? Ont-ils de l’expérience ? Un historique
						vérifiable ? Y a-t-il des investisseurs connus ou partenariats
						solides ? Astuce : cherche les profils LinkedIn, interviews, ou
						entreprises partenaires réelles.
					</p>
				</div>
			</article>
			<article className="article-text">
				<div className="">
					<h2 className="h2-text">3- Le whitepaper</h2>
					<p className="">
						Le whitepaper est un document technique qui présente : -le concept
						du projet, -sa technologie, -sa roadmap, -sa tokenomics.(voir page
						3) Lis-le attentivement. Un whitepaper flou, trop marketing ou
						bourré de jargon inutile = drapeau rouge.
					</p>
				</div>
			</article>
			<article className="article-text">
				<div className="">
					<h2 className="h2-text">4. La communauté et l’activité</h2>
					<p className="">
						Le projet est-il actif sur GitHub (si open source) ? Est-ce qu’il y
						a de la communication régulière (Twitter, Discord, Medium) ? Une
						communauté vivante, mais pas toxique, est souvent bon signe.
					</p>
				</div>
			</article>
			<article className="article-text">
				<div className="">
					<h2 className="h2-text">5- La tokenomics (vue plus haut)</h2>
					<p className="">
						On n’investit pas sans comprendre : -L’offre totale -Les allocations
						-L’utilité réelle -La politique de distribution Un projet peut être
						top sur le papier… mais mal géré économiquement = risque énorme.
					</p>
				</div>
				<div className="div-image" />
			</article>
			<article className="article-text">
				<div className="">
					<h2 className="h2-text">
						En résumé: pourquoi faire une analyse fondamentale ?
					</h2>
					<p className="">
						Pour éviter les scams ou projets sans avenir Pour investir
						intelligemment sur du long terme Pour comprendre la valeur
						intrinsèque d’un projet
					</p>
				</div>
				<div className="div-image" />
			</article>
			<article className="article-text">
				<div className="">
					<h2 className="h2-text">BONUS : Ce qu’elle n’est pas</h2>
					<p className="">
						L’analyse fondamentale ne te dit pas quand acheter, mais quoi
						acheter. Elle est complémentaire de l’analyse technique (qui se base
						sur les graphiques et les tendances de prix). Et la crypto dans tout
						ça ? L’analyse fondamentale classique vient du monde de la bourse.
						Mais en crypto, elle est encore plus importante, car : -les projets
						sont jeunes, -la régulation est faible, -et les arnaques existent.
						Un investisseur sérieux prend le temps de creuser un projet en
						profondeur, pas seulement de suivre un pump sur Twitter.
					</p>
				</div>
				<div className="div-image" />
			</article>
		</>
	);
}

export default Analyse;
