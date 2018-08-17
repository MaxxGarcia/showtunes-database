import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from "riddl-js";


class Navbar extends Component {
    constructor(){
        super()
        this.state = {}
        this.reloadpage = this.reloadpage.bind(this);
    }
    reloadpage(){
        console.log("test")
        window.location.reload()
    }
    render() {
        const { location: { pathname } } = this.props;
        let randomSong = this.props.songData[Math.floor(Math.random() * this.props.songData.length)];
        return (
            <div className='navbar'>
                {pathname !== "/" &&
                    <Link className="navBtn"
                        to='/'
                        id='Home'>Home</Link>}
                {pathname !== "/AdvancedSearch" &&
                    <Link className="navBtn"
                        to='/AdvancedSearch'
                        id='AdvancedSearch'>Advanced<br />Search</Link>}
                {pathname !== "/AdminPortal" && (this.props.authenticate.isAuthenticated) &&
                    <Link className="navBtn"
                        to='/AdminPortal'
                        id='AdminPortal'>Admin<br />Portal</Link>}
                {pathname !== "AdvancedSearch" && randomSong &&
                    <Link className="navBtn"
                        to={`/songprofile/${randomSong._id}`} onClick={this.reloadpage}> Random Song</Link>}
            </div>
        )
    }
}
export default connect(withRouter(Navbar), null, {})
