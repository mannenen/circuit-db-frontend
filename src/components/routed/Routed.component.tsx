import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import AddCustomerForm from '../forms/add-customer/AddCustomer.form';
import Admin from './admin/Admin.component';
import CidSearch from './cid-search/CidSearch.component';
import CircuitDetail from '../common/circuit-detail/CircuitDetail.component';
import CircuitList from '../common/circuit-list/CircuitList.component';


export default class Routed extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/circuits/:cid/add-customer" component={AddCustomerForm} />
                <Route path="/circuits/:cid" component={CircuitDetail} />
                <Route path="/circuits">
                    <CircuitList circuits={[]} />
                </Route>
                <Route path="/admin">
                    <Admin />
                </Route>

                {/* These routes need to be absolute dead last otherwise they match everything */}
                <Route path={["/", "/search"]}>
                    <CidSearch />
                </Route>
            </Switch>
        )
    }
}