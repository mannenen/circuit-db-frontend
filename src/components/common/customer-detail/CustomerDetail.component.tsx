import React from 'react';
import { Customer } from '../../../models';
import './CustomerDetail.css';

interface Props {
    customer: Customer;
}
interface State {}

export default class CustomerDetail extends React.Component<Props, State> {
    render() {
        let name = this.props.customer.name;
        let { email, phone } = this.props.customer.contact;
        return (
            <div className="four-dp customer-detail-grid-container">
                <div className="customer-detail-grid-item customer-detail-name">{name}</div>
                <div className="customer-detail-grid-item customer-detail-email">{email}</div>
                {phone && <div className="customer-detail-grid-item customer-detail-phone">{phone}</div>}
            </div>
        )
    }
}