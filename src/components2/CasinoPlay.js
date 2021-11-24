import React from 'react';
import './CasinoPlay.css';

function CasinoPlay({image, text, button}) {
    return (
        <div className="casinoplay">
            <img src={image} />
            <p>{text}</p>
            <button>{button}</button>           
        </div>
    )
}

export default CasinoPlay;
