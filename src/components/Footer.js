import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa"
import { Link } from 'react-router-dom';


function Footer() {

    return (
        <div className="footer">
            <div className="footer__container">
                <div className="col-md-2">
                    <div className="title">
                        <h3>Slots games</h3>
                    <div className="list">
                        <p>World Match</p>
                        <p>Booming games</p>
                        <p>Habanero</p>
                        <p>Seven Mojos</p>
                        <p>Just Play</p>
                    </div>
                    </div>
                </div>

                <div className="col-md-2">
                    <div className="title">
                        <h3>Live Casino</h3>
                    <div className="list">
                        <p>Online 3D slots game </p>
                        <p>Live black jack</p>
                        <p>Live Roulette</p>
                        <p>Live Baccarat</p>
                        <p>Live Holdem</p>
                    </div>
                    </div>
                </div>

                <div className="col-md-2">
                    <div className="title">
                        <h3>Promotion</h3>
                    </div>
                </div>

                <div className="col-md-2">
                    <div className="title">
                        <h3>About Us</h3>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="social_media">
                        <div className="social_icons">
                            <div className="facebook">
                                <FaFacebookF />
                            </div>
                            <div className="instagram">
                                <FaInstagram />
                            </div>
                            <div className="twitter">
                                <FaTwitter />
                            </div>
                            <div className="youtube">
                                <FaYoutube />
                            </div>
                        </div>
                    </div>

                    <div className="tabs">
                        <div className="plus18">
                            <p>18+</p>
                        </div>
                        <div className="text">
                            <h5>7/24 Support</h5>
                        </div>
                        
                    </div>


                    <div className="footer__lang"> 
                        <div className="navbar__language">
                            <select className="selects">
                                <option value="english">English</option>
                                <option value="nepali">Nepali</option>
                            </select>
                        </div>

                        
                    </div>
                </div>
            </div>

            <div className="copyright">
                <p>Copyright © 2021</p>
            </div>
        </div>
    )
}

export default Footer
