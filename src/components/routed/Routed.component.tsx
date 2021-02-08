import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import AllCircuits from './all-circuits/AllCircuits.component';
import CidSearch from './cid-search/CidSearch.component';
import CircuitDetail from './circuit-detail/CircuitDetail.component';


export default class Routed extends React.Component {
    render() {
        return (
            <Switch>
                <Route path={["/", "/search"]}>
                    <CidSearch />
                </Route>
                <Route path="/circuits/:cid" component={CircuitDetail} />
                <Route exact path="/circuits">
                    <AllCircuits />
                </Route>
            </Switch>
        )
    }
}