import React, { Component } from 'react';
import { connect } from "riddl-js";
import Footer from '../Footer.js'

class Search extends Component {
    constructor() {
        super();
        this.state = {
            Composer: '',
            Lyricist: '',
            Show: '',
            Voice: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit(e) {
        e.preventDefault(e)
        console.log(this.state)
        console.log(this.props.songData.filter((song, i) => {
            for (const key in this.state) {
                    if (song[key] === this.state[key]) {
                        return false
                    }
                
                return true
            }
        }))
    }
    render() {
        const { composers, lyricists, musicals, voices } = this.props
        return (
            <div className="adminWrapper">
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Voice" type="text" name="Voice" list="voiceName" value={this.state.name} onChange={this.handleChange} />
                    <datalist id="voiceName">
                        {voices.map((voice, i) => {
                            return <option value={voice} key={voice + i}> {voice} </option>
                        })}
                    </datalist>


                    <input placeholder="Composers" type="text" name="Composer" list="composerName" value={this.state.name} onChange={this.handleChange} />
                    <datalist id="composerName">
                        {composers.map((composer, i) => {
                            return <option value={composer} key={composer + i}> {composer} </option>
                        })}
                    </datalist>

                    <input placeholder="Lyricists" type="text" name="Lyricist" list="lyricistName" value={this.state.name} onChange={this.handleChange} />
                    <datalist id="lyricistName">
                        {lyricists.map((lyricist, i) => {
                            return <option value={lyricist} key={lyricist + i}> {lyricist} </option>
                        })}
                    </datalist>

                    <input placeholder="Shows" type="text" name="Show" list="showName" value={this.state.name} onChange={this.handleChange} />
                    <datalist id="showName">
                        {musicals.map((show, i) => {
                            return <option value={show} key={show + i}> {show} </option>
                        })}
                    </datalist>
                    <button> search </button>
                </form>
                <Footer />
            </div>
        );
    }
}

export default connect(Search, null, {});
