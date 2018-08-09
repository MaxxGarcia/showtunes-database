import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div id="searchBarDiv">
                <div className="searchBarBtn">
                    <p>Voice</p>
                </div>
                <div className="searchBarBtn">
                    <p>Composer</p>
                </div>
                <div className="searchBarBtn">
                    <p>Lyricist</p>
                </div>
                <div className="searchBarBtn">
                    <p>Shows</p>
                </div>
                <div className="searchBarBtn">
                    <p>Random Song</p>
                </div>
                <button>SEARCH</button>
            </div>
        )
    }
}
