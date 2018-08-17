import React, { Component } from 'react'
import Ads from '../Ads.js';
import { connect } from "riddl-js"
import axios from "axios";
import EditButton from "./EditButton"


class SongProfile extends Component {
    constructor() {
        super()
        this.state = {}
    }
    componentDidMount() {
        axios.get(`/songs/${this.props.match.params.searchTerm}`)
            .then(response => this.setState(response.data))
            .then(response => {
                const songName = this.state.Song.split(" ").map((word, i) => {
                    return i > 0 ? `%20${word}` : word
                }).join("")
                axios.get("/oauth").then(response => {
                    let token = { Authorization: `Bearer ${response.data.access_token}` }
                    axios.get(`https://api.spotify.com/v1/search?q=${songName}&type=track`, { headers: token })
                        .then(response => {
                            this.setState(prevState => {
                                console.log(this.state)
                                console.log(response.data.tracks.items.filter(album => album.album.name === this.state.Musical))
                                return {
                                    ...prevState,
                                    spotifyData: {...response}
                                }
                            })
                            let albumId = `https://open.spotify.com/embed?uri=spotify:album:${response.data.tracks.items[0].album.id}`;
                            this.props.setGlobalState({
                                iframe: <iframe title={response.data} src={albumId} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                            })
                        })
                        .catch(err => { console.error(err) })
                })
            })
    }
    render() {
        console.log(this.props.authenticate)
        return (
            <div id="songProfileDiv">

                <div id="songInfoDiv">
                {this.props.authenticate.isAuthenticated === true && <EditButton givenSong={this.state}/> }
                    <p id="songInfoP">Song: {this.state.Song && this.state.Song} <br />
                        Show: {this.state.Musical && this.state.Musical} <br />
                        Relase Date: {this.state.spotifyData && this.state.spotifyData.data.tracks.items[0].album.release_date} <br />
                        {this.state.Voice && this.state.Voice}</p>
                </div>
                    <p className="please">Please select song from the album below</p>
                <div id="songInfoInnerDiv">
                    {this.props.iframe}
                    <div id="resultsLyricsDiv">
                        <h3 id="lyricsH3">Lyrics</h3>
                        <p>Naaaaats ingonyaaa ma bagithi babaaaaa</p>
                        <p>There's vomit on his sweater already, Mom's psgetti</p>
                    </div>
                </div>


                <div id="popularityGraphDiv">
                    <p>GRAPH of popularity  _/</p>
                </div>
                <div id="resultsLinksDiv">
                </div>
                <div id="resultsBodyDiv">
                    <Ads />

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
            </div>
        )
    }
}

export default connect(SongProfile, null, {});
