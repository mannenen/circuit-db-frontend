import React from 'react';
import { Form, IFields } from '../Form.component';
import { Field } from '../Field.component';
import { required } from '../Validators';

interface Props {
    cid: string;
}

export default class AddCustomerForm extends React.Component<Props> {
    render() {
        const fields: IFields = {
            name: {
                id: "name",
                label: "Name",
                validation: { rule: required }
            },
            email: {
                id: "email",
                label: "Email",
                validation: { rule: required }
            },
            phone: {
                id: "phone",
                label: "Phone"
            }
        }
        return (
            <Form
                action={`http://localhost:4000/api/v1/circuits/${this.props.cid}/customers`}
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