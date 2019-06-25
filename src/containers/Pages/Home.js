import React, {Component} from 'react';

//form { isValid, submitted, fields {}}

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageName: 'Homepage'
        }
    }

    render() {
        return (
            <div className="home">
                {this.state.pageName}

            </div>
        );
    }
}

export default HomePage;