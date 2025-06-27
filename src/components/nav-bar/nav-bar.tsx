import { Link } from 'react-router';
import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaDesktop } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import './nav-bar.css';

const NavBar = () => {
    return(
        <>
        <div className="nav-bar-outer">
            <div className="menuItems">
                
                <Link to="/"><FaHome /><span>Home</span></Link>
                <Link to="/about"><IoPersonSharp /> <span>About</span></Link>
                <Link to="/skills"><FaDesktop /> <span>Skills</span></Link>
                <Link to="/contact"><FaTelegramPlane /> <span>Contact</span></Link>

            </div>
        </div>
        </>
    )
}

export default NavBar