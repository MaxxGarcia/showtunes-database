import React from 'react'
import staff from '../images/staff.png'

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
                <div>

                </div>
            </div>
            <div id="homeBodyDiv">

            </div>
        </div>
    )
}

export default Home
