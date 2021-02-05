import React from 'react';
import { Customer } from '../../../../models';
import CustomerDetailComponent from './customer-detail/CustomerDetail.component';

interface Props {
    customers: Customer[]
}
interface State {}

export default class CustomerList extends React.Component<Props, State> {
    render() {
        var customers = this.props.customers.map((customer, index) => {
            return (
                <li key={index}><CustomerDetailComponent customer={customer} /></li>
            )
        })
        return (
            <div className="panel">
                Customers:
                <ul className="dotless-list">
                    {customers}
                </ul>
            </div>
        )
    }
}