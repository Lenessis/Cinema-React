import react from "react";
import { Link } from "react-router-dom";
import '../stylesheets/Header.css';

function Header ()
{
    return(
        <header className="header-navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">
                    CinemaApp
                </Link>

                <div> {/*className="collapse navbar-collapse" id="navbarNav"*/}
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

               {/*} <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button> */}

                {/* Jeśli wyświetla się komponent Movie, to wyświetl przycisk add movie */}
                <Link to="/add-movie">
                    <button className="btn btn-primary add-movie-btn">Add movie</button>
                </Link>
                
            </nav>
        </header>
    );
}

export default Header;