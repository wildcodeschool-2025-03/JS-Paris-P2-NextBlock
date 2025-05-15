import "./App.css";
import { Link, Outlet } from "react-router";
import Nav from "./Components/NavPrincipal";
import Footer from "./Components/footer";
import { useState } from "react";

function App() {
	const [isBeginner, setIsBeginner] = useState(true);
	return (
		<>
			<Outlet context={{ isBeginner, setIsBeginner }} />
			<Footer />
		</>
	);
}

export default App;
