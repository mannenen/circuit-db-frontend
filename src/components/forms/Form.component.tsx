import React from 'react';
import { IFieldProps } from './Field.component';

export interface IFields {
    [key: string]: IFieldProps;
}

interface IFormProps {
    action: string;
    fields: IFields;
    render: () => React.ReactNode;
}

export interface IValues {
    [key: string]: any;
}

export interface IErrors {
    [key: string]: string;
}

export interface IFormState {
    values: IValues;
    errors: IErrors;
    submitSuccess?: boolean;
}

export interface IFormContext extends IFormState {
    setValues: (values: IValues) => void;
}
const defaultFormContext: IFormContext = {
    setValues: (values: IValues) => {

    },
    values: {},
    errors: {}
}
export const FormContext = React.createContext<IFormContext>(defaultFormContext);

export default class Form extends React.Component<IFormProps, IFormState> {
    constructor(props: IFormProps) {
        super(props);

        const errors: IErrors = {};
        const values: IValues = {};
        this.state = {
            errors,
            values
        };
    };

    private setValues = (values: IValues) => {
        this.setState({ values: { ...this.state.values, ...values}});
    }

    private haveErrors(errors: IErrors) {
        let haveErrors: boolean = false;
        Object.keys(errors).forEach((error) => {
            if (error.length > 0) {
                haveErrors = true;
            }
        });
        return haveErrors;
    }

    private handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        e.preventDefault();

        const formValues: IValues = this.state.values;
        console.log(formValues);

        if (this.validateForm()) {
            const submitSuccess: boolean = await this.submitForm();
            this.setState({ submitSuccess });
        }
    }

    private validateForm(): boolean {
        return true;
    }

    private async submitForm(): Promise<boolean> {
        return fetch(this.props.action, {
            method: "POST",
            body: JSON.stringify(this.state.values)
        })
        .then((response: Response) => response.ok)
    }

    public render() {
        const { submitSuccess, errors } = this.state;
        const context: IFormContext = {
            ...this.state,
            setValues: this.setValues
        }
        return (
            <FormContext.Provider value={context}>
                <form onSubmit={this.handleSubmit} noValidate={true}>
                    <div className="container">
                        {this.props.render()}
                        <div className="form-group">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={this.haveErrors(errors)}
                                >
                                Submit
                            </button>
                        </div>
                        {submitSuccess && (
                            <div className="alert alert-info" role="alert">
                                The form was successfully submitted
                            </div>
                        )}
                        {submitSuccess === false &&
                            !this.haveErrors(errors) && (
                                <div className="alert alert-danger">
                                    Sorry, an unexpected error occurred
                                </div>
                        )}
                        {submitSuccess === false &&
                            this.haveErrors(errors) && (
                                <div className="alert alert-danger">
                                    Sorry, the form is invalid. Please review, adjust and try again
                                </div>
                        )}
                    </div>
                </form>
            </FormContext.Provider>
        );
    }
}