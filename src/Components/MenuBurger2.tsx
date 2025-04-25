import React, { useState } from "react";

const MenuBurger2 = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="dropdown">
			<div
				className="dropdown-header"
				onClick={() => setIsOpen(!isOpen)}
				onKeyUp={() => setIsOpen(!isOpen)}
			>
				<span>Débutant</span>
				<span className="arrow">{isOpen ? "▾" : "▸"}</span>
			</div>
			{isOpen && (
				<ul className="dropdown-list">
					<li>L’histoire</li>
					<li>Introduction</li>
					<li>Les risques</li>
				</ul>
			)}
		</div>
	);
};

export default MenuBurger2;
