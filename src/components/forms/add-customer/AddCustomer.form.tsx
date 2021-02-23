import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { 
    Formik,
    FormikHelpers,
    Form, 
    Field,
    ErrorMessage
} from 'formik';
import * as Yup from 'yup';
import './AddCustomerForm.css';

interface RouteParams { cid: string }
interface Props extends RouteComponentProps<RouteParams> {}
interface State {}

interface Values {
    name: string;
    email: string;
    phone?: string
}
 
export default class AddCustomerForm extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    private handleSubmit(values: Values, { setSubmitting }: FormikHelpers<Values>) {
        const cid: string = this.props.match.params.cid;
        fetch(`http://localhost:4000/api/v1/circuits/${cid}/customers`, {
            method: "post",
            body: JSON.stringify(values)
        })
    }

    render() { 
        const initialValues: Values = {
            name: "",
            email: "",
            phone: ""
        };

        const validation = Yup.object({
            name: Yup.string().required("You must provide a customer name"),
            email: Yup.string().email("A valid email address is required").required("A valid email address is required"),
            phone: Yup.string().notRequired().default('')
        });

        return (
            <Formik
                initialValues={initialValues}
                validationSchema={validation}
                onSubmit={this.handleSubmit}
            >
                <Form>
                    <div className="add-customer-grid-container">

                        <label htmlFor="name" className="add-customer-name-label">Customer Name</label>
                        <Field id="name" name="name" className="add-customer-name-input" />
                        <div className="add-customer-name-error">
                            <ErrorMessage name="name" />
                        </div>

                        <label htmlFor="email" className="add-customer-email-label">Email</label>
                        <Field id="email" name="email" type="email" className="add-customer-email-input" />
                        <div className="add-customer-email-error">
                            <ErrorMessage name="email" />
                        </div>
                        
                        <label htmlFor="phone" className="add-customer-phone-label">Phone</label>
                        <Field id="phone" name="phone" type="phone" className="add-customer-phone-input" />
                        <button type="submit" className="add-customer-submit-button">Add Customer</button>

                        
                        
                    </div>
                </Form>
            
            </Formik>
        );
    }
}