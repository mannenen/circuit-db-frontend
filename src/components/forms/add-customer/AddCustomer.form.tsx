import React from 'react';
import Form, { IFields } from '../Form.component';
import { Field } from '../Field.component';

interface Props {
    cid: string;
}

export default class AddCustomerForm extends React.Component<Props> {
    render() {
        const fields: IFields = {
            name: {
                id: "name",
                label: "Name",
            },
            email: {
                id: "email",
                label: "Email"
            },
            phone: {
                id: "phone",
                label: "Phone"
            }
        }
        return (
            <Form
                action={`http://localhost:42069/api/v1/circuits/${this.props.cid}/customers`}
                fields={fields}
                render={() => (
                    <React.Fragment>
                        <div className="alert alert-info" role="alert">
                            Please enter the customer information below. Phone number is optional.
                        </div>
                        <Field {...fields.name} />
                        <Field {...fields.email} />
                        <Field {...fields.phone} />
                    </React.Fragment>
                )}
            />
        )
    }
}