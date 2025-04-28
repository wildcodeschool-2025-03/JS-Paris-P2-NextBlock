import "./ProfilCrypto.css";
import Nav from "../Components/Nav";

function ProfilCrypto() {
	return (
		<>
			<main className="bodyProfil">
				<Nav />
				<h1>Profil-Crypto</h1>
				<section className="sectionProfilCrypto">

					<article className="FullDataProfilCrypto">

						<div className="DivLogoNomProfilCrypto">

							<div className="LogoNomProfilCrypto">
								<img className="LogoProfilCrypto" src="" alt="" />
								<h2 className="NomProfilCrypto">Solana</h2>
								<h2 className="AbrProfilCrypto">ABR</h2>
							</div>

							<h2 className="ValeurProfilCrypto">Valeur</h2>

						</div>

						<article className="DataProfilCrypto">

							<div className="DivTextProfilCrypto">
								<p className="textProfilCrypto">Capitalisation boursiére</p>

								<div className="divExclamation">
									<p className="exclamation">!</p>
								</div>
							</div>

							<div className="DivTextProfilCrypto">
								<p className="textProfilCrypto">Offre total</p>

								<div className="divExclamation">
									<p className="exclamation">!</p>
								</div>
							</div>

							<div className="DivTextProfilCrypto">
								<p className="textProfilCrypto">Offre en circulation</p>

								<div className="divExclamation">
									<p className="exclamation">!</p>
								</div>
							</div>

							<div className="DivTextProfilCrypto">
								<p className="textProfilCrypto">Allocation des tokens</p>

								<div className="divExclamation">
									<p className="exclamation">!</p>
								</div>
							</div>

							<div className="DivTextProfilCrypto">
								<p className="textProfilCrypto">Politiques monétaire</p>

								<div className="divExclamation">
									<p className="exclamation">!</p>
								</div>
							</div>

							<div className="DivTextProfilCrypto">
								<p className="textProfilCrypto">Utilité des tokens</p>

								<div className="divExclamation">
									<p className="exclamation">!</p>
								</div>
							</div>

							<div id="DivSiteweb">
								<p className="textProfilCrypto">Site web:</p>

								<div className="divBtnProfil">
									<button type="button" className="btnSiteProfil">Bitcoin.org</button>
									<button type="button" className="btnSiteProfil">Withepaper</button>
								</div>

							</div>

						</article>

					</article>

					<article className="divGraphique">
						<h1>div graphique</h1>
						<img className="Graphique" src="" alt="" />
					</article>
				</section>
			</main>
		</>
	);
}

export default ProfilCrypto;
