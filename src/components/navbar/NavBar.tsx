import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const navBar = () => {

    return (
        <div className={'navbar'}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/kitchen">Kitchen</Link>
                </li>
                <li>
                    <Link to="/office">Office</Link>
                </li>
                <li>
                    <Link to="/other">Other</Link>
                </li>
            </ul>
        </div>
    );
}

export default navBar;