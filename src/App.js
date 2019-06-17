import React from 'react';
import './App.css';
import NavBar from './components/Navigation/NavBar';
import Login from './containers/Auth/Login/Login';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Login></Login>
      <hr />
    </div>
  );
}

export default App;
