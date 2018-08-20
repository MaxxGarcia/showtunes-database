import React, { Component } from 'react'
import { connect } from "riddl-js"
import EditModal from "./EditModal"

class EditButton extends Component {
    constructor() {
        super()
        this.state = {display: false}
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount() {

    }
    handleClick(){
        this.setState(prevState => ({display: prevState.display === false ? true : false}))
    }
    render() {
        return (
            <div id="resultsDiv">
                <button onClick={this.handleClick} className="button"> EDIT </button>
            {this.state.display && <EditModal givenSong={this.props.givenSong}/>}
            </div>
        )
    }
}

export default connect(EditButton, null, {});
