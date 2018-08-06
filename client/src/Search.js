import React, { Component } from 'react';
import { connect } from "riddl-js";
import axios from "axios";
import qs from "qs";
const url = "https://accounts.spotify.com/api/token";
const config = {
    method: "POST",
    url,
    headers: {
        Authorization: "Basic MDA3MmU2ZGYxYzU0NDIxYzhiMzNlZmNhNjM3YWQxZWM6MDNlZTQxNWU5NjgzNGI0ZTk1MDFiOWNiNjA0OTc0ZTc="
    },
    origin: "https://accounts.spotify.com"
}

const handleChange = (e) => setGlobalState => {
    const { name, value } = e.target;
    setGlobalState(prevState => (
        {
            searchForm: { ...prevState.songForm, [name]: value }
        }
    ))
}

const handleSubmit = (e, searchForm) => setGlobalState => {
    e.preventDefault()
    const songName = searchForm.song.split(" ").map((word, i) => {
        return i > 0 ? `%20${word}` : word
    }).join("")
    console.log(songName)

    axios.get("/oauth").then(response => {
        let token = { Authorization: `Bearer ${response.data.access_token}` }
        axios.get(`https://api.spotify.com/v1/search?q=${songName}&type=track`, { headers: token })
            .then(response => {
                let albumId = `https://open.spotify.com/embed?uri=spotify:album:${response.data.tracks.items[0].album.id}`;
                setGlobalState({ 
                    iframe: <iframe title={response.data} src={albumId} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>, 
                    searchForm: {song: ""} 
                })
            })
            .catch(err => { console.error(err) })
    })
    setGlobalState({
        searchForm: {
            song: ""
        }
    })
}

class Search extends Component {
    constructor() {
        super();
        this.state = {}


    }

    render() {
        const { searchForm } = this.props
        return (
            <div className="adminWrapper">
                <form onSubmit={e => this.props.handleSubmit(e, searchForm)}>
                    <input placeholder="Song Name" value={searchForm.song} onChange={this.props.handleChange} name="song" type="text" />
                    <button > search </button>
                </form>
                {this.props.iframe}
            </div>
        );
    }
}

export default connect(Search, null, { handleChange, handleSubmit });
