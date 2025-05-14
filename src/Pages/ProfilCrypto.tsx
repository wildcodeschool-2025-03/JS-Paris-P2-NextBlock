import "./ProfilCrypto.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";
import GraphiqueCrypto from "../Components/GraphiqueCrypto";
import NavPrincipal from "../Components/NavPrincipal";
import PictoFullScreen from "../img/Pictos/Picto-FullScreen-Full.svg";

function ProfilCrypto() {
	const { id } = useParams();
	const [crypto, setCrypto] = useState();
	const [isFullScreen, setIsFullScreen] = useState(false);

	const toggleFullScreen = () => {
		setIsFullScreen(!isFullScreen);
	};

	useEffect(() => {
		async function getCrypto() {
			const response = await fetch(`http://localhost:3000/cryptos/${id}`);
			const data = await response.json();
			setCrypto(data);
		}

		getCrypto();
	}, [id]);

	return (
		crypto && (
			<main className="bodyProfil">
				<NavPrincipal />
				<section className="sectionProfilCrypto">
					<article className="FullDataProfilCrypto">
						<div className="DivLogoNomProfilCrypto">
							<div className="LogoNomProfilCrypto">
								<img
									className="LogoProfilCrypto"
									src={crypto.logo}
									alt={crypto.name}
								/>
								<h2 className="NomProfilCrypto">{crypto.name}</h2>
								<h2 className="AbrProfilCrypto">{crypto.symbol}</h2>
							</div>

							<h2 className="ValeurProfilCrypto">{crypto.price}</h2>
						</div>

						<article className="DataProfilCrypto">
							<div className="DivTextProfilCrypto">
								<div className="divSpanProfil">
									<p className="spanTextDataProfil">
										Capitalisation boursiére:
									</p>

									<div className="divExclamation">
										<p className="exclamation">!</p>
										<div className="tooltip">
											Valeur totale de la cryptomonnaie en circulation
											multipliée par son prix.
										</div>
									</div>
								</div>

								<p className="textDataProfilCrypto">{crypto.market_cap}</p>
							</div>

							<div className="DivTextProfilCrypto">
								<div className="divSpanProfil">
									<p className="spanTextDataProfil">Offre total:</p>

									<div className="divExclamation">
										<p className="exclamation">!</p>
										<div className="tooltip">
											Quantité maximale de tokens qui existeront un jour.
										</div>
									</div>
								</div>

								<p className="textDataProfilCrypto">{crypto.total_supply}</p>
							</div>

							<div className="DivTextProfilCrypto">
								<div className="divSpanProfil">
									<p className="spanTextDataProfil">Offre en circulation:</p>

									<div className="divExclamation">
										<p className="exclamation">!</p>
										<div className="tooltip">
											Nombre de tokens actuellement disponibles sur le marché.
										</div>
									</div>
								</div>

								<p className="textDataProfilCrypto">
									{crypto.circulating_supply}
								</p>
							</div>

							<div className="DivTextProfilCrypto">
								<div className="divSpanProfil">
									<p className="spanTextDataProfil">Allocation des tokens:</p>

									<div className="divExclamation">
										<p className="exclamation">!</p>
										<div className="tooltip">
											Répartition des tokens entre les fondateurs,
											investisseurs, etc.
										</div>
									</div>
								</div>

								<p className="textDataProfilCrypto">
									{crypto.token_allocation}
								</p>
							</div>

							<div className="DivTextProfilCryptoCollumn">
								<div className="divSpanProfil">
									<p className="spanTextDataProfil">Politiques monétaire:</p>

									<div className="divExclamation">
										<p className="exclamation">!</p>
										<div className="tooltip">
											Règles de création et destruction des tokens dans le
											temps.
										</div>
									</div>
								</div>

								<p className="textDataProfilCrypto">{crypto.monetary_policy}</p>
							</div>

							<div className="DivTextProfilCryptoCollumn">
								<div className="divSpanProfil">
									<p className="spanTextDataProfil">Utilité des tokens:</p>

									<div className="divExclamation">
										<p className="exclamation">!</p>
										<div className="tooltip">
											À quoi servent les tokens (paiement, gouvernance, etc).
										</div>
									</div>
								</div>

								<p className="textDataProfilCrypto">{crypto.token_utility}</p>
							</div>

							<div id="DivSiteweb">
								<p id="textDataProfilCrypto">Site web:</p>

								<div className="divBtnProfil">
									<Link to={crypto.website} className="btnSiteProfil">
										Website
									</Link>
									<Link to={crypto.whitepaper} className="btnSiteProfil">
										Whitepaper
									</Link>
								</div>
							</div>
						</article>
					</article>

					<article
						className={`articleGraphique ${isFullScreen ? "fullscreenGraphique" : ""}`}
					>
						<GraphiqueCrypto id={id} />

						<div className="DivBtnGraph">
							<Link className="btnTradingView" to={crypto.tradingview_link}>
								Open trading.view
							</Link>
							<img
								className="PictoFullScreen"
								src={PictoFullScreen}
								alt="Plein écran"
								onClick={toggleFullScreen}
								onKeyUp={toggleFullScreen}
								style={{ cursor: "pointer" }}
							/>
						</div>
					</article>
				</section>

				<article id="div-text" className="section-à-propos-profil">
					<h2 className="h2-text">À propos</h2>
					<p className="paragraphe-text">
						Qu'est-ce que le Bitcoin ? (BTC)
						<br />
						<br />
						Le Bitcoin est la première monnaie en ligne basée sur la technologie
						peer-to-peer qui a réussi à s'imposer ; aucune banque centrale ou
						autorité n'est impliquée dans les transactions ou la production de
						monnaie Bitcoin. Il a été créé par un individu/groupe anonyme connu
						sous le pseudonyme de Satoshi Nakamoto. <br />
						Le code source est libre d'accès en tant que projet open source,
						n'importe qui peut le consulter et faire partie du processus de
						développement. Le Bitcoin est en train de changer la façon dont nous
						considérons l'argent aujourd'hui même. L'idée de départ était de
						créer un moyen d'échange, indépendant de toute autorité centrale,
						qui puisse être envoyé électroniquement de manière sécurisée,
						vérifiable et immuable. <br />
						Il s'agit d'une monnaie en ligne peer-to-peer décentralisée qui
						facilite les paiements mobiles, offre des frais de transaction très
						faibles, protège votre identité et fonctionne partout et tout le
						temps, sans impliquer d'autorité centrale ou de banque. <br />
						Le Bitcoin a été conçu pour que seuls 21 millions de BTC soient
						créés, ce qui en fait une monnaie déflationniste. Le Bitcoin utilise
						l'algorithme de hachage SHA-256 et le délai moyen de confirmation
						des transactions est de 10 minutes. Aujourd'hui, les mineurs minent
						le Bitcoin à l'aide d'une puce ASIC dédiée uniquement au minage du
						Bitcoin, et le taux de hachage a atteint plusieurs pétahash. <br />
						Première monnaie cryptographique en ligne couronnée de succès, le
						Bitcoin a inspiré d'autres monnaies alternatives telles que le
						Litecoin, l'Ethereum, et bien d'autres. <br />
						<br /> <br />
						Où pouvez-vous acheter Bitcoin ?
						<br /> <br />
						Les jetons BTC peuvent être échangés sur des plateformes d’échange
						centralisées. L'échange le plus populaire pour acheter et échanger
						Bitcoin est Binance, où la paire la plus active BTC/USDT a un volume
						d'échange de 1 711 152 762 $US au cours des dernières 24 heures.
						D'autres options populaires incluent WEEX et Bybit.
						<br /> <br />
						Quel est le volume de trading quotidien de Bitcoin (BTC) ?
						<br /> <br />
						Le volume d'échange de Bitcoin (BTC) est de 25 664 284 554 $US au
						cours des dernières 24 heures, ce qui représente une différence
						de -8,10 % baisse par rapport à hier et signale une activité chute
						récente sur le marché. Consultez la liste des cryptomonnaies à fort
						volume sur CoinGecko.
						<br /> <br />
						Quels est le cours le plus élevé et le plus bas pour Bitcoin (BTC) ?
						<br /> <br />
						Bitcoin (BTC) a atteint un niveau le plus élevé de 108 786 $US et le
						niveau le plus bas de 67,81 $US. Il se négocie
						actuellement 23,04% en dessous de ce sommet et 123 368,79% au-dessus
						de son cours le plus bas.
						<br /> <br />
						Quelle est la capitalisation boursière de Bitcoin (BTC) ?
						<br /> <br />
						La capitalisation boursière de Bitcoin (BTC)
						est 1 661 317 354 467 $US et est classée 1 sur CoinGecko
						aujourd'hui. La capitalisation boursière est mesurée en multipliant
						le cours du jeton par l'offre en circulation de jetons BTC (20
						million jetons sont échangeables sur le marché aujourd'hui).
						<br /> <br />
						Quelle est la valorisation entièrement diluée de Bitcoin (BTC) ?
						<br /> <br />
						La valorisation entièrement diluée (FDV) de Bitcoin (BTC)
						est 1 661 317 354 467 $US. Il s'agit d'une représentation
						statistique de la capitalisation boursière maximale, en supposant
						que le nombre maximal de jetons 21 million BTC est en circulation
						aujourd'hui. Selon la façon dont le calendrier d'émission des jetons
						BTC est conçu, plusieurs années peuvent s'écouler avant que la FDV
						ne soit réalisée.
						<br /> <br />
						Comment la performance du cours de Bitcoin est-elle par rapport à
						ses pairs ?
						<br /> <br />
						Avec un changement hausse de 8,90 % au cours des 7 derniers jours,
						Bitcoin (BTC) représente surperformance du marché global de crypto
						monnaies qui a enregistré bas -0,30 %.
					</p>
				</article>
			</main>
		)
	);
}

export default ProfilCrypto;
