import React from 'react';
import AddCircuitForm from '../../../forms/add-circuit/AddCircuit.form';

interface IProps {}
interface IState {
    formRows: number
}

export default class BulkAddCircuits extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            formRows: 1
        }

        this.addFormRow = this.addFormRow.bind(this);
        this.removeFormRow = this.removeFormRow.bind(this);
    }

    private addFormRow() {
        this.setState({
            formRows: this.state.formRows + 1
        })
    }

    private removeFormRow() {
        this.setState({
            formRows: this.state.formRows > 1 ? this.state.formRows - 1 : 1
        })
    }
    
    render() {
        let formRows: React.ReactFragment[] = [];
        for (let i = 0; i < this.state.formRows; i++) {
            formRows.push(
                <AddCircuitForm />
            )
        }
        return (
            <div>
                <button onClick={this.addFormRow}>Add Row</button>
                <button onClick={this.removeFormRow}>Remove Row</button>
                <form action="http://localhost:42069/api/v1/circuits">
                    {formRows}
                </form>
            </div>
        )

    }
}