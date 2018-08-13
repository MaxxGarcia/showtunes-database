import React from 'react'
import Footer from '../Footer.js';
import Ads from '../Ads.js';

function Results(props) {
    return (
        <div id="resultsDiv">
            <div id="songInfoDiv">
                <p id="songInfoP">Song: This will be pulled from props <br/>
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quasi dolorum officia ab architecto veritatis asperiores tempore sint, consequuntur quisquam sequi necessitatibus dolorem minima incidunt nihil dolore. Numquam, totam dicta?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni esse pariatur explicabo quibusdam ab similique dolorum nobis, eum odio nihil sequi, asperiores, quam omnis expedita corrupti id? Ipsum, qui aperiam.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus perspiciatis repellat dolore quia fugiat fuga totam officiis mollitia. Nostrum consequuntur voluptates tempore saepe maxime corrupti assumenda perferendis ullam cum at?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, blanditiis eum, aliquam sint in unde dolores saepe ullam eveniet laudantium dignissimos fuga odio nobis eaque accusamus! Dolorem, sed aliquid? Non!</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Results
