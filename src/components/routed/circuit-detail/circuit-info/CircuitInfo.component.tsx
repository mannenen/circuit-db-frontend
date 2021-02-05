import React from 'react';
import { Circuit } from '../../../../models';
import AddressDisplayComponent from './address-display/AddressDisplay.component';

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
                                <AddressDisplayComponent address={a} />
                            </li>
                        }
                        {
                            z &&
                            <li className="ib">
                                <AddressDisplayComponent address={z} />
                            </li>
                        }
                        </ul>
                    </div>
                }
            </div>
        )
    }
}