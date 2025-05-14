import "./CryptoCard.css";

interface CryptoCardProps {
	crypto: {
		id: string;
		logo: string;
		name: string;
		symbol: string;
		price: string;
		percentage_change: string;
	};
}

function CryptoCard({ crypto }: CryptoCardProps) {
	return (
		<article className="cryptoCard">
			<div className="cryptoCard-left">
				<div className="divIdLogo">
					<div className="divCardID">
						<p className="cryptoCard-ID">{crypto.id}</p>
					</div>

					<img
						className="cryptoCard-LOGO"
						src={crypto.logo}
						alt={crypto.name}
					/>
				</div>

				<div className="divCardNAME">
					<h4 className="cryptoCard-NAME">{crypto.name}</h4>
					<h5 className="cryptoCard-ABR">{crypto.symbol}</h5>
				</div>
			</div>

			<div className="divCardVALUE">
				<p className="cryptoCard-VALEUR">{crypto.price}</p>
				<p
					className={
						crypto.percentage_change.startsWith("+")
							? "cryptoCard-PRC-green"
							: "cryptoCard-PRC-red"
					}
				>
					{crypto.percentage_change}
				</p>
			</div>
		</article>
	);
}

export default CryptoCard;
