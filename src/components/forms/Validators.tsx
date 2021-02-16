import { IValues } from "./Form.component";

export const required = (values: IValues, fieldName: string): string =>
    values[fieldName] === undefined ||
    values[fieldName] === null ||
    values[fieldName] === ""
        ? "This field is required"
        : "";


export const isEmail = (values: IValues, fieldName: string): string =>
    values[fieldName] &&
    values[fieldName].search(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
        ? "Not a valid email"
        : "";


export const maxLength = (
    values: IValues,
    fieldName: string,
    length: number
): string =>
    values[fieldName] && values[fieldName].length > length
        ? `Cannot exceed ${length} characters`
        : "";