import React from 'react';
import { Customer } from '../../../../models';
import CustomerDetail from './customer-detail/CustomerDetail.component';
import './CustomerList.css';

interface Props {
    customers: Customer[]
}
interface State {}

export default class CustomerList extends React.Component<Props, State> {
    render() {
        var customers = this.props.customers.map((customer, index) => {
            return (
                <div className="customer-list-flex-item">
                    <CustomerDetail customer={customer} />
                </div>
            )
        })
        return (
            <div className="customer-list-panel">
                <div className="customer-list-emphasis">Customers</div>
                <div className="customer-list-flex-container">
                    {customers}
                </div>
            </div>
        )
    }
}