import React from 'react';
import { Circuit } from '../../../../../models';
import './CircuitPanel.css';


interface Props {
    circuit: Circuit;
}
interface State {}

export default class CircuitPanel extends React.Component<Props, State> {
    render() {
        const { cid, customers, provider } = this.props.circuit;
        return (
            <div className="card panel three-dp">
                <div>CID: <span className="emphasis">{cid}</span></div>
                <div>{provider}<span className="right">{customers.length}</span></div>
            </div>
        );
    }
}