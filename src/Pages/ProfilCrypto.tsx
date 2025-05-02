import "./ProfilCrypto.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";
import NavPrincipal from "../Components/NavPrincipal";
import PictoFullScreen from "../img/Pictos/Picto-FullScreen-Full.svg";

function ProfilCrypto() {
	const { id } = useParams();

	const [crypto, setCrypto] = useState();

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
				<h1>Profil-Crypto</h1>
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
								<p className="textProfilCrypto">{crypto.market_cap}</p>

								<div className="divExclamation">
									<p className="exclamation">!</p>
								</div>
							</div>

							<div className="DivTextProfilCrypto">
								<p className="textProfilCrypto">{crypto.total_supply}</p>

								<div className="divExclamation">
									<p className="exclamation">!</p>
								</div>
							</div>

							<div className="DivTextProfilCrypto">
								<p className="textProfilCrypto">{crypto.circulating_supply}</p>

								<div className="divExclamation">
									<p className="exclamation">!</p>
								</div>
							</div>

							<div className="DivTextProfilCrypto">
								<p className="textProfilCrypto">{crypto.token_allocation}</p>

								<div className="divExclamation">
									<p className="exclamation">!</p>
								</div>
							</div>

							<div className="DivTextProfilCrypto">
								<p className="textProfilCrypto">{crypto.monetary_policy}</p>

								<div className="divExclamation">
									<p className="exclamation">!</p>
								</div>
							</div>

							<div className="DivTextProfilCrypto">
								<p className="textProfilCrypto">{crypto.token_utility}</p>

								<div className="divExclamation">
									<p className="exclamation">!</p>
								</div>
							</div>

							<div id="DivSiteweb">
								<p className="textProfilCrypto">Site web:</p>

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

					<article className="divGraphique">
						<h1>div graphique</h1>

						<img className="Graphique" src="" alt="" />

						<div className="DivBtnGraph">
							<Link className="btnTradingView" to={crypto.tradingview_link}>
								Open trading.view
							</Link>
							<img
								className="PictoFullScreen"
								src={PictoFullScreen}
								alt="PictoFullScreen"
							/>
						</div>
					</article>
				</section>
			</main>
		)
	);
}

export default ProfilCrypto;
