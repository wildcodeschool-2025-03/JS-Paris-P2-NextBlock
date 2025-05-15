import { useOutletContext } from "react-router";
import "./toggleSwitchHome.css";
import React, { useState } from "react";

function ToggleSwitchHome() {
	const { isBeginner, setIsBeginner } = useOutletContext();

	const handleSwitch = (mode) => {
		setLevel(mode);
	};

	return (
		<div className="switch-containerHome">
			<h2 className="h2Toggle">
				Mode{" "}
				<span className="highlight">
					{isBeginner ? "Débutant" : "Intermédiaire"}
				</span>
			</h2>
			<p className="text-home ">
				{isBeginner
					? "Nous proposons une introduction claire et accessible à l’univers des crypto-monnaies. L’objectif est de vous familiariser avec les principes fondamentaux, les technologies utilisées et les enjeux économiques de cet écosystème en pleine évolution."
					: "Une fois les bases acquises, vous serez accompagné dans vos premiers pas vers l’investissement et le trading. Grâce à des ressources pédagogiques et des outils concrets, vous apprendrez à analyser, gérer vos risques et développer une stratégie adaptée."}
			</p>
			<div className="toggleHome">
				<button
					type="button"
					className={isBeginner ? "active" : ""}
					onClick={() => setIsBeginner(!isBeginner)}
				>
					Débutant
				</button>
				<button
					type="button"
					className={!isBeginner ? "active" : ""}
					onClick={() => setIsBeginner(!isBeginner)}
				>
					Intermédiaire
				</button>
			</div>
		</div>
	);
}

export default ToggleSwitchHome;
