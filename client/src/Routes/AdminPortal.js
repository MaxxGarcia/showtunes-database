import React, { Component } from 'react';
import { connect } from "riddl-js";
import axios from "axios";

class AdminPortal extends Component {
    constructor() {
        super();
        this.state = {
            Composers: "",
            Lyricists: "",
            Song: "",
            Voice: "",
            Musical: "",
            clicked: 0,
            links: {
                youtube: "",
                spotify: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserData = this.handleUserData.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }
    componentDidMount() {
        let songAxios = axios.create();
        songAxios.interceptors.request.use((config) => {
            const token = localStorage.getItem("token");
            config.headers.Authorization = `Bearer ${token}`;
            return config
        })
        this.props.setGlobalState({ songAxios })
    }
    handleChange(e) {
        const { name, value } = e.target;
        console.log(name)
            console.log("test")
            this.setState({ [name]: value })
    }
    handleNestedChange(e){
        const { name, value } = e.target;
        this.setState({ links: { [name]: value } })
    }
    handleUserData(e) {
        const { name, value } = e.target;
        this.props.setGlobalState(prevState => ({ userInfo: { ...prevState.userInfo, [name]: value } }))
    }
    handleSubmit(e) {
        e.preventDefault()
        const newSong = this.state
        const songAxios = this.props.songAxios
        songAxios.post("/private/admin", newSong).then(response => alert(response))
            .catch(err => { console.error(err, "err message") })
        this.setState({
            Composers: "",
            Lyricists: "",
            Song: "",
            Voice: "",
            Musical: "",
            clicked: 0,
            links: {
                youtube: "",
                spotify: ""
            }
        })
    }
    handleLogin(e) {
        e.preventDefault()
        let userInfo = this.props.userInfo
        axios.post("/login", userInfo).then(response => {
            const { token, admin } = response.data
            localStorage.setItem("token", token)
            localStorage.setItem("admin", JSON.stringify(admin))
            this.props.setGlobalState({
                authenticate: {
                    user: localStorage.admin,
                    isAdmin: true,
                    isAuthenticated: true
                }
            })
        });
        this.clearInputs()
    }
    handleLogout(e) {
        e.preventDefault();
        localStorage.removeItem("token")
        localStorage.removeItem("admin")
        this.clearInputs();
        this.props.setGlobalState({
            authenticate: {
                username: "",
                isAdmin: false,
                isAuthenticated: false
            }
        })
    }
    clearInputs() {
        this.props.setGlobalState({
            userInfo: {
                username: "",
                password: ""
            }
        })
    }
    render() {
        const { props } = this
        const { songForm } = props
        return (
            <div className="adminWrapper">
                {this.props.authenticate.isAuthenticated === false &&
                    <form onSubmit={this.handleLogin} id="adminForm">
                        <input className="input" placeholder="username" value={this.props.userInfo.username} onChange={this.handleUserData} name="username" type="text" />
                        <input className="input" placeholder="password" value={this.props.userInfo.password} onChange={this.handleUserData} name="password" type="password" />
                        <button>Login </button>

                    </form>
                }
                {this.props.authenticate.isAuthenticated === true &&
                    <div >
                        <button onClick={this.handleLogout}> Logout </button>
                        <form onSubmit={this.handleSubmit}>
                            {/* //Composers List */}
                            <input placeholder="Seperate Composers by Comma" value={this.state.Composers} onChange={this.handleChange} name="Composers" type="text" />

                            {/* //lyricists Dropdown */}
                            <input placeholder="Seperate Lyricists by Comma" value={this.state.Lyricists} onChange={this.handleChange} name="Lyricists" type="text" />

                            {/* //Song Name */}
                            <input placeholder="Song Name" value={this.state.Song} onChange={this.handleChange} name="Song" type="text" />

                            {/* //Voice */}
                            <input placeholder="Song Voice" value={this.state.Voice} onChange={this.handleChange} name="Voice" type="text" />

                            {/* //Musical */}
                            <input placeholder="Musical" value={this.state.Musical} onChange={this.handleChange} name="Musical" type="text" />

                            {/* //Spotify Link */}
                            <input placeholder="Spotify Link" value={this.state.links.spotify} onChange={this.handleChange} name="spotify" type="text" />

                            {/* //Youtube Link */}
                            <input placeholder="Youtube Link" value={this.state.links.youtube} onChange={this.handleChange} name="youtube" type="text" />

                            <button> Submit Song</button>
                        </form>
                    </div>
                }
            </div>
        );
    }
}

export default connect(AdminPortal, null, {});
