import './NavIntermediaire.css'
import { Link } from "react-router";

function NavIntermediaire() {
    return (
        <nav>
            <Link to='/IntroIntermediaire'>Intro Intermediaire</Link>
            <Link to='/Analyse'>Analyse</Link>
            <Link to='/Tokenomics'>Tokenomics</Link>
        </nav>
    )
}

export default NavIntermediaire