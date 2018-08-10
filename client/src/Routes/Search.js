import React, { Component } from 'react';
import { connect } from "riddl-js";


class Search extends Component {
    constructor() {
        super();
        this.state = {
                selectedComposer: '',
                selectedLyricist: '',
                selectedShow: '',
                selectedVoice: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        const {composers, lyricists, musicals, voices } = this.props
        return (
            <div className="adminWrapper">

                <form >
                    <input placeholder="Voice" type="text" name="selectedVoice" list="voiceName" value={this.state.name} onChange={this.handleChange} />
                    <datalist id="voiceName">
                        {voices.map((voice, i) => {
                            return <option value={voice} key={voice + i}> {voice} </option>
                        })}
                    </datalist>


                    <input placeholder="Composers" type="text" name="selectedComposer" list="composerName" value={this.state.name} onChange={this.handleChange} />
                    <datalist id="composerName">
                        {composers.map((composer, i) => {
                            return <option value={composer} key={composer + i}> {composer} </option>
                        })}
                    </datalist>

                    <input placeholder="Lyricists" type="text" name="selectedLyricist" list="lyricistName" value={this.state.name} onChange={this.handleChange}/>
                    <datalist id="lyricistName">
                        {lyricists.map((lyricist, i) => {
                            return <option value={lyricist} key={lyricist + i}> {lyricist} </option>
                        })}
                    </datalist>

                    <input placeholder="Shows" type="text" name="selectedShow" list="showName" value={this.state.name} onChange={this.handleChange}/>
                    <datalist id="showName">
                        {musicals.map((show, i) => {
                            return <option value={show} key={show + i}> {show} </option>
                        })}
                    </datalist>
                    <button> search </button>
                </form>
            </div>
        );
    }
}

export default connect(Search, null, { });
