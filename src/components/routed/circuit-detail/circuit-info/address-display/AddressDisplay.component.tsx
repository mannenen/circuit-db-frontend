import React from 'react';
import { Address } from '../../../../../models';

interface Props {
    address: Address
}
interface State {}

export default class AddressDisplay extends React.Component<Props, State> {
    render() {
        let {street_1, street_2, city, state, zip } = this.props.address;
        return (
            <div className="card panel four-dp">
                <ul className="dotless-list">
                    <li>{street_1}</li>
                    {street_2 && <li>{street_2}</li>}
                    <li>{city}, {state} {zip}</li>
                </ul>
            </div>
        )
    }
}