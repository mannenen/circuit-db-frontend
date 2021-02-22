import React from 'react';
import { Link } from 'react-router-dom';
import { Circuit } from '../../../models';

interface Props {}
interface State {
    circuits: Circuit[],
    isLoaded: boolean,
    error?: Error
}

export default class AllCircuits extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            circuits: [],
            isLoaded: false
        }
    }

    componentDidMount() {
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

    render() {
        let circuits = this.state.circuits.map((circuit, index) => {
            return (
                <Link to={`/circuits/${circuit.cid}`}>
                    <li key={circuit.cid} className="three-dp ib">
                        <div className="card panel accent">
                            <h3>{circuit.cid}</h3>
                            <ul className="dotless-list">
                                <li className="ib">{circuit.provider}</li>
                                <li className="ib right">{circuit.customers.length}</li>
                            </ul>
                        </div>
                    </li>
                </Link>
            )
        })
        if (this.state.error) {
            return (
                <div className="accent">{this.state.error}</div>
            )
        }
        if (this.state.isLoaded) {
            return (
                <ul className="dotless-list">{circuits}</ul>
            )
        } else {
            return (
                <div>Loading ... </div>
            )
        }
    }
}