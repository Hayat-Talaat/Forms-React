import React, { Component } from 'react';
import './NavBar.css';
import Events from '../../containers/EventSystem/Event';
import routes, {errorRoute} from '../../routes';
import { Scope } from '@babel/traverse';

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

        Events.fire('changeRoute');
    }

    render() {
        return (
            <div>
                <header>
                    <div className="nav">
                        <ul>
                            <li className="tutorials">
                                <a 
                                    onClick={(e) => this.eventListenerHandler(e)} 
                                    href='/home' 
                                    className="active">
                                    Home
                                </a>
                            </li>
                            <li className="news">
                                <a 
                                    onClick={(e) => this.eventListenerHandler(e)} 
                                    href='/contact'>
                                    Contact Us
                                </a>
                            </li>
                            <li className="news">
                                <a 
                                    onClick={(e) => this.eventListenerHandler(e)} 
                                    href='/about'>
                                    About Us
                                </a>
                            </li>
                            <li className="about">
                                <a 
                                    onClick={(e) => this.eventListenerHandler(e)}>
                                    Login
                                </a>
                            </li>
                        </ul>
                    </div>
                </header>
            </div>
        )
    }

}

export default NavBar;