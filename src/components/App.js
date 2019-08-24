import React from 'react';
import Header from './Header';
import Leagues from './Leagues';
import Teams from './Teams';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row pt-4">
                        <div className="col-4">
                            <div className="card">
                                <div className="card-header">
                                    <h6 className="card-title">Leagues</h6>
                                </div>
                                <div className="card-body">
                                    <Leagues />
                                </div>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="card">
                                <div className="card-header">
                                    <h6 className="card-title">Teams</h6>
                                </div>
                                <div className="card-body">
                                    <Teams />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
