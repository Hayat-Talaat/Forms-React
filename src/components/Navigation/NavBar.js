import React from 'react';
import './NavBar.css';

function NavBar() {
    return (
        <div>
            <header>
                <div class="nav">
                    <ul>
                        <li className="tutorials"><a class="active" href="#">Home</a></li>
                        <li className="about"><a>Login</a></li>
                        <li className="news"><a>SignUp</a></li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default NavBar;