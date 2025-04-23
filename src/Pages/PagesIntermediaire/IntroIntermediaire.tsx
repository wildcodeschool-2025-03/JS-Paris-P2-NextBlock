import "./IntroIntermediaire.css";
import NavIntermediaire from "../../Components/NavIntermediaire";

function IntroIntermediaire() {
	return (
		<>
			<NavIntermediaire />
			<h1>Introduction au monde de l’investissement et du trading</h1>

			<article className="article-text">
				<div className="div-text">
					<h2 className="h2-text">Qu’est-ce que l’investissement ?</h2>
					<p className="paragraphe-text">
						L’investissement, c’est placer de l’argent dans un actif (quelque
						chose qui a de la valeur) dans l’objectif qu’il prenne de la valeur
						avec le temps. L’idée est simple : tu achètes aujourd’hui à un
						certain prix, et tu espères que dans le futur, cet actif vaudra
						plus, pour le revendre et faire un profit. Les actifs les plus
						connus : -Actions (parts d’entreprises cotées en bourse) -Immobilier
						-Obligations (emprunts d’États ou d’entreprises) -ETF (fonds qui
						regroupent plusieurs actifs pour diversifier les risques) -Matières
						premières (or, pétrole, etc.) L’investissement est souvent de long
						terme, basé sur une analyse des fondamentaux (santé de l’entreprise,
						contexte économique, etc.).
					</p>
				</div>
				<div className="div-image" />
			</article>

			<article className="article-text">
				<div className="div-text">
					<h2 className="h2-text">Et le trading ?</h2>
					<p className="paragraphe-text">
						Le trading, c’est une approche plus court terme. Le but est
						d’exploiter les mouvements de prix à court terme pour acheter et
						vendre rapidement un actif et générer des gains réguliers. Les
						traders utilisent des outils spécifiques : -Analyse technique : lire
						les graphiques de prix pour anticiper les mouvements futurs.
						-Indicateurs comme le RSI, les moyennes mobiles, le MACD, etc.
						-Gestion du risque : ne jamais investir plus qu’on est prêt à
						perdre, et utiliser des stop-loss (seuil automatique de vente en cas
						de perte). Il existe plusieurs types de traders : -Scalper : très
						court terme (secondes à minutes) -Day trader : ouvertures et
						fermetures de positions dans la journée -Swing trader : positions
						tenues sur plusieurs jours ou semaines
					</p>
				</div>
				<div className="div-image" />
			</article>

			<article className="article-text">
				<div className="div-text">
					<h2 className="h2-text">Pourquoi investir ou trader ?</h2>
					<p className="paragraphe-text">
						Faire travailler son argent (plutôt que de le laisser dormir sur un
						compte) Profiter de la croissance de certains secteurs Avoir un
						complément de revenu ou préparer l’avenir Et les cryptomonnaies dans
						tout ça ? Les cryptomonnaies sont devenues un nouvel actif financier
						à part entière. Contrairement aux marchés traditionnels, elles sont
						décentralisées, ouvertes 24/7, et encore relativement jeunes. Deux
						approches principales : Investir dans la crypto Tu crois dans le
						projet derrière une crypto (ex : Bitcoin comme réserve de valeur,
						Ethereum pour les smart contracts, etc.), et tu l’achètes en pensant
						que sa valeur augmentera à long terme. C’est une approche de
						conviction. Trader la crypto Tu profites des fortes variations de
						prix pour acheter bas et vendre haut, même plusieurs fois par jour.
						Les cryptos sont volatiles, ce qui veut dire qu’elles montent et
						descendent beaucoup et rapidement → idéal pour le trading… mais plus
						risqué. Des outils comme Binance, Kraken ou TradingView permettent
						d’analyser et de passer des ordres facilement.
					</p>
				</div>
				<div className="div-image" />
			</article>

			<article className="article-text">
				<div className="div-text">
					<h2 className="h2-text">
						Est-ce que investir ou trader les crypto c'est du casino ou bien
						tout le monde devrais si intéressé ?
					</h2>
					<p className="paragraphe-text">
						Très bonne question, et c’est une remarque que beaucoup de gens se
						posent : “Est-ce que la crypto c’est du casino, ou est-ce que ça
						vaut vraiment le coup de s’y intéresser sérieusement ?” La crypto,
						un casino ? Oui… si on y va sans stratégie. Si tu investis sans
						comprendre dans quoi tu mets ton argent, juste parce que "ça monte",
						alors oui, c’est du casino. Si tu suis aveuglément des influenceurs
						ou que tu mises tout sur des memecoins en espérant devenir riche
						vite : tu joues à la loterie. Si tu ne gères pas ton risque ou que
						tu mets plus que ce que tu es prêt à perdre : tu es en terrain
						dangereux. Mais bien utilisée, la crypto peut être un outil
						d’investissement puissant Il y a des projets technologiques solides
						derrière certaines cryptos (comme Ethereum, Solana, Chainlink,
						etc.). L’écosystème Web3 est en pleine croissance (NFT, DeFi,
						tokenisation d’actifs…). Des entreprises et même des États
						commencent à s’y intéresser sérieusement. Donc… tout le monde
						devrait-il s’y intéresser ? Oui, mais pas n’importe comment. Tu n’as
						pas besoin de devenir trader pro ou d’y investir tout ton salaire,
						mais comprendre les bases est déjà un avantage énorme : pour ne pas
						se faire avoir, pour comprendre ce nouveau monde financier qui
						arrive, et pourquoi pas, pour profiter des opportunités.
					</p>
				</div>
				<div className="div-image" />
			</article>

			<article className="article-text">
				<div className="div-text">
					<h2 className="h2-text">En résumé :</h2>
					<p className="paragraphe-text">
						La crypto, ce n’est pas un casino si tu y entres comme un
						investisseur éclairé, pas comme un joueur. Tu peux y entrer petit à
						petit, avec des connaissances, une gestion du risque, et une
						stratégie claire. C’est là que ça devient intelligent… et pas du
						hasar
					</p>
				</div>
				<div className="div-image" />
			</article>
		</>
	);
}

export default IntroIntermediaire;
