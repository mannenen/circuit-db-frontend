import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import AllCircuitsComponent from './all-circuits/AllCircuits.component';
import CidSearchComponent from './cid-search/CidSearch.component';
import CircuitDetailComponent from './circuit-detail/CircuitDetail.component';
import HomeComponent from './home-component/Home.component';


export default class RoutedComponent extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/search">
                    <CidSearchComponent />
                </Route>
                <Route path="/circuits/:cid" component={CircuitDetailComponent} />
                <Route exact path="/circuits">
                    <AllCircuitsComponent />
                </Route>
                <Route exact path="/">
                    <HomeComponent />
                </Route>
            </Switch>
        )
    }
}