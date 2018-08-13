import React, { Component } from 'react'
import { connect } from "riddl-js"
import { Link } from "react-router-dom"

class Results extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        const {searchType, searchTerm} = this.props.match.params
        return (
            <div>
                {this.props.songData.map((song, i) => {
                    if (song[searchType] === searchTerm) {
                        return (
                            <Link to={`/songprofile/${song._id}`} key={song + i} className="resultWrapper">
                                <div>{song.Song} {song.Musical} </div>
                            </Link>
                        )
                    }
                    else if (searchType === "Composer" || searchType === "Lyricist") {
                        if (song[searchType].some(item => item === searchTerm)) {
                            return (
                                <Link to={`/songprofile/${song._id}`} key={song + i} className="resultWrapper">
                                <div>{song.Song} {song.Musical} </div>
                                </Link>
                            )
                        }
                    }
                    return null
                })

                }
            </div>
        )
    }
}

export default connect(Results, null, {});
