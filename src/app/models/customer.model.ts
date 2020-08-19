import { ContactInfo } from './contact-info.model';

export interface Customer {
    name: string,
    contact?: ContactInfo
}