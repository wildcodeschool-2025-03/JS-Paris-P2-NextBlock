import "./CryptosMonnaies.css";
import { useEffect, useState } from "react";
import CryptoCard from "../Components/CryptoCard";
import Nav from "../Components/Nav";
import PictoFiltre from "../img/Pictos/Picto-Filtre-Full.svg";
import PictoSearch from "../img/Pictos/Picto-Search-Full.svg";

function CryptoMonnaies() {
	const [cryptos, setCryptos] = useState([]);

	useEffect(() => {
		async function getCrypto() {
			const response = await fetch("http://localhost:3000/cryptos");
			const data = await response.json();
			setCryptos(data);
		}

		getCrypto();
	}, []);

	return (
		<>
			<main className="bodyText">
				<Nav />
				<h1 className="h1-text">Cryptomonnaie</h1>

				<article className="Card-Filtre-SearchBar">
					<div className="Filtre">
						<img className="PictoFiltre" src={PictoFiltre} alt="Picto Filtre" />
					</div>

					<div className="divSearchBar">
						<input className="SearchBar" type="text" />
						<img className="PictoSearch" src={PictoSearch} alt="Picto Search" />
					</div>
				</article>

				<section className="MAIN-CryptoCard">

					{cryptos.map((crypto) => (
						<CryptoCard key={crypto.id} crypto={crypto} />
					))}

				</section>
			</main>
		</>
	);
}

export default CryptoMonnaies;
