import React from 'react'

function Results() {
    return (
        <div id="resultsDiv">
            <div id="songInfoDiv">
                <p>Song: This will be pulled from props <br/>
                Show: Ragtime <br/>
                Years: 1992 - 1994 <br/>
                Duet MF</p>
            </div>
            <div>
                <p>GRAPH of popularity</p>
            </div>
            <div id="resultsLinksDiv">
            </div>
            <div id="resultsLyricsDiv">
                <h3>Lyrics</h3>
                <p>Naaaaats ingonyaaa ma bagithi babaaaaa</p>
                <p>His palms are sweaty, there's vomit on his sweater already</p>
            </div>
            <div id="buyingOptionsDiv">
                <p>Buying options</p>
            </div>
        </div>
    )
}

export default Results
