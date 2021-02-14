import React from 'react';
import { 
    IErrors,
    IFormContext,
    FormContext    
} from './Form.component';

type Editor = "textbox" | "multilinetextbox" | "dropdown";

export interface IFieldProps {
    id: string;
    label?: string;
    editor?: Editor;
    options?: string[];
    value?: any;
}

export const Field: React.FunctionComponent<IFieldProps> = ({
    id,
    label,
    editor,
    options,
    value
}) => {
    return (
        <FormContext.Consumer>
            {(context: IFormContext) => (
                <div className="form-group">
                    {label && <label htmlFor={id}>{label}</label>}
        
                    {editor!.toLowerCase() === "textbox" && (
                        <input
                            id={id}
                            type="text"
                            value={value}
                            onChange={
                                (e: React.FormEvent<HTMLInputElement>) =>
                                    context!.setValues({ [id]: e.currentTarget.value })
                            }
                            onBlur={
                                (e: React.FormEvent<HTMLInputElement>) =>
                                    console.log(e)
                            }
                            className="form-control"
                        />
                    )}
        
                    {editor!.toLowerCase() === "multilinetextbox" && (
                        <textarea
                            id={id}
                            value={value}
                            onChange={
                                (e: React.FormEvent<HTMLTextAreaElement>) =>
                                    context!.setValues({ [id]: e.currentTarget.value })
                            }
                            onBlur={
                                (e: React.FormEvent<HTMLTextAreaElement>) =>
                                console.log(e)
                            }
                            className="form-control"
                        />
                    )}
        
                    {editor!.toLowerCase() === "dropdown" && (
                        <select
                            id={id}
                            name={id}
                            value={value}
                            onChange={
                                (e: React.FormEvent<HTMLSelectElement>) =>
                                    context!.setValues({ [id]: e.currentTarget.value })
                            }
                            onBlur={
                                (e: React.FormEvent<HTMLSelectElement>) =>
                                console.log(e)
                            }
                            className="form-control"
                        >
                            {options &&
                                options.map(option => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))
                            }
                        </select>
                    )}
                </div>
            )}
        </FormContext.Consumer>
    );
};
Field.defaultProps = {
    editor: "textbox"
};