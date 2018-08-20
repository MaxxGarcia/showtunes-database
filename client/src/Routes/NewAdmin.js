import React, { Component } from 'react';
import { connect } from "riddl-js";

class NewAdmin extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
    }
    componentDidMount() {

    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }
    handleCreate(e) {
        e.preventDefault()
        let userInfo = this.state
        const {songAxios} = this.props
        songAxios.post("/private/addadmin", userInfo).then(response => {
            document.getElementById("successText").innerHTML = "Admin Added Successfully";
           let removeText = () => {
                document.getElementById("successText").innerHTML = "";
                clearInterval(myTimer)
            }
            let myTimer = setInterval(removeText, 10000);
        }).catch(err => { 
            this.props.setGlobalState({
                authErrCode: {
                    signup: err.response.status
                }
            })
        });
        this.clearInputs()
    }
    clearInputs() {
        this.props.setGlobalState({
            username: "",
            password: ""
        })
    }
    render() {
        let authErrCode = this.props.authErrCode.signup;
        let errMsg = document.getElementById("errorText");
        if(authErrCode < 500 && authErrCode > 399){
            errMsg.innerHTML = "Invalid username or password!"
        } else if(authErrCode > 499){
            errMsg.innerHTML = "Server Error!"
        }
        return (
            <div className="newAdminForm">
                <form onSubmit={this.handleCreate}>
                    Create New Admin Credentials:
                    <input placeholder="username" value={this.state.username} onChange={this.handleChange} name="username" type="text" />
                    <input placeholder="password" value={this.state.password} onChange={this.handleChange} name="password" type="password" />
                    <button className="button">Register </button>
                    <p id="errorText"> </p> <p id="successText"></p>
                </form>
            </div>
        );
    }
}

export default connect(NewAdmin, null, {});
