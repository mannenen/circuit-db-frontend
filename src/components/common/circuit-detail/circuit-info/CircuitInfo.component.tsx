import React from 'react';
import { Circuit } from '../../../../models';
import AddressDisplay from './address-display/AddressDisplay.component';

interface Props {
    circuit: Circuit
}
interface State {}

export default class CircuitInfo extends React.Component<Props, State> {
    render() {
        let { provider, cid, a, z } = this.props.circuit;
        return (
            <div>
                <h3>{cid}</h3>
                <h4>{provider}</h4>
                {
                    (a || z) && 
                    <div className="panel">Endpoints:
                        <ul className="dotless-list">
                        {
                            a &&
                            <li className="ib">
                                <AddressDisplay address={a} />
                            </li>
                        }
                        {
                            z &&
                            <li className="ib">
                                <AddressDisplay address={z} />
                            </li>
                        }
                        </ul>
                    </div>
                }
            </div>
        )
    }
}