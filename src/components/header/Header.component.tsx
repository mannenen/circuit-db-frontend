import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


export default class Header extends React.Component {
    render() {
        return (
            <div className="header-flex-container header-top">
                <Link to="/" className="accent header-left header-btn">
                    Home
                </Link>
                <Link to="/circuits" className="accent header-left header-btn">
                    Circuit List
                </Link>
                <Link to="/admin" className="accent header-btn header-right">
                    Admin Tools
                </Link>
            </div>
        )
    }
}