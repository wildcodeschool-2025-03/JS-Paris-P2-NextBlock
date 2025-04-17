import "./App.css";
import { Outlet } from "react-router";

function App() {
	const name = "toto";
	const text = "Welcome";
	return (
		<>
			<Outlet />
		</>
	);
}

export default App;
