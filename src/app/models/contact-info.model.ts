interface EmailOnly {
    email: string
}

interface PhoneOnly {
    phone: string
}

interface EmailAndPhone {
    email: string,
    phone: string
}

export type ContactInfo = EmailOnly | PhoneOnly | EmailAndPhone;