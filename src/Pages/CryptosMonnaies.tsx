import "./CryptosMonnaies.css";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import CryptoCard from "../Components/CryptoCard";
import NavPrincipal from "../Components/NavPrincipal";
import SearchBar from "../Components/SearchBar";
import data from "../data.json";
import PictoFiltre from "../img/Pictos/Picto-Filtre-Full.svg";
import PictoSearch from "../img/Pictos/Picto-Search-Full.svg";

function CryptoMonnaies() {
	const [search, setSearch] = useState("");

	const [cryptos, setCryptos] = useState([]);

	useEffect(() => {
		async function getCrypto() {
			/*const response = await fetch("http://localhost:3000/cryptos");
			const data = await response.json();
			setCryptos(data);*/
			setCryptos(data.cryptos);
		}

		getCrypto();
	}, []);

	const searchedCryptos = cryptos.filter((crypto) =>
		crypto.name.toLowerCase().includes(search.toLowerCase()),
	);

	return (
		cryptos && (
			<main className="bodyText">
				<NavPrincipal />
				<h1 className="h1-text">Cryptomonnaie</h1>

				<article className="Card-Filtre-SearchBar">
					<div className="Filtre">
						<img className="PictoFiltre" src={PictoFiltre} alt="Picto Filtre" />
					</div>

					<div className="divSearchBar">
						<SearchBar search={search} setSearch={setSearch} />

						<img className="PictoSearch" src={PictoSearch} alt="Picto Search" />
					</div>
				</article>

				<section className="MAIN-CryptoCard">
					{searchedCryptos.map((crypto) => (
						<Link
							className="linkCryptoMonnaie"
							key={crypto.id}
							to={`/ProfilCrypto/${crypto.id}`}
						>
							<CryptoCard crypto={crypto} />
						</Link>
					))}
				</section>
			</main>
		)
	);
}

export default CryptoMonnaies;
