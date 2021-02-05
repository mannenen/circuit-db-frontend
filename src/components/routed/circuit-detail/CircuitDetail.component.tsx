import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Circuit } from '../../../models';
import CircuitInfo from './circuit-info/CircuitInfo.component';
import CustomerList from './customer-list/CustomerList.component';

interface TParams { cid: string }
interface Props extends RouteComponentProps<TParams> {}

interface State {
    circuit: Circuit;
    isLoaded: boolean;
}

export default class CircuitDetailComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            circuit: {
                cid: "",
                provider: "",
                customers: []
            },
            isLoaded: false
        }
    }
    
    componentDidMount() {
        let cid = this.props.match.params.cid;
        fetch(`http://localhost:42069/api/v1/circuits/${cid}`)
            .then(response => response.json())
            .then((data: Circuit) => {
                console.log(data);
                this.setState({
                    circuit: data,
                    isLoaded: true
                })
            }, (error) => {

            });
    }

    render() {
        let isLoaded = this.state.isLoaded;
        var jsx = 
            <div>
                { isLoaded ? 
                    <div className="panel four-dp">
                        <CircuitInfo circuit={this.state.circuit} />
                        <CustomerList customers={this.state.circuit.customers} />
                    </div>
                     : 
                    <div>
                        Loading circuit data
                    </div>
                }
            </div>

        return jsx;
    }
}