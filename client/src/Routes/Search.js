import React, { Component } from 'react';
import { connect } from "riddl-js";
import microphone from "../images/microphone.png";

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
            <div className="searchWrapper">
                <form onSubmit={this.handleSubmit} id="advSearchForm">
                    <input placeholder="Voice" className="advSearchInput" type="text" name="Voice" list="voiceName" value={this.state.name} onChange={this.handleChange} />
                    <datalist id="voiceName">
                        {voices.map((voice, i) => {
                            return <option value={voice} key={voice + i}> {voice} </option>
                        })}
                    </datalist>

                    <input placeholder="Musical" className="advSearchInput" type="text" name="Show" list="showName" value={this.state.name} onChange={this.handleChange} />
                    <datalist id="showName">
                        {musicals.map((show, i) => {
                            return <option value={show} key={show + i}> {show} </option>
                        })}
                    </datalist>


                    <input placeholder="Composers" className="advSearchInput" type="text" name="Composer" list="composerName" value={this.state.name} onChange={this.handleChange} />
                    <datalist id="composerName">
                        {composers.map((composer, i) => {
                            return <option value={composer} key={composer + i}> {composer} </option>
                        })}
                    </datalist>

                    <input placeholder="Lyricists" className="advSearchInput" type="text" name="Lyricist" list="lyricistName" value={this.state.name} onChange={this.handleChange} />
                    <datalist id="lyricistName">
                        {lyricists.map((lyricist, i) => {
                            return <option value={lyricist} key={lyricist + i}> {lyricist} </option>
                        })}
                    </datalist>


                </form>
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

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi provident eum, velit voluptatum sint molestias reiciendis quae quis iure aliquid ab rerum quibusdam quod nostrum incidunt debitis cupiditate natus praesentium!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum iusto natus velit eveniet, aliquam sapiente ratione? Numquam quidem exercitationem saepe laboriosam? Corrupti, temporibus assumenda enim velit debitis in quod!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, omnis non saepe magni ipsam magnam natus laborum itaque, veritatis eos eveniet praesentium aut ab quam sapiente nesciunt est quas. Reprehenderit.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum perferendis deserunt alias impedit recusandae, ex eius, tempore est cumque dolorum molestiae odit tempora sunt nemo animi vel obcaecati ipsam beatae!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor atque dignissimos placeat reprehenderit itaque eligendi mollitia, voluptates voluptate a ab unde, repudiandae facilis sapiente rerum asperiores, incidunt maxime consequatur debitis.
                    </p>
            </div>
        );
    }
}

export default connect(Search, null, {});
