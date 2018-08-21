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
        let newurl = `?`
        for (let key in newQueryObject) {
            if (newQueryObject[key] !== "" && newQueryObject[key] !== undefined && newQueryObject[key] !== "Voice" && newQueryObject[key] !== "Composer" && newQueryObject[key] !== "Lyricist" && newQueryObject[key] !== "Musical") {
                newurl = newurl + `${key}=${newQueryObject[key]}&`
            }
        }
        if (newurl.length > 1) {
            newurl = newurl.substring(0, newurl.length - 1)
        }
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
                    <select onChange={this.handleChange} name="Voice" className="input" >
                        <option selected hidden value={this.state.Voice} > {this.state.Voice} </option>
                        {voices.map((voice, i) => {
                            return <option value={voice} key={voice + i}> {voice} </option>
                        })}
                    </select>

                    <select onChange={this.handleChange} id="composerName" name="Composer" className="input" size="1" >
                        <option selected hidden value={this.state.Composer} > {this.state.Composer} </option>

                        {composers.map((composer, i) => {
                            return <option value={composer} key={composer + i}> {composer} </option>
                        })}
                    </select>

                    <select onChange={this.handleChange} id="lyricistName" name="Lyricist" className="input">
                        <option selected hidden value={this.state.Lyricist} > {this.state.Lyricist} </option>

                        {lyricists.map((lyricist, i) => {
                            return <option value={lyricist} key={lyricist + i}> {lyricist} </option>
                        })}
                    </select>

                    <select onChange={this.handleChange} id="showName" name="Musical" className="input">
                        <option selected hidden value={this.state.Musical} > {this.state.Musical} </option>

                        {musicals.map((musical, i) => {
                            return <option value={musical} key={musical + i}> {musical} </option>
                        })}
                    </select>

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
                <button type="reset" value="reset" form="advSearchForm" onClick={this.clearInputs}> clear </button>
                {/* <Ads /> */}
                <AdvancedResults />
            </div>
        );
    }
}

export default connect(AdvancedSearch, null, {});
