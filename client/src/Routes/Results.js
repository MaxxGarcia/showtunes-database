import React from 'react'
import Footer from '../Footer.js';
import Ads from '../Ads.js';

function Results(props) {
    console.log(this.props)
    return (
        <div id="resultsDiv">
            <div id="songInfoDiv">
                <p>Song: This will be pulled from props <br/>
                Show: Ragtime <br/>
                Years: 1992 - 1994 <br/>
                Duet MF</p>
            </div>
            <div id="popularityGraphDiv">
                <p>GRAPH of popularity  _/</p>
            </div>
            <div id="resultsLinksDiv">
            </div>
            <div id="resultsBodyDiv">
                <Ads />
                <div id="resultsLyricsDiv">
                    <h3 id="lyricsH3">Lyrics</h3>
                    <p>Naaaaats ingonyaaa ma bagithi babaaaaa</p>
                    <p>There's vomit on his sweater already, Mom's psgetti</p>
                </div>
            </div>
            <div id="buyingOptionsDiv">
                <p>Buying options</p>
            </div>
            <div id="recDiv1">
                <h3>You may also be interested in:</h3>
                <div id="recDiv2">
                    <div className="recommendation">Recommended Song</div>
                    <div className="recommendation">Recommended Song</div>
                    <div className="recommendation">Recommended Song</div>
                    <div className="recommendation">Recommended Song</div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Results
