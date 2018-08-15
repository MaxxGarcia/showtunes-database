import React, { Component } from 'react';
import { connect } from "riddl-js";
import { Link, withRouter } from "react-router-dom";

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            Voice: "none",
            Composer: "none",
            Lyricist: "none",
            Shows: "none",
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleNutral = this.handleNutral.bind(this)
    }
    handleClick(e) {
        let name = (e.target.value)
        this.setState( prevState => ({
            Voice:  "none",
            Composer: "none",
            Lyricist: "none",
            Shows: "none",
            [name]: prevState[name] === "block" ?  "none": "block"
        }))
    }
    handleNutral() {
        this.setState({
            Voice: "none",
            Composer: "none",
            Lyricist: "none",
            Shows: "none",

        })
    }
    render() {
        return (
            <div id="stickyDiv">
                <div id="searchBarDiv">
                    <button value="Voice"className="searchBarBtn" onClick={this.handleClick}>
                        Voice</button>

                    <button value="Shows" className="searchBarBtn" onClick={this.handleClick}>
                        Musical</button>
                        
                    <button value="Composer" className="searchBarBtn" onClick={this.handleClick}>
                        Composer</button>

                    <button value="Lyricist" className="searchBarBtn" onClick={this.handleClick}>
                        Lyricist</button>
                </div>


                    {/* <button className="searchBarBtn lastTwo">Advanced Search</button>
                    <button className="searchBarBtn lastTwo">Random Song</button> */}
                <div className="options">
                    <div className="BIG" style={{ display: this.state.Voice }}>
                        {this.props.voices.map((voice, i) => {
                            return <Link onClick={this.handleNutral} 
                                         className="searchResultLink"
                                         to={`/results/Voice/${voice}`} 
                                         key={voice + i}> {voice} </Link>})}
                    </div>
                    <div className="BIG" style={{ display: this.state.Composer }}>
                        {this.props.composers.map((composer, i) => {
                            return <Link onClick={this.handleNutral} 
                                         className="searchResultLink"
                                         to={`/results/Composer/${composer}`} 
                                         key={composer + i}> {composer} </Link>})}
                    </div>
                    <div className="BIG" style={{ display: this.state.Lyricist }}>
                        {this.props.lyricists.map((lyricist, i) => {
                            return <Link onClick={this.handleNutral} 
                                         className="searchResultLink"
                                         to={`/results/Lyricist/${lyricist}`} 
                                         key={lyricist + i}> {lyricist} </Link>})}
                    </div>
                    <div className="BIG" style={{ display: this.state.Shows }}>
                        {this.props.musicals.map((show, i) => {
                            return <Link onClick={this.handleNutral} 
                                         className="searchResultLink"
                                         to={`/results/Musical/${show}`} 
                                         key={show + i}> {show} </Link>})}
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(connect(SearchBar, state => state))