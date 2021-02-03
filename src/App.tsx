import React from 'react';
import './App.css';
import { Circuit } from './models';
import CircuitList from './components/circuit-list/CircuitList.component';

interface AppProps {}
interface AppState {
  circuits: Circuit[];
  isLoaded: boolean;
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      circuits: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch('http://localhost:42069/api/v1/circuits')
      .then(response => response.json())
      .then((data: Circuit[]) => {
        console.log(data);
        
        this.setState({
          circuits: data,
          isLoaded: true
        });
      }, (error) => {
        this.setState({
          circuits: [],
          isLoaded: false
        });
      });
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <div className="App">
          <CircuitList circuits={this.state.circuits} />
        </div>
      );
    } else {
      return (
        <div className="App">
          Loading circuit data...
        </div>
      );
    }
  }
}