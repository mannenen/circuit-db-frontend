import React from 'react';
import FooterComponent from './components/footer/error-display/ErrorDisplay.component';
import HeaderComponent from './components/header/Header.component';
import RoutedComponent from './components/routed/Routed.component';
import './App.css';

interface AppProps {}
interface AppState {}

export default class App extends React.Component<AppProps, AppState> {
  render() {
    return <div>
      <HeaderComponent />
      <RoutedComponent />
      <FooterComponent />
    </div>
  }
}