import { createBrowserRouter } from "react-router";
import App from "./App";
import MenuBurger from "./Components/MenuBurger";
import MenuBurger2 from "./Components/MenuBurger2";
import AboutUs from "./Pages/AboutUs";
import CryptoMonnaies from "./Pages/CryptosMonnaies";
import Home from "./Pages/Home";
import Histoire from "./Pages/PagesDebutant/Histoire";
import IntroDebutant from "./Pages/PagesDebutant/IntroDebutant";
import Risques from "./Pages/PagesDebutant/Risques";
import Analyse from "./Pages/PagesIntermediaire/Analyse";
import IntroIntermediaire from "./Pages/PagesIntermediaire/IntroIntermediaire";
import Tokenomics from "./Pages/PagesIntermediaire/Tokenomics";
import ProfilCrypto from "./Pages/ProfilCrypto";

const Routes = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				element: <Home />,
				path: "/",
			},
			{
				element: <AboutUs />,
				path: "/AboutUs",
			},
			{
				element: <CryptoMonnaies />,
				path: "/CryptoMonnaies",
			},
			{
				element: <ProfilCrypto />,
				path: "/ProfilCrypto",
			},
			{
				element: <Histoire />,
				path: "/Histoire",
			},
			{
				element: <IntroDebutant />,
				path: "/introDebutant",
			},
			{
				element: <Risques />,
				path: "/Risques",
			},
			{
				element: <IntroIntermediaire />,
				path: "/IntroIntermediaire",
			},
			{
				element: <Analyse />,
				path: "/Analyse",
			},
			{
				element: <Tokenomics />,
				path: "/Tokenomics",
			},
			{
				element: <MenuBurger />,
				path: "/MenuBurger",
			},
			{
				element: <MenuBurger2 />,
				path: "/MenuBurger2",
			},
		],
	},
]);
export default Routes;
