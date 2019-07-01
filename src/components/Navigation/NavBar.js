import React, { Component } from 'react';
import './NavBar.css';
import Events from '../../containers/EventSystem/Event';
import routes, {errorRoute} from '../../routes';
import { Scope } from '@babel/traverse';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {            
            active: false
        }
        
    }

    
    eventListenerHandler (e, index, n) {
        e.preventDefault();
        const getAttr = e.target.getAttribute("href");
        window.history.pushState(null,null, getAttr);
        Events.fire('changeRoute');
        this.setState(prevState => ({ active: !prevState.active }));
    }   

    render() {
        const { active } = this.state;

        return (
            <div>
                <header>
                    <div className="nav">
                        <ul>
                            <li className="tutorials">
                                <a 
                                    onClick={(e) => this.eventListenerHandler(e)} 
                                    href='/home' 
                                    className={active ? "" : " active"} >
                                    Home
                                </a>
                            </li>
                            <li className="news">
                                <a 
                                    onClick={(e) => this.eventListenerHandler(e)} 
                                    href='/contact'
                                    className={active ? "" : " active"}>
                                    Contact Us
                                </a>
                            </li>
                            <li className="news">
                                <a 
                                    onClick={(e) => this.eventListenerHandler(e)} 
                                    href='/about'
                                    className={active ? "" : " active"}>
                                    About Us
                                </a>
                            </li>
                            <li className="about">
                                <a 
                                    onClick={(e) => this.eventListenerHandler(e)}
                                    href='/login'
                                    >
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