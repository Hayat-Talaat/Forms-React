import React, { Component } from 'react';
import './NavBar.css';
import routes, {errorRoute} from '../../routes';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    
    eventListenerHandler (e) {
        e.preventDefault();
        const getAttr = e.target.getAttribute("href");
        window.history.pushState(null,null, getAttr);
    }

    render() {
        
        return (
            <div>
                <header>
                    <div className="nav">
                        <ul>
                            <li className="tutorials">
                                <a onClick={(e) => this.eventListenerHandler(e)} href='/home' className="active">Home</a>
                            </li>
                            <li className="news">
                                <a onClick={(e) => this.eventListenerHandler(e)} href='/contact'>Contact Us</a>
                            </li>
                            <li className="news">
                                <a onClick={(e) => this.eventListenerHandler(e)} href='/about'>About Us</a>
                            </li>
                            <li className="about">
                                <a onClick={(e) => this.eventListenerHandler(e)}>Login</a>
                            </li>
                        </ul>
                    </div>
                </header>
            </div>
        )
    }

}

export default NavBar;