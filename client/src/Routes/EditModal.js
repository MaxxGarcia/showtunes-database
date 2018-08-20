import React, { Component } from 'react'
import { connect } from "riddl-js"
import axios from "axios";


class EditModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            song: { ...this.props.givenSong }
        }
        this.handleSwitch = this.handleSwitch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        let songAxios = axios.create();
        songAxios.interceptors.request.use((config) => {
            const token = localStorage.getItem("token");
            config.headers.Authorization = `Bearer ${token}`;
            return config
        })
        this.props.setGlobalState({ songAxios })
        let updatedSong = this.state.song;
        console.log(updatedSong)
        let songid = this.state.song._id
        songAxios.put(`/private/admin/${songid}`, updatedSong).then(response => {
            console.log(response.data)
            document.getElementById("updateText").innerHTML = "Update Successful";
        }).catch(err => console.error(err))
    }
    handleSwitch(e) {
        let currentInput = document.getElementById("theInput");
        currentInput.placeholder = this.state.song[e.target.value];
        currentInput.value = this.state.song[e.target.value];
        currentInput.name = e.target.value
    }
    handleChange(e) {
        let name = e.target.name
        let value = e.target.value
        this.setState(prevState => ({ song: { ...prevState.song, [name]: value } }))
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
                    <div id="updateText"></div>
                </form>
            </div>
        )
    }
}

export default connect(EditModal, null, {});
