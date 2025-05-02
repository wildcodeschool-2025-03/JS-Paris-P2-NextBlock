import { useState } from "react";
import "./SwitchMode.css";

const SwitchMode = ({ isBeginner, setIsBeginner }) => {
	const toggleSwitch = () => {
		setIsBeginner(!isBeginner);
	};

	return (
		<button type="button" className="switch-container" onClick={toggleSwitch}>
			<span className="switch-label">
				{isBeginner ? "Débutant" : "Intermédiaire"}
			</span>
			<div className={`switch ${isBeginner ? "beginner" : "intermediate"}`}>
				<div className="switch-circle" />
			</div>
		</button>
	);
};

export default SwitchMode;
