import React, { Component } from 'react';
import { connect } from "riddl-js";

class AdminList extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    componentDidMount() {
    }
    render() {
        let adminList;
        const { songAxios } = this.props
        songAxios.get("/private/admin/all").then(response => {
            adminList =[...response.data]
            console.log(adminList)
        })
        return (
            <div>
                Admin List:
                    {adminList && adminList.map((admin, i) => {
                        return (
                            <div key={admin + i}>
                                Username: {admin.username}
                                Password: {admin.password}
                                <button>DELETE</button>
                            </div>
                        )
                    })}
            </div>
        );
    }
}

export default connect(AdminList, null, {});
