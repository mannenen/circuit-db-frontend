import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import FooterComponent from './components/footer/error-display/ErrorDisplay.component';
import HeaderComponent from './components/header/Header.component';
import RoutedComponent from './components/routed/Routed.component';
import './App.css';

interface AppProps {}
interface AppState {}

export default class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <Router>
        <div className="panel two-dp">
          <HeaderComponent />
        </div>
        <div className="panel two-dp">
          <RoutedComponent />
        </div>
        <div className="panel two-dp">
          <FooterComponent />
        </div>
      </Router>
    )
  }
}