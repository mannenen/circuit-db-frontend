import React from 'react';
import { Circuit } from '../../models';
import './CircuitList.component.css';

interface CircuitListProps {
    circuits?: Circuit[]
}

interface CircuitListState {}

export default class CircuitList extends React.Component<CircuitListProps, CircuitListState> {
    render() {
        return <div />;
    }
}