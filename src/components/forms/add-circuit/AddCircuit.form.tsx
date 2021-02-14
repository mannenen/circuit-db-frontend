import React from 'react';
import Form, { IFields } from '../Form.component';
import { Field } from '../Field.component';


export default class AddCircuitForm extends React.Component {
    render() {
        const fields: IFields = {
            cid: {
                id: "cid",
                label: "Circuit ID"
            },
            provider: {
                id: "provider",
                label: "Provider"
            }
        }
        return (
            <Form
                action={"http://localhost:42069/api/v1/circuits"}
                fields={fields}
                render={() => (
                    <React.Fragment>
                        <div className="alert alert-info">
                            Please enter new circuit information.
                        </div>
                        <Field {...fields.cid} />
                        <Field {...fields.provider} />
                    </React.Fragment>
                )}
            />
        )
    }
}