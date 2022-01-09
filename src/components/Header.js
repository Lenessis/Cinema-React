import { Link } from "react-router-dom";
import '../stylesheets/Header.css';

/*
 * Component which render navigation bar at the top of the page
*/

function Header ()
{
    return(
        <header className="header-navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">
                    CinemaApp
                </Link>

                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>                           
                        </li>

                        <li className="nav-item active">
                            <Link to="/showings" className="nav-link">
                                Showings
                            </Link>                           
                        </li>
                        
                    </ul>
                </div>                                
            </nav>
        </header>
    );
}

export default Header;