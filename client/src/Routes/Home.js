import React from 'react'
import staff from '../images/staff.png'
import Ads from '../Ads.js'
import Footer from '../Footer.js'

function Home() {
    return (
        <div>
            <div id="aboutDiv">
                <div id="aboutImgDiv">
                    <img src= { staff } id="staffImg" alt="staff"/>
                </div>
                <div id="aboutTextDiv">
                    <p id="aboutText">
                        Looking for your next audition song?<br/>
                        ShoDat helps you find the perfect song
                        for your next audition!
                    </p>
                </div>
            </div>
            <div id="homeBodyDiv">

                <Ads />

                <div id="recentUpdatesDiv">
                    <h2>Recent Updates</h2>
                    <div className="updates">
                        <h3>Date 1</h3>
                        <p>New Christmas Musical song list updated!</p> 
                    </div>                    
                    <div className="updates">
                        <h3>Date 2</h3>
                        <p>Here's another update</p> 
                    </div>                    
                    <div className="updates">
                        <h3>Date 3</h3>
                        <p>We got you the thing that you were wanting!</p> 
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
