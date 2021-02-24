import React from 'react';
import { Circuit } from '../../../models';
import AddressDisplay from '../address-display/AddressDisplay.component';
import './CircuitInfo.css';

interface Props {
    circuit: Circuit
}
interface State {}

export default class CircuitInfo extends React.Component<Props, State> {
    render() {
        let { cid, a, z } = this.props.circuit;
        return (
            <div className="circuit-info-grid-container">
                <div className="circuit-info-cid">Circuit ID: {cid}</div>
                {
                    a &&
                    <div className="circuit-info-a-location">
                        <AddressDisplay address={a} />
                    </div>
                }
                {
                    z &&
                    <div className="circuit-info-z-location">
                        <AddressDisplay address={z} />
                    </div>
                }
            </div>
        )
    }
}