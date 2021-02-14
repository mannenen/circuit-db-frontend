import React from 'react';
import { Link } from 'react-router-dom';


export default class Admin extends React.Component {
    render() {
        return (
            <div>
                <Link to="/admin/bulk-add-circuits">Bulk Add Circuits</Link>
            </div>
        )
    }
}