import React, { useState } from 'react';
import './StackReel.css';

function StackReel() {

    const [isHover, setIsHover] = useState(false);
    function handleMouseEnter(e) {
            e.preventDefault();
            setIsHover(true);      
    }

    function handleMouseLeave() {
        setIsHover(false);
        
    }
    return (
        <div className="stackreel">
            <div className="stack__button">
                <div className="stack1">
                    <img src={isHover ? "http://betboss777.com/images/icons/diamond-white.png" : "http://betboss777.com/images/icons/diamond.png"} onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}/>
                    <p>All Games </p>
                </div>
                <div className="stack2">
                    <img src={isHover ? "http://betboss777.com/images/icons/slot-machine-white.png" : "http://betboss777.com/images/icons/slot-machine.png" } onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
                    <p>Slots </p>
                </div>
                <div className="stack3">
                    <img src={isHover ? "http://betboss777.com/images/icons/treasure-chest-white.png" : "http://betboss777.com/images/icons/treasure-chest.png" } onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  />
                    <p>Cases</p>
                </div>
                <div className="stack4">
                    <img src={isHover ? "http://betboss777.com/images/icons/poker-cards-white.png" : "http://betboss777.com/images/icons/poker-cards.png"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
                    <p>Poker</p>
                </div>
                <div className="stack5">
                    <img src={isHover ? "http://betboss777.com/images/icons/casino-white.png" :"http://betboss777.com/images/icons/casino.png"}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
                    <p>Roulette </p>
                </div>
                <div className="stack6">
                    <img src={isHover ? "http://betboss777.com/images/icons/football-white.png" : "http://betboss777.com/images/icons/football.png"}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
                    <p>Sport</p>
                </div>
                <div className="stack7">
                    <img src={isHover ? "http://betboss777.com/images/icons/gift-box-white.png" : "http://betboss777.com/images/icons/gift-box.png"}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  />
                    <p>Promotion</p>
                </div>
            </div>
        </div>
    )
}

export default StackReel