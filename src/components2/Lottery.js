import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Typed from 'react-typed';
import './Lottery.css';
import ScrollTopArrow from '../components/ScrollTopArrow';

function Lottery() {
    return (
        <>
        <Navbar />
        <div className="lottery">
            <div className="lottery__banner">
                <div className="lottery__banner__left">
                    <h3>Tonight</h3>
                    <h1>Set for life<sup>&reg;</sup></h1>
                    <div className="lottery__banner__left__p">
                        <p>win rs.10000</p>
                        <p>Every Month</p>
                        <p>For 30 years</p>
                    </div>
                    <button> Play for Rs.50</button>
                </div>
                <div className="lottery__banner__right">
                    <div className="lottery__banner__right__bg">
                        <h2>check your <br /> results</h2>
                        <p> Did you win big?</p>
                        <button>Check Lottery</button>
                        <h3>See all results</h3>
                    </div>
                </div>
            </div>
            <div className="lottery__mid">
                <h1>More Games</h1>
                <div className="lottery__squares">
                    <div className="lottery__squares1">
                        <h3>This Saturday</h3>
                        <h1>lotto<sup>&reg;</sup></h1>
                        <p>it's a <br /> Rollover</p>
                        <h4>Rs. 4.1L</h4>
                        <button>play for rs.100</button>
                    </div>

                    <div className="lottery__squares2">
                        <h3>This Monday</h3>
                        <h1>Euromillions<sup>&reg;</sup></h1>
                        <p>Rs.25L<sup>*</sup> <br /> Jackpot</p>
                        <h4>Dream come true money</h4>
                        <button>play for rs.200</button>
                    </div>

                    <div className="lottery__squares3">
                        <h3>This Tuesday</h3>
                        <h1>Thunderball<sup>&reg;</sup></h1>
                        <p>could you win </p>
                        <h4>Rs. 500K</h4>
                        <button>play for rs.30</button>
                    </div>
                </div>
                <div className="lottery__squares">
                    <div className="lottery__squares4">
                        <h3>Featured game</h3>
                        <h1>Instant <br /> win Games</h1>
                        <p>The big number <br /> knockout </p>
                        <h4>Win up to Rs. 250,000</h4>
                        <button>play for rs.100</button>
                    </div>

                    <div className="lottery__squares5">
                        <h3>Tonight</h3>
                        <h2>Euromillions</h2>
                        <h1>Hotpicks<sup>&reg;</sup></h1>
                        <p>Pick & match 3 balls, win </p>
                        <h4>Rs. 1500</h4>
                        <button>play for rs.15</button>
                    </div>

                    <div className="lottery__squares6">
                        <h3>This Thursday</h3>
                        <h2>Lotto</h2>
                        <h1>Hotpicks<sup>&reg;</sup></h1>
                        <p>Pick & match 3 balls, win </p>
                        <h4>Rs. 1000</h4>
                        <button>play for rs.10</button>
                    </div>
                </div> 
                <div className="lottery__dream__big"> 
                    <div className="dream__big">
                        <h1>
                            Dream Big <br /> play small
                        </h1>
                        <p>&reg;</p>
                        <Typed className="typed-text-lottery"
                                strings={["Set Your Limits", "Get Reminders", "Take Time Out" ]}
                                typeSpeed={30}
                                backSpeed={30}
                                loop />
                        <h3>Using our tools can help you stay in control.</h3>
                        <button>FIND OUT MORE</button>
                    </div>
                </div>
            </div>
            <div className="lottery__down">
                <div className="lottery__instantwins">
                    <h3>Lots of fun, loads of prizes</h3>
                    <h2>instant Win Games</h2>
                    <h1>Win upto Rs. 1 Million </h1>

                    <div className="lotterymania">
                            <div className= "lotterymania1">
                            <div className="lotterymania__img">
                            <img src="https://www.national-lottery.co.uk/iwgs/miwgmegacashwordpink/images/miwgmegacashwordpink-badge.png" />
                            </div>
                            <h1>Mega cashword</h1>
                            <p>Win up to 1 lakhs</p>
                            <button>Rs.50 Play</button>
                        </div>

                        <div className= "lotterymania1">
                            <div className="lotterymania__img">
                            <img src="https://www.cdn-national-lottery.co.uk/iwgs/miwgmonopolygold2019/images/miwgmonopolygold2019-badge.png" />
                            </div>
                            <h1>Monoploy Gold</h1>
                            <p>Win up to 5 lakhs</p>
                            <button>Rs.1000 Play</button>
                        </div>

                        <div className= "lotterymania1">
                            <div className="lotterymania__img">
                            <img src="https://www.national-lottery.co.uk/iwgs/miwgbignumberko/images/miwgbignumberko-badge.png" />
                            </div>
                            <h1>big number knockout</h1>
                            <p>Win up to 3.5 lakhs</p>
                            <button>Rs.400 Play </button>
                            </div>

                        <div className= "lotterymania1">
                        <div className="lotterymania__img">
                            <img src="https://www.cdn-national-lottery.co.uk/iwgs/miwgjewelsmash2021/images/miwgjewelsmash2021-badge.png" />
                            </div>
                            <h1>Jewel Smash</h1>
                            <p>Win up to 4 lakhs </p>
                            <button>Rs.500 Play </button>
                        </div>
                        
                        <div className= "lotterymania1">
                            <div className="lotterymania__img">
                            <img src="https://www.cdn-national-lottery.co.uk/iwgs/miwgmonopolyrichdeluxe/images/miwgmonopolyrichdeluxe-badge.png" />
                            </div>
                            <h1>Monopoly deluxe</h1>
                            <p>Win up to 1 million</p>
                            <button>Rs.2000 Play</button>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="lottery__thanks">
                    <h1>Thanks to the players</h1>
                    <h2>We'd love to know, what you think</h2>
                    <button>Give Feedback</button>
            </div>
        </div>
        <ScrollTopArrow />
        <Footer />
        </>
    )
}

export default Lottery;
