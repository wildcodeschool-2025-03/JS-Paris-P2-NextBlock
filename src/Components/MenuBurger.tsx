import React, { useState } from "react";
import { Link } from "react-router";

const MenuBurger = ({ pagesLevel }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="dropdown">
			<div
				className="dropdown-header"
				onClick={() => setIsOpen(!isOpen)}
				onKeyUp={() => setIsOpen(!isOpen)}
			>
				<span>{pagesLevel.title}</span>
				<span className="arrow">{isOpen ? "▾" : "▸"}</span>
			</div>
			{isOpen && (
				<ul className="dropdown-list">
					{pagesLevel.list.map((item) => (
						<li key={item}>
							<Link to={item.url}>{item.title}</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default MenuBurger;
