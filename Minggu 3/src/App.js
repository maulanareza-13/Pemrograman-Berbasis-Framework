// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Footer from './Footer';
import List from './List';


class App extends Component {

  render() {
    return (
      <div>
        <h1>Component dari Class App</h1>
       <List />
       <Footer judul='Halaman Footer' nama='Aufa'/>
     </div>
    );
  }
}
export default App;
