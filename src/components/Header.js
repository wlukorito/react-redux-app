import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <h4 className="navbar-brand">Leagues & Teams</h4>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <button className="btn btn-secondary text-white">Click on a league to view teams</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
