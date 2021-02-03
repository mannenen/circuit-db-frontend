import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomerDetail from './CustomerDetail.component';
import { Customer } from '../../models';

test('renders customer detail panel with full customer data', () => {
    const testCustomer: Customer = {
        name: "Testy McTesterson",
        email: "testy.mctesterson@gmail.biz",
        phone: "(555) 555-1234"
    };

    render(<CustomerDetail customer={testCustomer} />);
    const nameElement = screen.getByText(/Testy McTesterson/);
    const emailElement = screen.getByText("testy.mctesterson@gmail.biz");
    const phoneElement = screen.getByText("(555) 555-1234");

    expect(nameElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
    expect(phoneElement).toBeInTheDocument();
});