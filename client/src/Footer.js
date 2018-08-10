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
                    <img src={rssfeed} className="socialImg"/></a>
                <a href="https://www.twitter.com/" alt="twitter link" 
                        target="_blank" rel="noopener noreferrer">
                    <img src={twitter} className="socialImg"/></a>
                <a href="https://www.facebook.com/" alt="facebook link" 
                        target="_blank" rel="noopener noreferrer">
                    <img src={facebook} className="socialImg"/></a>
                <a href="https://www.instagram.com/" alt="instagram link" 
                        target="_blank" rel="noopener noreferrer">
                    <img src={instagram} className="socialImg"/></a>
                <a href="https://www.twitter.com/" alt="twitter link" 
                        target="_blank" rel="noopener noreferrer">
                    <img src={twitter} className="socialImg"/></a>
                <a href="https://www.dribbble.com/" alt="dribbble link" 
                        target="_blank" rel="noopener noreferrer">
                    <img src={dribbble} className="socialImg"/></a>
                <a href="https://www.snapchat.com/" alt="snapchat link" 
                        target="_blank" rel="noopener noreferrer">
                    <img src={snapchat} className="socialImg"/></a>
            </div>
            <div id="companyDiv">
                <a>ShotDat Enterprises, LLC. SLC, UT</a>
                <a href="mailto:someone@example.com?Subject=Hello%20again" id="companyEmail" target="_top">{email}</a>
            </div>
        </div>
    )
}

export default Footer
