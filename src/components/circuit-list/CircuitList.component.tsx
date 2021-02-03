import React from 'react';
import CircuitDetail from '../circuit-detail/CircuitDetail.component';
import { Circuit } from '../../models';
import './CircuitList.component.css';

interface CircuitListProps {
    circuits: Circuit[]
}
interface CircuitListState {}

export default class CircuitList extends React.Component<CircuitListProps, CircuitListState> {
    render() {
        const circuits = this.props.circuits.map((circuit) => {
            return <li key={circuit.cid}><CircuitDetail circuit={circuit} /></li>;
        });
        return (
            <ul>
                {circuits}
            </ul>
        );
    }
}