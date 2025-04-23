import "./App.css";
import { Link, Outlet } from "react-router";
import Nav from "./Components/Nav";

function App() {
	return (
		<>
			<Outlet />
		</>
	);
}

export default App;
