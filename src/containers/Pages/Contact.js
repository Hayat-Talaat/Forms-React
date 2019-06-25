import React, {Component} from 'react';

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageName: 'contact us'
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

export default ContactUs;
