import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar'>
            <Link to='/' id='Home'>Home</Link>
            <Link to='/Search' id='Search'>Search</Link>
            <Link to='/Results' id='Results'>Results</Link>
            <Link to='/AdminPortal' id='AdminPortal'>Admin Portal</Link>
        </div>
    )
}
export default Navbar
