import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from "riddl-js"

function Navbar(props) {
    return (
        <div className='navbar'>
            <Link className="navBtn" to='/' id='Home'>Home</Link>
            <Link className="navBtn"to='/AdvancedSearch' id='AdvancedSearch'>AdvancedSearch</Link>
            {/* <Link  className="navBtn" to='/Results' id='Results'>Results</Link> */}
            {props.authenticate.isAuthenticated && <Link  className="navBtn" to='/AdminPortal' id='AdminPortal'>Admin Portal</Link>}
        </div>
    )
}
export default connect(Navbar, null, {});
