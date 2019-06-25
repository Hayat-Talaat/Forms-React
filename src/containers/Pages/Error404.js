import React, {Component} from 'react';

class Error404 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageName: 'Error 404'
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.pageName}
      </div>
    )
  }

}

export default Error404;
