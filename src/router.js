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
                }, 
                false);
        }
    }


    render() {
        let currentPathname = window.location.pathname;
        return (
            <>
                <NavBar></NavBar>
                {this.search(currentPathname)}
            </>
        );




    }


}

export default Routes;
