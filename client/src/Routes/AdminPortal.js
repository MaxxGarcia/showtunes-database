import React, { Component } from 'react';
import {connect} from "riddl-js";
import axios from "axios";

const handleChange = (e) => setGlobalState => {
    const {name, value} = e.target;
    setGlobalState(prevState => (
        {
            songForm: 
                {...prevState.songForm, [name]: value}
        }))
}
const handleSubmit = (e, songForm) => setGlobalState => {
    e.preventDefault()
    songForm.composers = songForm.composers.split(",")
    songForm.lyricists = songForm.lyricists.split(",");
    axios.post(`/songs`, songForm)
        .catch(err => { console.error(err, "err message") })
    
    setGlobalState({
        songForm:{
            composers: "",
            lyricists: "",
            songName: "",
            voice: "",
            musical: "",
            clicked: 0
        }
    })
}

class AdminPortal extends Component {
    constructor(){
        super();
        this.state ={}
    }
    
    render() {
        const {props} = this
        const { songForm } = props
        return (
            <div className="adminWrapper">
                <form onSubmit={e => props.handleSubmit(e, songForm)}>
                    {/* //Composers List */}
                    <input placeholder="seperate composers by comma" value={props.songForm.composers} onChange={props.handleChange} name="composers" type="text"/>

                    {/* //lyricists Dropdown */}
                    <input placeholder="seperate lyricists by comma" value={props.songForm.lyricists} onChange={props.handleChange} name="lyricists" type="text"/>

                    {/* //Song Name */}
                    <input placeholder="song name" value={props.songForm.songName} onChange={props.handleChange} name="songName" type="text"/>

                    {/* //Voice */}
                    <input placeholder="song voice" value={props.songForm.voice} onChange={props.handleChange} name="voice" type="text"/>

                    {/* //Musical */}
                    <input placeholder="musical" value={props.songForm.musical} onChange={props.handleChange} name="musical" type="text"/>

                    <button> Submit Song</button>
                </form>
            </div>
        );
    }
}

export default connect(AdminPortal, null, { handleChange,  handleSubmit });
