import React, { Component } from 'react';
import routes, {errorRoute} from './routes';

class Routes extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(props) {
    }

    search = (nameKey) => {
        console.log(routes)
        for (let i = 0; i < routes.length; i++) {
            if (routes[i].path === nameKey) {
                return routes[i].Component;
            } 
        }
        return errorRoute.Component;
    }

    render() {
        let currentPathname = window.location.pathname;

        return (
            <>
                {this.search(currentPathname)}
            </>
        );




    }


}

export default Routes;
