import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PhotoGallery from './components/PhotoGallery'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to my image gallery</h1>
        </header>
        <PhotoGallery></PhotoGallery>
      </div>
    );
  }
}

export default App;
