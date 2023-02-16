import "./Navbar.css";
import logo from "../../images/mememaker.jpg";

function Navbar() {
    return (
        <div className="navbar">
            <img className="navbar__img" src={logo} alt="Mememaker Logo" />
        </div>
    );
}

export default Navbar;
