import React, {Component} from 'react';

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageName: 'About us'
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

export default AboutUs;
