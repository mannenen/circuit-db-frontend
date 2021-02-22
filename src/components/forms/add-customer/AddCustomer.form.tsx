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
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="name">Customer Name</label>
                        <Field id="name" name="name" />
                        <ErrorMessage name="name" />

                        <label htmlFor="email">Email</label>
                        <Field id="email" name="email" type="email" />
                        <ErrorMessage name="email" />

                        <label htmlFor="phone">Phone</label>
                        <Field id="phone" name="phone" type="phone" />

                        <button type="submit">Add Customer</button>
                    </Form>
                )}
                
            </Formik>
        );
    }
}