import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer'
import HornedBeast from './HornedBeast';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Proof of life!</h1>
        <Header />
        <Main />
        <Footer />

      </div>
    );
  }
}

export default App;
