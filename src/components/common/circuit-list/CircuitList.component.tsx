import React from 'react';
import { Link } from 'react-router-dom';
import CircuitPanel from '../circuit-panel/CircuitPanel.component';
import { Circuit } from '../../../models';
import './CircuitList.component.css';

interface Props {
    circuits: Circuit[]
}
interface State {
    circuits: Circuit[],
    isLoaded: boolean,
    error?: Error
}

export default class CircuitList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = this.props.circuits.length === 0 ? {
            circuits: [],
            isLoaded: false
        } : {
            circuits: this.props.circuits.slice(),
            isLoaded: true
        }
    }

    componentDidMount() {
        if (!this.state.isLoaded && this.state.circuits.length === 0) {
            fetch('http://localhost:4000/api/v1/circuits')
            .then(response => response.json())
            .then((data: Circuit[]) => {
                this.setState({
                    circuits: data,
                    isLoaded: true
                })
            }, (error) => {
                this.setState({
                    circuits: [],
                    isLoaded: false,
                    error: error
                })
            });
        }
    }

    render() {
        
        if (this.state.error) {
            return (
                <div className="accent">{this.state.error}</div>
            )
        }
        if (this.state.isLoaded) {
            return (
                <div className="circuit-list-flex-container">{
                    this.state.circuits.map((circuit) => {
                        return (
                            <Link to={`/circuits/${circuit.cid}`} className="circuit-list-flex-item accent">
                                <CircuitPanel circuit={circuit} />
                            </Link>
                        );
                    })
                }</div>
            );
        } else {
            return (
                <div>Loading ... </div>
            )
        }
    }
}