import { Customer } from "./customer.model";
import { Address } from "./address.model";

export interface Circuit {
    cid: string,
    provider: string,
    customers?: Array<Customer>,
    a?: Address,
    z?: Address
}