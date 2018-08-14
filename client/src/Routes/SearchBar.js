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
        console.log(e.target.value)
        let name = (e.target.value)
        this.setState( {
            Voice: "none",
            Composer: "none",
            Lyricist: "none",
            Shows: "none",

        })
        this.setState(prevState => ({ [name]: prevState[name] === "block" }))
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
                    <button value="Voice"className="searchBarBtn" onMouseEnter={this.handleClick}>
                        Voice</button>

                    <button value="Shows" className="searchBarBtn" onMouseEnter={this.handleClick}>
                        Musical</button>
                        
                    <button value="Composer" className="searchBarBtn" onMouseEnter={this.handleClick}>
                        Composer</button>

                    <button value="Lyricist" className="searchBarBtn" onMouseEnter={this.handleClick}>
                        Lyricist</button>


                    {/* <button className="searchBarBtn lastTwo">Advanced Search</button>
                    <button className="searchBarBtn lastTwo">Random Song</button> */}

                    <div className="options">
                        <div className="BIG" style={{ display: this.state.Voice }}>
                            {this.props.voices.map((voice, i) => {
                                return <Link onClick={this.handleNutral} to={`/results/Voice/${voice}`} key={voice + i}> {voice} </Link>
                            })}
                        </div>
                        <div className="BIG" style={{ display: this.state.Composer }}>
                            {this.props.composers.map((composer, i) => {
                                return <Link onClick={this.handleNutral} to={`/results/Composer/${composer}`} key={composer + i}> {composer} </Link>
                            })}
                        </div>
                        <div className="BIG" style={{ display: this.state.Lyricist }}>
                            {this.props.lyricists.map((lyricist, i) => {
                                return <Link onClick={this.handleNutral} to={`/results/Lyricist/${lyricist}`} key={lyricist + i}> {lyricist} </Link>
                            })}
                        </div>
                        <div className="BIG" style={{ display: this.state.Shows }}>
                            {this.props.musicals.map((show, i) => {
                                return <Link onClick={this.handleNutral} to={`/results/Musical/${show}`} key={show + i}> {show} </Link>
                            })}
                        </div>
                    </div>
                    {/* <button>ADVANCED SEARCH</button> */}
                </div>
            </div>
        )
    }
}
export default withRouter(connect(SearchBar, state => state))