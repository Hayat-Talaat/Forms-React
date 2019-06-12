import React from 'react';
import './App.css';
import NavBar from './components/Navigation/NavBar';
import Form from './containers/Auth/Form';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Form></Form>
    </div>
  );
}

export default App;
