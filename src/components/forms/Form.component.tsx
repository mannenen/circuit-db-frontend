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
    validate: (fieldName: string) => void;
}

const defaultFormContext: IFormContext = {
    setValues: (values: IValues) => {},
    validate: (fieldName: string) => {},
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

    private validate = (fieldName: string): string => {
        let newError: string = "";

        if (
            this.props.fields[fieldName] &&
            this.props.fields[fieldName].validation
        ) {
            newError = this.props.fields[fieldName].validation!.rule(
                this.state.values,
                fieldName,
                this.props.fields[fieldName].validation!.args
            );
        }

        this.setState({
            errors: { ...this.state.errors, [fieldName]: newError }
        });
        return newError;
    }

    private validateForm(): boolean {
        const errors: IErrors = {};
        Object.keys(this.props.fields).map((fieldName: string) => {
            errors[fieldName] = this.validate(fieldName);
        })
        this.setState({ errors });
        return !this.haveErrors(errors);
    }

    private async submitForm(): Promise<boolean> {
        try {
            const response = await fetch(this.props.action, {
                method: "POST",
                headers: new Headers({
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }),
                body: JSON.stringify(this.state.values)
            });
            if (response.status === 400) {
                let responseBody: any = await response.json();
                const errors: IErrors = {};
                Object.keys(responseBody).map((key: string) => {
                    errors[key] = responseBody[key]
                });
                this.setState({ errors });
            }
            return response.ok;
        } catch (ex) {
            return false;
        }
    }

    public render() {
        const { submitSuccess, errors } = this.state;
        const context: IFormContext = {
            ...this.state,
            setValues: this.setValues,
            validate: this.validate
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