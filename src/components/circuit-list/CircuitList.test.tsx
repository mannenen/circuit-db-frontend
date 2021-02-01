import React from 'react';
import { render, screen } from '@testing-library/react';
import CircuitList from './CircuitList.component';

test('renders CircuitListComponent with no circuits', () => {
    render(<CircuitList />);
    const divElement = screen.getByText('No circuits loaded');
    expect(divElement).toBeInTheDocument();
});

test('renders CircuitList with circuit data', () => {
    var circuitData = [
        { cid: "farts-farts-farts-farts-farts" },
        { cid: "farts-balls-farts-balls-farts" },
        { cid: "balls-farts-balls-farts-balls" },
    ];

    render(<CircuitList circuits={circuitData} />);
    const tableElement = screen.getByRole('table', {
        name: "circuit-list-table"
    });
    expect(tableElement).toBeInTheDocument();
});