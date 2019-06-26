import React, { Component } from 'react';
import routes, {errorRoute} from './routes';
import NavBar from './components/Navigation/NavBar'

class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeComponent: errorRoute.Component
        }
    }

    
    componentDidMount(prevProps) {
        this.setState({
            activeComponent: this.getActiveComponent()
        });
    }
    getActiveComponent = () => {
        for (let i = 0; i < routes.length; i++) {
            if (routes[i].path === window.location.pathname) {
                return routes[i].Component;
            } 
        }
        return errorRoute.Component;
    }


    render() {
        return (
            <>
                <NavBar></NavBar>
                {this.state.activeComponent}
            </>
        );




    }


}

export default Router;
