export interface ContactInfo {
    email?: string;
    phone?: string;
}

export interface Customer {
    name: string;
    contact: ContactInfo;
}

export interface Address {
    street_1: string;
    street_2: string;
    city: string;
    state: string;
    zip: string;
}

export interface Circuit {
    cid: string;
    provider: string;
    customers: Customer[];
    a?: Address;
    z?: Address;
}