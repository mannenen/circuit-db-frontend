import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routed from './components/routed/Routed.component';
import Header from './components/header/Header.component';
import './App.css';


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="sixteen-dp">
          <Header />
        </div>
        <div className="sixteen-dp">
          <Routed />
        </div>
      </Router>
    )
  }
}