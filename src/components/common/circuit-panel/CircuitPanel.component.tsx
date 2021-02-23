import React from 'react';
import { Circuit } from '../../../models';
import './CircuitPanel.css';


interface Props {
    circuit: Circuit;
}
interface State {}

export default class CircuitPanel extends React.Component<Props, State> {
    render() {
        const { cid, customers, provider } = this.props.circuit;
        return (
            <div className="four-dp circuit-panel-grid-container">
                <div className="circuit-panel-cid">{cid}</div>
                <div className="circuit-panel-provider">{provider}</div>
                <div className="circuit-panel-customers">{customers.length}</div>
            </div>
        );
    }
}