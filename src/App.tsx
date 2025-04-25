import "./App.css";
import { Link, Outlet } from "react-router";
import Nav from "./Components/Nav";
import Footer from "./Components/footer";

function App() {
	return (
		<>
			<Outlet />
			<Footer />
		</>
	);
}

export default App;
