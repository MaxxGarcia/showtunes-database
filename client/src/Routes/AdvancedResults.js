import React, { Component } from 'react'
import { connect } from "riddl-js"
import { Link } from "react-router-dom"


class AdvanceResults extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div id="hiThisIsTheDiv">
                <div id="resultWrapperDiv">
                    {this.props.advancedData && this.props.advancedData.map((song, i) => {
                        return (
                            <Link to={`/songprofile/${song._id}`} key={song + i} className="resultLink">
                                <div id="songAndMusical">{song.Song} - {song.Musical} </div>
                            </Link>
                        )
                    })
                    }
                </div>
            </div>
        )
    }
}

export default connect(AdvanceResults, null, {});
