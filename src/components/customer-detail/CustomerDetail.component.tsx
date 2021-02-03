import React from "react";
import { Customer } from "../../models";
import './CustomerDetail.css';


interface CustomerDetailProps {
    customer: Customer
}
interface CustomerDetailState {}

export default class CustomerDetail extends React.Component<CustomerDetailProps, CustomerDetailState> {
    render() {
        const name = this.props.customer.name;
        const { email, phone } = this.props.customer.contact;
        return (
            <div className="panel card eight-dp">
                <h3>{name}</h3>
                <ul>
                    <li>{email}</li>
                    <li>{phone}</li>
                </ul>
            </div>
        )
    }
}