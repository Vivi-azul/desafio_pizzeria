import React from "react";
import './Header.css';
import Navbar from './Navbar';
import headerImg from '../assets/Header.jpg';

function Header () {
    return (
        <header className="header"
        style={{ backgroundImage: `url(${headerImg})` }}
        >
           
            <div className="header-content">
                <h1>Mamma Mia</h1>
                <p>Tenemos las mejores pizzas que podrás encontrar!</p>
                </div>             
        </header>
    );
}

export default Header;