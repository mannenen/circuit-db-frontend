import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import AddCustomerForm from '../forms/add-customer/AddCustomer.form';
import Admin from './admin/Admin.component';
import BulkAddCircuits from './admin/bulk-add-circuits/BulkAddCircuits.component';
import AllCircuits from './all-circuits/AllCircuits.component';
import CidSearch from './cid-search/CidSearch.component';
import CircuitDetail from './circuit-detail/CircuitDetail.component';


export default class Routed extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/circuits/:cid/add-customer" component={AddCustomerForm} />
                <Route path="/circuits/:cid" component={CircuitDetail} />
                <Route path="/circuits">
                    <AllCircuits />
                </Route>
                <Route path="/admin/bulk-add-circuits">
                    <BulkAddCircuits />
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