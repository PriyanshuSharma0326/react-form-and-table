import React from 'react';
import './navbar.styles.scss';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbar-container'>
            <ul className="nav-links">
                <Link to='/' className="nav-link active">New Feedback</Link>
                <Link to='/view-data' className="nav-link">View Data</Link>
            </ul>
        </nav>
    );
}

export default Navbar;
