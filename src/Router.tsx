import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import CryptoMonnaies from "./Pages/CryptosMonnaies";
import Histoire from "./Pages/PagesDebutant/Histoire";
import IntroDebutant from "./Pages/PagesDebutant/IntroDebutant";
import Risques from "./Pages/PagesDebutant/Risques";
import IntroIntermediaire from "./Pages/PagesIntermediaire/IntroIntermediaire";
import Analyse from "./Pages/PagesIntermediaire/Analyse";
import Tokenomics from "./Pages/PagesIntermediaire/Tokenomics";
import ProfilCrypto from "./Pages/ProfilCrypto";

const Routes = createBrowserRouter(
    [{
        element: <App />,
        children: [
            {
                element: <Home />,
                path: "/"
            },
            {
                element: <AboutUs />,
                path: "/AboutUs"
            },
            {
                element: <CryptoMonnaies />,
                path: "/CryptoMonnaies"
            },
            {
                element: <ProfilCrypto />,
                path: "/ProfilCrypto"
            },
            {
                element: <Histoire />,
                path: "/Histoire"
            },
            ,
            {
                element: <IntroDebutant />,
                path: "/introDebutant"
            },
            {
                element: <Risques />,
                path: "/Risques"
            },
            {
                element: <IntroIntermediaire />,
                path: "/IntroIntermediaire"
            },
            {
                element: <Analyse />,
                path: "/Analyse"
            },
            {
                element: <Tokenomics />,
                path: "/Tokenomics"
            }
        ]
    }]
)
export default Routes