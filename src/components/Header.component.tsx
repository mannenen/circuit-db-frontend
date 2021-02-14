import React from 'react';
import { Link } from 'react-router-dom';


export default class Header extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to="/circuits">Circuit List</Link>
                <Link to="/admin">Admin Tools</Link>
            </div>
        )
    }
}