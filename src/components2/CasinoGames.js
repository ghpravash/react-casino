import React from 'react';
import './CasinoGames.css';

function CasinoGames({image, title}) {
    return (
        <div className="casinoGames">
                <img src={image} />
                <p>{title}</p>
        </div>
    )
}

export default CasinoGames;
