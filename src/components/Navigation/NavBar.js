import React from 'react';
import './NavBar.css';

function NavBar() {
    return (
        <div>
            <header>
                <div className="nav">
                    <ul>
                        <li className="tutorials"><a href='/home' className="active">Home</a></li>
                        <li className="news"><a href='/contact'>Contact Us</a></li>
                        <li className="news"><a href='/about'>About Us</a></li>
                        <li className="about"><a>Login</a></li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default NavBar;