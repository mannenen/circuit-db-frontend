import React from 'react';
import { Customer } from '../../../../../models';

interface Props {
    customer: Customer;
}
interface State {}

export default class CustomerDetail extends React.Component<Props, State> {
    render() {
        let name = this.props.customer.name;
        let { email, phone } = this.props.customer.contact;
        return (
            <div className="panel four-dp">
                <h4>{name}</h4>
                <ul>
                    <li className="ib left">{email}</li>
                    {
                        phone &&
                        <li className="ib right">{phone}</li>
                    }
                </ul>
            </div>
        )
    }
}