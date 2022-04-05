import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container bg-sky-900 py-5'>
            <nav>  
                <div className='header-style text-white'>
                    <CustomLink to="/Home">Home</CustomLink>
                    <CustomLink to="/Review">Review</CustomLink>
                    <CustomLink to="/Dashboard">Dashboard</CustomLink>
                    <CustomLink to="/Blogs">Blogs</CustomLink>
                    <CustomLink to="/About">About</CustomLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;