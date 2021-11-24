import React from 'react'
import Banner from './Banner'
import Footer from './Footer'
import Navbar from './Navbar'
import ScrollTopArrow from './ScrollTopArrow'
import SignUp from './SignUp'

function Home() {
    return (
        <div>
            <Navbar />
            <Banner />
            <SignUp />
            <Footer />
            <ScrollTopArrow />
        </div>
    )
}

export default Home
