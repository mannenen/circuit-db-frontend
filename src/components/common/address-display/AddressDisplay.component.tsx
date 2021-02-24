import React from 'react';
import { Address } from '../../../models';
import './AddressDisplay.css';

interface Props {
    address: Address
}
interface State {}

export default class AddressDisplay extends React.Component<Props, State> {
    render() {
        let {street_1, street_2, city, state, zip } = this.props.address;
        return (
            <div className="four-dp address-display-grid-container">
                <div className="address-display-street1">{street_1}</div>
                {street_2 && <div className="address-display-street2">{street_2}</div>}
                <div className="address-display-city">{city}, {state} {zip}</div>
            </div>
        )
    }
}