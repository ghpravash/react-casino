import React from 'react';
import CasinoGames from './CasinoGames';
import './Casino.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CasinoPlay from './CasinoPlay';
import Typed from 'react-typed';
import ScrollTopArrow from '../components/ScrollTopArrow';

function Casino() {
    return (
        <>
        <Navbar />
        <div className="casino__container">
            <div className="casino__title">
                <div className="casino__color">
                    <h1>Casino</h1>
                    <div className="typed__effect">
                        <Typed className="typed-text"
                            strings={["Play to Gain", "Earn the Bucks", "Double or Nothing","Invest Little, Take More" ]}
                            typeSpeed={30}
                            backSpeed={30}
                            loop
                        />
                    </div>
                </div>
            </div>
            <div className="casino__text">
                <h1>Play The Game : Online Casino</h1>
                <p>Even though online casino games are the most convenient and easiest way to play casino games, many people prefer the exciting rush of a traditional casino. Having live interactions with dealers and other players makes for a much more immersive experience. Lucky for you, live dealer online casino games combine the best of both worlds.
                Online Casino offers a massive collection of live casino tables to choose from. The live dealer games offered by Online Casino are managed by leading providers, including Evolution Gaming, Extreme and NetEnt Live. The result is the best casino live dealer experience on the web.</p>
            </div>
            <div className="casino__area">
            <CasinoGames
                image ="https://www.primeapi.com/optimizer/v1/game-image/webp?path=gameRes/sq/250/EuroRouletteProV2.jpg"
                title ="European roulette" />
            <CasinoGames 
                image ="https://www.primeapi.com/optimizer/v1/game-image/webp?path=gameRes/sq/250/BlackjackVIPEbyEvolution.jpg"
                title ="BlackJack VIP" />
            <CasinoGames 
                image ="https://www.primeapi.com/optimizer/v1/game-image/webp?path=gameRes/sq/250/Baccarat.jpg"
                title ="Baccarat" />
            <CasinoGames 
                image ="https://www.primeapi.com/optimizer/v1/game-image/webp?path=gameRes/sq/250/BlackjackAzureH.jpg"
                title ="BlackJack Azure H" />
            </div>
            <div className="casino__area">
            <CasinoGames 
                image ="https://www.primeapi.com/optimizer/v1/game-image/webp?path=gameRes/sq/250/LiveBlackjackE.jpg"
                title =" Live BlackJack E" />
            <CasinoGames 
                image ="https://www.primeapi.com/optimizer/v1/game-image/webp?path=gameRes/sq/250/LoungeBlackjack4ByPlayTech.jpg"
                title =" Lounge BlackJack 4" />
            <CasinoGames 
                image ="https://www.primeapi.com/optimizer/v1/game-image/webp?path=gameRes/sq/250/RuletaRelampagoenVivo.jpg"
                title =" Lightining Roulette" />
            <CasinoGames 
                image ="https://www.primeapi.com/optimizer/v1/game-image/webp?path=gameRes/sq/250/BlackjackWhite3byEvolution.jpg"
                title =" BlackJack White 3" />
            </div>
            <div className="casino__area">
            <CasinoGames 
                image ="https://www.primeapi.com/optimizer/v1/game-image/webp?path=gameRes/sq/250/AmericanBlackjackTurbo.jpg"
                title ="BlackJack Turbo" />
            <CasinoGames 
                image ="https://www.primeapi.com/optimizer/v1/game-image/webp?path=gameRes/sq/250/LightningBaccarat.jpg"
                title =" Lightning Baccarat" />
            <CasinoGames 
                image ="https://www.primeapi.com/optimizer/v1/game-image/webp?path=gameRes/sq/250/Baccarat1NCByPlayTech.jpg"
                title ="Baccarat 1" />
            <CasinoGames 
                image ="https://www.primeapi.com/optimizer/v1/game-image/webp?path=gameRes/sq/250/AlexandriteBlackjackByPlayTech.jpg"
                title ="Alexandrite BlackJack" />
            </div>
            <div className="casino__area">
            <CasinoGames 
                image ="https://www.primeapi.com/optimizer/v1/game-image/webp?path=gameRes/sq/250/FrenchRouletteGold.jpg"
                title ="French Roulette Gold" />
            <CasinoGames 
                image ="https://www.primeapi.com/optimizer/v1/game-image/webp?path=gameRes/sq/250/AmericanRouletteProV2.jpg"
                title =" American Roulette" />
            <CasinoGames 
                image ="https://www.primeapi.com/optimizer/v1/game-image/webp?path=gameRes/sq/250/RouletteByEvolution.jpg"
                title ="Roulette Live" />
                
            </div>
            <div className="casino__text2">
                <h1>How to Play in a Live Casino – The Basics</h1>
                <p>Even though the online live casino experience is very much like a traditional casino, there are a few basic things you should know before you play live dealer casino games.</p>
            </div>
            <div className="casino__play">
                <CasinoPlay 
                    image="https://www.megacasino.com/_next/static/images/the_basics1-a689eddae4dd2af84f346a1868e1cee2.jpg.webp"
                    text="The most common live dealer games are blackjack, roulette and baccarat. While some casinos offer other live dealer casino games, these three are by far the most widely available."
                    button="Play Now" />
                <CasinoPlay 
                    image="https://www.megacasino.com/_next/static/images/the_basics2-717f89852aec7168ad398d785ab6001e.jpg.webp"
                    text="The gameplay of live casino games is very similar to the standard casino rules. While each online casino has their own unique tweaks to the rules, you can expect the basic gameplay to be the same across all online casino games."
                    button="Play Now" />
                <CasinoPlay 
                    image="https://www.megacasino.com/_next/static/images/the_basics3-329c56d2dddd6b7566aa7e21bc531a35.jpg.webp"
                    text="Live dealer games often use Optical Character Recognition (OCR) technology, which automatically reads cards and roulette placement and clearly displays the values on your screen. OCR technology helps create a live casino experience that rivals that of the traditional casino."
                    button="Play Now" />
                <CasinoPlay 
                    image="https://www.megacasino.com/_next/static/images/the_basics4-50f2282839854c0a82313d8dd347c5ea.jpg.webp"
                    text="Live dealer games often feature a chat option. It’s important to be polite and courteous to the dealer and other players. Poor behavior could lead to a suspension or even a lifetime ban. When communicating over the internet, etiquette is important."
                    button="Play Now" />
            </div>   
        </div>
        <ScrollTopArrow />
        <Footer />
        </>
    )
}

export default Casino;
