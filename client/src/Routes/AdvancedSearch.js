import React, { Component } from 'react';
import { connect } from "riddl-js";
import microphone from "../images/microphone.png";
import axios from "axios";
import AdvancedResults from "./AdvancedResults";

class AdvancedSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Composer: this.props.queryObject.Composer ? this.props.queryObject.Composer : 'Composer',
            Lyricist: this.props.queryObject.Lyricist ? this.props.queryObject.Lyricist : 'Lyricist',
            Musical: this.props.queryObject.Musical ? this.props.queryObject.Musical : 'Musical',
            Voice: this.props.queryObject.Voice ? this.props.queryObject.Voice : 'Voice'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleHandle = this.handleHandle.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
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
    clearInputs() {
        this.setState({
            Composer: '',
            Lyricist: '',
            Musical: '',
            Voice: ''
        })
    }
    render() {
        const { composers, lyricists, musicals, voices } = this.props
        return (
            <div className="searchWrapper">
                <form id="advSearchForm">
                    <input placeholder={this.state.Voice}
                        type="text" name="Voice" list="voiceName"
                        value={this.state.Voice}
                        onChange={this.handleChange}
                        className="input" />
                    <datalist id="voiceName">
                        {voices.map((voice, i) => {
                            return <option value={voice} key={voice + i}> {voice} </option>
                        })}
                    </datalist>


                    <input placeholder={this.state.Composer} type="text" name="Composer" list="composerName"
                        value={this.state.Composer}
                        onChange={this.handleChange}
                        className="input" />
                    <datalist id="composerName">
                        {composers.map((composer, i) => {
                            return <option value={composer} key={composer + i}> {composer} </option>
                        })}
                    </datalist>

                    <input placeholder={this.state.Lyricist}
                        type="text" name="Lyricist" list="lyricistName"
                        value={this.state.Lyricist}
                        onChange={this.handleChange}
                        className="input" />
                    <datalist id="lyricistName">
                        {lyricists.map((lyricist, i) => {
                            return <option value={lyricist} key={lyricist + i}> {lyricist} </option>
                        })}
                    </datalist>

                    <input placeholder={this.state.Musical}
                        type="text" name="Musical" list="showName"
                        value={this.state.Musical}
                        onChange={this.handleChange}
                        className="input" />
                    <datalist id="showName">
                        {musicals.map((show, i) => {
                            return <option value={show} key={show + i}> {show} </option>
                        })}
                    </datalist>
                </form>
                <img src={microphone} id="microphoneImg" alt="microphone" />
                <button id="advSearchBtn" onClick={this.handleSubmit}>
                    <p id="p1">S</p>
                    <p id="p2">E</p>
                    <p id="p3">A</p>
                    <p id="p4">R</p>
                    <p id="p5">C</p>
                    <p id="p6">H</p>
                </button>
                <button onClick={this.clearInputs}> Clear </button>
                {/* <Ads /> */}
                <AdvancedResults />
            </div>
        );
    }
}

export default connect(AdvancedSearch, null, {});
