import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (

        <div className="navbar">
                <div className="navbar__left">
                    <Link to ="/" className="navbar__logo"> ONLINE CASINO </Link>

                </div>

                <div className="navbar__center">
                    <ul>
                        <Link to="/casino" className="casino__list"> <li>Casino</li>
                        </Link>
                    
                        <Link to="#" className="casino__list"> <li>Live Casino</li>
                        </Link>
                        
                        <Link to="#" className="casino__list"> <li>Sports Book</li>
                        </Link>

                        <Link to="#" className="casino__list"> <li>Card-Games</li>
                        </Link>

                        <Link to="/lottery" className="casino__list"> 
                        <li>Lottery</li>
                        </Link>
                        
                        <Link to="#" className="casino__list"> <li>E-games</li>
                        </Link>

                        <Link to="#" className="casino__list"> <li>News</li>
                        </Link>

                    </ul>
                </div>

                <div className="navbar__right">
                    <div className="navbar__button">
                    <Link to="/login" className="navbar__button1">
                        <button>Log In</button>
                        </Link>
                    </div>

                    <div className="navbar__language">
                        <select className="select">
                            <option value="english">English</option>
                            <option value="nepali">Nepali</option>
                        </select>
                        
                    </div>
                </div>
        </div>
    )
}

export default Navbar
