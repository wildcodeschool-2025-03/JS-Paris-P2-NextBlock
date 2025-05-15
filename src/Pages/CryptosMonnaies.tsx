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

	const [showFilters, setShowFilters] = useState(false);
	const [selectedMarketCap, setSelectedMarketCap] = useState("");
	const [selectedChange, setSelectedChange] = useState("");
	const [selectedPolicy, setSelectedPolicy] = useState("");

	const toggleFilters = () => {
		setShowFilters((prev) => !prev);
	};

	useEffect(() => {
		async function getCrypto() {
			/*const response = await fetch("http://localhost:3000/cryptos");
			const data = await response.json();
			setCryptos(data);*/
			setCryptos(data.cryptos);
		}

		getCrypto();
	}, []);

	const searchedCryptos = cryptos
		.filter((crypto) =>
			crypto.name.toLowerCase().includes(search.toLowerCase()),
		)
		.filter((crypto) => {
			if (selectedMarketCap === "small")
				return (
					crypto.market_cap?.includes("B") &&
					Number.parseFloat(crypto.market_cap) < 1
				);
			if (selectedChange === "up")
				return crypto.percentage_change?.includes("+");
			if (selectedMarketCap === "large")
				return crypto.market_cap && Number.parseFloat(crypto.market_cap) >= 10;
			return true;
		})
		.filter((crypto) => {
			if (selectedChange === "up")
				return crypto.percentage_change?.includes("+");
			if (selectedChange === "down")
				return crypto.percentage_change?.includes("-");
			return true;
		})
		.filter((crypto) => {
			if (!selectedPolicy) return true;
			return crypto.monetary_policy
				.toLowerCase()
				.includes(selectedPolicy.toLowerCase());
		});

	return (
		cryptos && (
			<main className="bodyText">
				<NavPrincipal />
				<h1 className="h1-text">Cryptomonnaie</h1>

				<article className="Card-Filtre-SearchBar">
					<div className="Filtre">
						<img
							onKeyUp={toggleFilters}
							className="PictoFiltre"
							src={PictoFiltre}
							alt="Picto Filtre"
							onClick={toggleFilters}
						/>
					</div>

					<div className="divSearchBar">
						<SearchBar search={search} setSearch={setSearch} />
						<img className="PictoSearch" src={PictoSearch} alt="Picto Search" />
					</div>
				</article>

				{showFilters && (
					<div className="FiltersContainer">
						<select
							value={selectedMarketCap}
							onChange={(e) => setSelectedMarketCap(e.target.value)}
						>
							<option value="">Capitalisation</option>
							<option value="small">Petite</option>
							<option value="medium">Moyenne</option>
							<option value="large">Grande</option>
						</select>

						<select
							value={selectedChange}
							onChange={(e) => setSelectedChange(e.target.value)}
						>
							<option value="">Variation</option>
							<option value="up">En hausse</option>
							<option value="down">En baisse</option>
						</select>

						<select
							value={selectedPolicy}
							onChange={(e) => setSelectedPolicy(e.target.value)}
						>
							<option value="">Politique monétaire</option>
							<option value="deflationary">Déflation</option>
							<option value="inflationary">Inflation</option>
							<option value="fixed max supply">Offre fixe</option>
						</select>
					</div>
				)}

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
