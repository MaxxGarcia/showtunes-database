import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar'>
            <Link className="navBtn" to='/' id='Home'>Home</Link>
            <Link className="navBtn"to='/AdvancedSearch' id='AdvancedSearch'>AdvancedSearch</Link>
            {/* <Link  className="navBtn" to='/Results' id='Results'>Results</Link> */}
            <Link  className="navBtn" to='/AdminPortal' id='AdminPortal'>Admin Portal</Link>
        </div>
    )
}
export default Navbar
