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
            <div>
                {this.props.advancedData && this.props.advancedData.map((song, i) => {
                    return (
                        <Link to={`/songprofile/${song._id}`} key={song + i} className="resultWrapper">
                            <div>{song.Song} - {song.Musical} </div>
                        </Link>
                    )
                })
                }
            </div>
        )
    }
}

export default connect(AdvanceResults, null, {});
