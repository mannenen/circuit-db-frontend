import React from 'react';
import { Link } from 'react-router-dom';


export default class HeaderComponent extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
            </div>
        )
    }
}