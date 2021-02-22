import React from 'react';
import CircuitPanel from './circuit-panel/CircuitPanel.component';
import { Circuit } from '../../../../models';
import './CircuitList.component.css';

interface Props {
    circuits: Circuit[]
}
interface State {}

export default class CircuitList extends React.Component<Props, State> {
    render() {
        const circuits = this.props.circuits.map((circuit) => {
            return <li key={circuit.cid}>
                       <CircuitPanel circuit={circuit} />
                    </li>;
        });
        return (
            <ul className="circuit-list-flex-container accent">
                {circuits}
            </ul>
        );
    }
}