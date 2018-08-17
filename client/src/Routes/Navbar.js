import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import { connect } from "riddl-js";

function Navbar(props) {
    const {location: {pathname}} = props;
    console.log(props);
    return (
        <div className='navbar'>
            {pathname !== "/" && 
              <Link className="navBtn"
                    to='/' 
                    id='Home'>Home</Link>}
            {pathname !== "/AdvancedSearch" && 
              <Link className="navBtn"    
                    to='/AdvancedSearch' 
                    id='AdvancedSearch'>Advanced<br/>Search</Link>}
            {pathname !== "/AdminPortal" && (props.authenticate.isAuthenticated) &&
               <Link  className="navBtn"  
                    to='/AdminPortal'   
                     id='AdminPortal'>Admin<br/>Portal</Link>}
        </div>
    )
}
export default connect(withRouter(Navbar), null, {})
