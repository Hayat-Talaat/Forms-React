import React, {Component} from 'react';
import './App.css';
import NavBar from './components/Navigation/NavBar';
import Router from './router';
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="App">
        <Router />
        <Footer />
      </div>
    )
  }

}

export default App;
