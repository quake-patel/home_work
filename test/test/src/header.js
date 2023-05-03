import React from 'react';
import {Link} from 'react-router-dom';

const Header =() =>{
    return(
        <div className="header">
            <div className="container head">
                <h3 className='logo'>logo</h3>
                <ul className="nav">
                    <li><Link to="">Home</Link></li>
                    <li><Link to="./create.js">Create</Link></li>
                    <li><Link to="">About</Link></li>
                    <li><a href="">Sign Up</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;