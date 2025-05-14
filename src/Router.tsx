import { createBrowserRouter } from "react-router";
import App from "./App";
import AboutUs from "./Pages/AboutUs";
import CryptoMonnaies from "./Pages/CryptosMonnaies";
import Home from "./Pages/Home";
import HomeDebutant from "./Pages/HomeDebutant";
import Histoire from "./Pages/PagesDebutant/Histoire";
import IntroDebutant from "./Pages/PagesDebutant/IntroDebutant";
import Risques from "./Pages/PagesDebutant/Risques";
import Transition from "./Pages/PagesDebutant/Transition";
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
				element: <HomeDebutant />,
				path: "/HomeDebutant",
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
				path: "/ProfilCrypto/:id",
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
				element: <Transition />,
				path: "/Transition",
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
		],
	},
]);
export default Routes;
