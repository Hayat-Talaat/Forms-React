import React, { Component } from 'react';
import routes, {errorRoute} from './routes';
import NavBar from './components/Navigation/NavBar'

class Routes extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(props) {
    }

    // Search
    search = (nameKey) => {
        for (let i = 0; i < routes.length; i++) {
            if (routes[i].path === nameKey) {
                return routes[i].Component;
            } 
        }
        return errorRoute.Component;
    }

    // Add Event listener
    eventListenerHandler = (e) => {
        e.preventDefault();
        let Anchors = document.getElementsByTagName('a');
        for (let i = 0; i < Anchors.length ; i++) {
            Anchors[i].addEventListener("click", 
                function (event) {
                    event.preventDefault();
                    window.location.pathname = this.href;
                    this.href.addClass('test');
                }, 
                false);
        }
    }


    render() {
        let currentPathname = window.location.pathname;
        return (
            <>
                <NavBar></NavBar>
                <button onClick={this.eventListenerHandler}>test</button>
                <a href="/home">homepage</a>
                <a href="/contact">contact</a>
                {this.search(currentPathname)}
            </>
        );




    }


}

export default Routes;
