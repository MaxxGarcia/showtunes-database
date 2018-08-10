import React, { Component } from 'react';
import { connect } from "riddl-js";
import axios from "axios";

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
    axios.get("/oauth").then(response => {
        let token = { Authorization: `Bearer ${response.data.access_token}` }
        axios.get(`https://api.spotify.com/v1/search?q=${songName}&type=track`, { headers: token })
            .then(response => {
                let albumId = `https://open.spotify.com/embed?uri=spotify:album:${response.data.tracks.items[0].album.id}`;
                setGlobalState({
                    iframe: <iframe title={response.data} src={albumId} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
                    searchForm: { song: "" }
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
        return (
            <div className="adminWrapper">
                {this.props.iframe}
            </div>
        );
    }
}

export default connect(Search, null, { handleChange, handleSubmit });
