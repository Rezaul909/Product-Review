import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container bg-sky-900 py-5'>
            <nav>  
                <div className='header-style text-white'>
                    <Link to="/Home">Home</Link>
                    <Link to="/Reviews">Reviews</Link>
                    <Link to="/Dashboard">Dashboard</Link>
                    <Link to="/Blogs">Blogs</Link>
                    <Link to="/About">About Us</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;