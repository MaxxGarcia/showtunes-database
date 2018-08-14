import React from 'react'
import dribbble from "./images/dribbble.png";
import facebook from "./images/facebook.png"
import instagram from "./images/instagram.png";
import snapchat from "./images/snapchat.png";
import rssfeed from "./images/rss-feed.png";
import twitter from "./images/twitter.png";
const email = "info@ShoDat.com"

function Footer() {
    return (
        <div id="footerDiv">
            <div className="socialLinksDiv">
                <a href="" alt="rss feed link" 
                        target="_blank" rel="noopener noreferrer">
                    <img src={rssfeed} alt="rss feed link" className="socialImg"/></a>
                <a href="https://www.twitter.com/" alt="twitter link" 
                        target="_blank" rel="noopener noreferrer">
                    <img src={twitter} alt="twitter link" className="socialImg"/></a>
                <a href="https://www.facebook.com/" alt="facebook link" 
                        target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt="facebook link" className="socialImg"/></a>
                <a href="https://www.instagram.com/" alt="instagram link" 
                        target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="instagram link" className="socialImg"/></a>
                <a href="https://www.twitter.com/" alt="twitter link" 
                        target="_blank" rel="noopener noreferrer">
                    <img src={twitter} alt="twitter link" className="socialImg"/></a>
                <a href="https://www.dribbble.com/" alt="dribbble link" 
                        target="_blank" rel="noopener noreferrer">
                    <img src={dribbble} alt="dribble link" className="socialImg"/></a>
                <a href="https://www.snapchat.com/" alt="snapchat link" 
                        target="_blank" rel="noopener noreferrer">
                    <img src={snapchat} alt="snapchat link" className="socialImg"/></a>
            </div>
            <div id="companyDiv">
                <a>ShotDat Enterprises, LLC. SLC, UT</a>
                <a href="mailto:someone@example.com?Subject=Hello%20again" id="companyEmail" target="_top">{email}</a>
            </div>
        </div>
    )
}

export default Footer
