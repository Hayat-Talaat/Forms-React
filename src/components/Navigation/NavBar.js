import React from 'react';
import './NavBar.css';

function NavBar() {
    return (
        <div>
            <header>
                <div class="nav">
                    <ul>
                        <li class="tutorials"><a class="active" href="#">Home</a></li>
                        <li class="about"><a>Login</a></li>
                        <li class="news"><a>SignUp</a></li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default NavBar;