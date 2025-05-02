import "./AboutUs.css";
import NavPrincipal from "../Components/NavPrincipal";

function AboutUs() {
	return (
		<main className="bodyText">
			<NavPrincipal />
			<h1 className="h1-text">À propos de nous</h1>

			<section className="main-text">
				<div id="div-text">
					<h2 className="h2-text">Le concept</h2>
					<p className="paragraphe-text">
						Nous, c’est Martin, Adam et Elliot, trois étudiants en développement
						passionnés par la technologie, l’innovation… et la cryptomonnaie.{" "}
						<br />
						Depuis quelque temps déjà, on observe un vrai tournant dans le monde
						de la monnaie et de l’économie. Les systèmes financiers
						traditionnels montrent leurs limites, pendant que de nouvelles
						alternatives comme les cryptos, la blockchain, ou les NFTs prennent
						de plus en plus de place. Ce bouleversement, c’est pas juste une
						tendance : c’est un changement de paradigme.
						<br />
						<br />
						Mais soyons honnêtes : aujourd’hui, entrer dans ce monde peut vite
						ressembler à un parcours du combattant. Entre le vocabulaire
						complexe, les plateformes trop techniques, et les risques mal
						expliqués, beaucoup abandonnent avant même d’avoir commencé.
						<br />
						<br />
						C’est pour ça qu’on a créé ce projet : un site pensé pour
						démocratiser la cryptomonnaie et la rendre plus accessible à tous,
						même (et surtout) à ceux qui n’ont jamais touché une ligne de code
						ou lu un graphique de trading.
					</p>

					<h2 className="h2-text">Notre mission</h2>
					<p className="paragraphe-text">
						-Casualiser l’univers crypto
						<br />
						<br />
						-Simplifier l’investissement et le trading, sans pour autant
						négliger la pédagogie et la prudence
						<br />
						<br />
						-Et surtout, aider chacun à comprendre les enjeux de cette nouvelle
						économie qui se dessine sous nos yeux
						<br />
						<br />
						Que vous vouliez simplement comprendre ce qu’est le Bitcoin,
						investir sur le long terme, ou tester vos premières stratégies de
						trading, vous êtes au bon endroit.
						<br />
						Notre approche est claire : pas de jargon, pas de blabla inutile.
						Juste des explications, des outils, et des ressources pensées pour
						vous.
						<br />
						Parce que l’économie de demain se construit aujourd’hui — et on veut
						que vous puissiez y prendre part, à votre rythme.
					</p>
				</div>
			</section>
		</main>
	);
}

export default AboutUs;
