import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routed from './components/routed/Routed.component';
import './App.css';
import Header from './components/Header.component';


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="panel sixteen-dp">
          <Header />
        </div>
        <div className="panel sixteen-dp">
          <Routed />
        </div>
      </Router>
    )
  }
}