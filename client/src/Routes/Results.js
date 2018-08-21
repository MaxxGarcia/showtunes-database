import React, { Component } from 'react'
import { connect } from "riddl-js"
import { Link } from "react-router-dom";
import { sanitizeHref } from "./SearchBar";

class Results extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        const { searchType, searchTerm } = this.props.match.params;
        return (
            <div className="resultsDiv">
                <b>Song - Musical</b>
                {this.props.songData.map((song, i) => {
                    if (sanitizeHref(song[searchType]) === searchTerm) {
                        return (
                            <Link to={`/songprofile/${song._id}`} key={song + i} >
                                <div className="resultWrapper">{song.Song} <b>-</b> {song.Musical} </div>
                            </Link>

                        )
                    }
                    else if (searchType === "Composer" || searchType === "Lyricist") {
                        if (song[searchType].some(item => item === searchTerm)) {
                            return (
                                <Link to={`/songprofile/${song._id}`} key={song + i} className="resultWrapper">
                                    <div>{song.Song} <b>-</b> {song.Musical} </div>

                                </Link>
                            )
                        }
                    }
                    return null
                })
                }
                <br />
            </div>
        )
    }
}

export default connect(Results, null, {});
