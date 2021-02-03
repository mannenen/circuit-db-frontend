import React from 'react';
import { Circuit } from '../../models';
import './CircuitDetail.css';


interface CircuitDetailProps {
    circuit: Circuit;
}
interface CircuitDetailState {}

export default class CircuitDetail extends React.Component<CircuitDetailProps, CircuitDetailState> {
    render() {
        const { cid, customers, provider } = this.props.circuit;
        return (
            <div className="card panel three-dp">
                <ul>
                    <li><div>CID: <span className="emphasis">{cid}</span></div></li>
                    <li><div>{provider}</div></li>
                    <li><div className="right">{customers.length}</div></li>
                </ul>
            </div>
        );
    }
}