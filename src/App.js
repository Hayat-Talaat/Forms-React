import React from 'react';
import './App.css';
import NavBar from './components/Navigation/NavBar';
import Login from './containers/Auth/Login/Login';
import SignUp from './containers/Auth/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Login></Login>
      <hr />
      <SignUp></SignUp>
    </div>
  );
}

export default App;
