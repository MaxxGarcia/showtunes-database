import React, { Component } from 'react';
import { connect } from "riddl-js";
import Footer from '../Footer.js'
import AdvancedResults from "./AdvancedResults"
import axios from "axios";
import microphone from "../images/microphone.png"

class AdvancedSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Composer: this.props.queryObject.Composer ? this.props.queryObject.Composer : '',
            Lyricist: this.props.queryObject.Lyricist ? this.props.queryObject.Lyricist : '',
            Musical: this.props.queryObject.Musical ? this.props.queryObject.Lyricist : '',
            Voice: this.props.queryObject.Voice ? this.props.queryObject.Voice :''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleHandle = this.handleHandle.bind(this)
    }
    componentDidMount() {
        this.handleHandle()
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleHandle() {
        let queryObject = this.props.history.location.search.substring(this.props.history.location.search.indexOf('?') + 1)
        if (this.props.history.location.search) {
            queryObject = queryObject.split("&").map(str => str.split('=')).reduce((query, arr, i) => {
                query[arr[0]] = arr[1].split("%20").join(" ")
                return query
            }, {})
            this.props.setGlobalState({ queryObject: queryObject }, () => {
                for (let key in this.state) {
                    if (queryObject.hasOwnProperty(key)) {
                        this.setState({ [key]: queryObject[key] });
                    }
                }
                this.handleUpdate()
            })
        }
    }
    handleSubmit(e) {
        e.preventDefault(e) 
        let newQueryObject = this.state
        let queryObject = this.props.queryObject
        for (let key in newQueryObject) {
            if (queryObject[key] === "") {
                delete queryObject[key]
            }
        }
        let newurl = `?`
        for (let key in newQueryObject) {
            if (newQueryObject[key] !== "") {
                newurl = newurl + `${key}=${newQueryObject[key]}&`
            }
        }
        newurl = newurl.substring(0, newurl.length - 1)
        this.props.history.push(newurl)
        this.handleHandle()
    }
    handleUpdate() {
        let queryObject = this.props.queryObject
        axios.get("/songs").then(response => {
            let foundObjects = response.data.filter((song, i) => {
                for (let key in queryObject) {
                    if (Array.isArray(song[key])) {
                        if (!song[key].some(name => {
                            return name === queryObject[key]
                        })) return false
                    }
                    else if (song[key] !== queryObject[key]) {
                        return false
                    }
                }
                return true
            })
            this.props.setGlobalState(prevState => ({ ...prevState, advancedData: foundObjects }));
        })
    }

    render() {
        const { composers, lyricists, musicals, voices } = this.props
        return (
            <div className="adminWrapper">
                <form onSubmit={this.handleSubmit}>
                    <input placeholder={this.props.queryObject.Voice ? this.state.Voice : "Voice"} type="text" name="Voice" list="voiceName" value={this.state.name} onChange={this.handleChange} />
                    <datalist id="voiceName">
                        {voices.map((voice, i) => {
                            return <option value={voice} key={voice + i}> {voice} </option>
                        })}
                    </datalist>


                    <input placeholder={this.props.queryObject.Composer ? this.state.Composer : "Composer"} type="text" name="Composer" list="composerName" value={this.state.name} onChange={this.handleChange} />
                    <datalist id="composerName">
                        {composers.map((composer, i) => {
                            return <option value={composer} key={composer + i}> {composer} </option>
                        })}
                    </datalist>

                    <input placeholder={this.props.queryObject.Lyricist ? this.state.Voice : "Lyricist"} type="text" name="Lyricist" list="lyricistName" value={this.state.name} onChange={this.handleChange} />
                    <datalist id="lyricistName">
                        {lyricists.map((lyricist, i) => {
                            return <option value={lyricist} key={lyricist + i}> {lyricist} </option>
                        })}
                    </datalist>

                    <input placeholder={this.props.queryObject.Musical ? this.state.Musical : "Musical"} type="text" name="Musical" list="showName" value={this.state.name} onChange={this.handleChange} />
                    <datalist id="showName">
                        {musicals.map((show, i) => {
                            return <option value={show} key={show + i}> {show} </option>
                        })}
                    </datalist>
                    <img src={microphone} id="microphoneImg" alt="microphone"/>
                    <button id="advSearchBtn">
                                              <p id="p1">S</p>
                                              <p id="p2">E</p>
                                              <p id="p3">A</p>
                                              <p id="p4">R</p>
                                              <p id="p5">C</p>
                                              <p id="p6">H</p>
                                              {/* <p>SEARCH</p> */}
                                              </button>
                </form>
                <AdvancedResults />
                <Footer />
            </div>
        );
    }
}

export default connect(AdvancedSearch, null, {});
