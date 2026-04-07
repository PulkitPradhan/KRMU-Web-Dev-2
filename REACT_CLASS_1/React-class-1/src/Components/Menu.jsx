import React from 'react';
import './App.css';

const Menu = () => {
    return (
        <nav className="menu">
            <div className="logo-text">MEDICHAIN AI</div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#sports">Sports</a></li>
                <li><a href="#politics">Politics</a></li>
                <li><a href="#about">About</a></li>
            </ul>
            <button className="login-btn">Dashboard</button>
        </nav>
    );
};

export default Menu;
