import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutedComponent from './components/routed/Routed.component';
import './App.css';

interface AppProps {}
interface AppState {}

export default class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <Router>
        <div className="panel two-dp">
          <RoutedComponent />
        </div>
      </Router>
    )
  }
}