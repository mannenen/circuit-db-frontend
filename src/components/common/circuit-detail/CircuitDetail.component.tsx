import React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { Circuit } from '../../../models';
import CircuitInfo from '../circuit-info/CircuitInfo.component';
import CustomerList from '../customer-list/CustomerList.component';
import './CircuitDetail.css';

interface TParams { cid: string }
interface Props extends RouteComponentProps<TParams> {}

interface State {
    circuit: Circuit;
    isLoaded: boolean;
}

export default class CircuitDetail extends React.Component<Props, State> {
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
        fetch(`http://localhost:4000/api/v1/circuits/${cid}`)
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
                    <div className="four-dp">
                        <CircuitInfo circuit={this.state.circuit} />
                        <CustomerList customers={this.state.circuit.customers} />
                        <div className="circuit-detail-link-holder">
                            <Link to={`/circuits/${this.state.circuit.cid}/add-customer`}>
                                <div className="accent circuit-detail-button">
                                    Add New Customer
                                </div>
                            </Link>
                        </div>
                        
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