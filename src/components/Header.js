import React from 'react';
import {Link} from 'react-router-dom'

function Header(){
    return(
        <div>
            <Link to="/about">About Page</Link>
            <br/>
            <Link to="/counter">Counter Page</Link>
            <br/>
            <Link to="/">Home Page</Link>
        </div>
    )
}

export default Header;