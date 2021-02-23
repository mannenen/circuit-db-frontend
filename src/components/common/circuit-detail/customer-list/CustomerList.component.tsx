import React from 'react';
import { Customer } from '../../../../models';
import CustomerDetail from './customer-detail/CustomerDetail.component';

interface Props {
    customers: Customer[]
}
interface State {}

export default class CustomerList extends React.Component<Props, State> {
    render() {
        var customers = this.props.customers.map((customer, index) => {
            return (
                <li key={index}><CustomerDetail customer={customer} /></li>
            )
        })
        return (
            <div className="panel">
                Customers:
                <ul>
                    {customers}
                </ul>
            </div>
        )
    }
}