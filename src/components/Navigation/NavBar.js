import React from 'react';
import './NavBar.css';

function NavBar() {
    return (
        <div>
            <header>
                <div className="nav">
                    <ul>
                        <li className="tutorials"><a className="active">Home</a></li>
                        <li className="about"><a>Login</a></li>
                        <li className="news"><a>SignUp</a></li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default NavBar;