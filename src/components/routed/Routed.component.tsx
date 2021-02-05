import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import CidSearchComponent from './cid-search/CidSearch.component';
import CircuitDetailComponent from './circuit-detail/CircuitDetail.component';
import HomeComponent from './home-component/Home.component';


export default class RoutedComponent extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/search">
                        <CidSearchComponent />
                    </Route>
                    <Route path="/circuits/:cid" component={CircuitDetailComponent} />
                    <Route exact path="/">
                        <HomeComponent />
                    </Route>
                </Switch>
            </Router>
        )
    }
}