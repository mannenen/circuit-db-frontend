import React from 'react';
import { Link } from 'react-router-dom';


export default class HomeComponent extends React.Component {
    render() {
        return (
            <div>
                <Link to="/" className="card panel accent">Home</Link>
                <Link to="/search" className="card panel accent">Search</Link>
            </div>
        )
    }
}