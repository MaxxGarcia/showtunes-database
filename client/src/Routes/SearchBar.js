import React, { Component } from 'react';
import { connect } from "riddl-js";
import { Route, Link, Switch, withRouter} from "react-router-dom";
import Results from "./Results";

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
    }
    handleClick(e) {
        let name = (e.target.innerText)
        console.log(name)
        this.setState(prevState => ({ [name]: prevState[name] === "none" ? "block" : "none" }))
    }
    
    render() {
        console.log(this.props)

        return (
            <div id="searchBarDiv">
                <div className="searchBarBtn" onClick={this.handleClick}>
                    <p>Voice</p>
                </div>
                <div className="BIG" style={{ display: this.state.Voice }}>
                    {this.props.voices.map((voice, i) => {
                        return <Link to={`/results/${voice}`} key={voice + i}> {voice} </Link>
                    })}
                </div>
                <div className="searchBarBtn" onClick={this.handleClick}>
                    <p>Composer</p>
                </div>
                <div className="BIG" style={{ display: this.state.Composer }}>
                    {this.props.composers.map((composer, i) => {
                        return <Link to={`/results/${composer}`} key={composer + i}> {composer} </Link>
                    })}
                </div>
                <div className="searchBarBtn" onClick={this.handleClick}>
                    <p>Lyricist</p>
                </div>
                <div className="BIG" style={{ display: this.state.Lyricist }}>
                    {this.props.lyricists.map((lyricist, i) => {
                        return <Link to={`/results/${lyricist}`} key={lyricist + i}> {lyricist} </Link>
                    })}
                </div>
                <div className="searchBarBtn" onClick={this.handleClick}>
                    <p>Shows</p>
                </div>
                <div className="BIG" style={{ display: this.state.Shows }}>
                    {this.props.musicals.map((show, i) => {
                        return <Link to={`/results/${show}`} key={show + i}> {show} </Link>
                    })}
                </div>
                <div className="searchBarBtn">
                    <p>Random Song</p>
                </div>
                <button className="searchBarBtn">ADVANCED SEARCH</button>
                <Switch>
                    <Route path={`${this.props.match.url}/:searchTerm`} component={Results} />
                </Switch>
            </div>
        )
    }
}
export default withRouter(connect(SearchBar, state => state))