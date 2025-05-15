import "./Home.css";
import NavDebutant from "../Components/NavDebutant";
import ToggleSwitchHome from "../Components/toggleSwitchHome";

function HomeDebutant() {
	return (
		<>
			<body className="bodyHome">
				<NavDebutant />
				<main className="main-Home">
					<div className="div-home">
						<h1 className="grand-titre">
							Next<span id="span-grand-titre">Block</span>
						</h1>
						<div>
							<ToggleSwitchHome />
						</div>
					</div>
				</main>
			</body>
		</>
	);
}

export default HomeDebutant;
