import "./GraphiqueCrypto.css";
import { useEffect, useState } from "react";
import {
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

function GraphiqueCrypto() {
	const [data, setData] = useState([]);

	useEffect(() => {
		// Générer des données aléatoires simulées (par exemple : 24h de données horaires)
		const generateFakeData = () => {
			const newData = [];
			let basePrice = Math.random() * 100 + 1; // Prix initial entre 1 et 100

			for (let i = 0; i < 24; i++) {
				const variation = (Math.random() - 0.5) * 2; // variation entre -1 et +1
				basePrice += variation;
				newData.push({
					time: `${i}h`,
					price: Number(basePrice.toFixed(2)),
				});
			}

			return newData;
		};

		setData(generateFakeData());
	}, []);

	return (
		<div className="divGraphique" style={{ width: "100%", height: 480 }}>
			<ResponsiveContainer>
				<LineChart data={data}>
					<XAxis dataKey="time" />
					<YAxis domain={["auto", "auto"]} />
					<Tooltip />
					<Line type="monotone" dataKey="price" stroke="#8884d8" dot={false} />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}

export default GraphiqueCrypto;
