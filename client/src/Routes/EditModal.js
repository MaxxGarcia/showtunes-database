import React, { Component } from 'react'
import Ads from '../Ads.js';
import { connect } from "riddl-js"
import axios from "axios";


class EditModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            song: {...this.props.givenSong}
        }
        this.handleSwitch = this.handleSwitch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const {songAxios} = this.props
        let updatedSong = this.state.song;
        delete updatedSong.spotifyData
        console.log(updatedSong)
        songAxios.put(`/private/admin/${updatedSong._id}`, updatedSong).then(response => {
            console.log(response.data)
        })
    }
    handleSwitch(e) {
        let currentInput = document.getElementById("theInput");
        currentInput.placeholder = this.state.song[e.target.value];
        currentInput.value = this.state.song[e.target.value];
        currentInput.name = e.target.value
    }
    handleChange(e) {
        this.setState(prevState => ({ song: { ...prevState.song, [e.target.name]: e.target.value } }))
    }
    render() {
        return (
            <div id="resultsDiv">
                <select name="field" onChange={this.handleSwitch}>
                    <option value="Song">Song</option>
                    <option value="Musical">Musical</option>
                    <option value="Composer">Composers</option>
                    <option value="Lyricist">Lyricists</option>
                    <option value="Voice">Voice</option>
                    <option value="spotify">Spotify Link</option>
                    <option value="youtube">Youtube Link</option>
                </select>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder={this.state.song.Song} value={this.state.song.Song} name="Song" type="text" onChange={this.handleChange} id="theInput" />
                    <button> Update </button>
                </form>
            </div>
        )
    }
}

export default connect(EditModal, null, {});
