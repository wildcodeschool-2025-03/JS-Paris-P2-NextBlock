import { Link } from "react-router";
import "./Nav.css"

function Nav() {
    return (
        <nav>
            <Link to="/"><img src="" alt="logo" /></Link>

            <div>
                <Link className="link" to="/AboutUs">À propos</Link>
                <Link className="link" to="/CryptoMonnaies">CryptoMonnaies</Link>
            </div>
        </nav>
    )
}

export default Nav