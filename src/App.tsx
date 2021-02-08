import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routed from './components/routed/Routed.component';
import './App.css';
import Header from './components/Header.component';

interface AppProps {}
interface AppState {}

export default class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <Router>
        <div className="panel two-dp">
          <Header />
        </div>
        <div className="panel two-dp">
          <Routed />
        </div>
      </Router>
    )
  }
}