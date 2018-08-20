import React, { Component } from 'react';
import { connect } from "riddl-js";

class AdminList extends Component {
    constructor() {
        super();
        this.state = {}
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount() {
        const { songAxios } = this.props
        songAxios.get("/private/admin/all").then(response => {
            this.setState({
                adminList: [...response.data]
            })
        })
    }
    handleClick(e){
        console.log(e.target.id)
        const { songAxios } = this.props
        songAxios.delete("/private/admin/delete/:id").then(response => {console.log(response)})
    }
    render() {
        const {adminList} = this.state
        return (
            <div className="adminList">
                Admin List:
                    {adminList && adminList.map((admin, i) => {
                    return (
                        <div key={admin + i}>
                            {admin.username}
                            <button id={admin._id} onClick={this.handleClick}>DELETE</button>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default connect(AdminList, null, {});
