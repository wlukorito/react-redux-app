import React from 'react';
import { connect } from 'react-redux';

const Teams = ({ teams }) => {
    if (teams.length !== 0) {
        return teams.teams.map(t => (
            <div className="list-group-item text-capitalize" key={t.id}>
                {t.name}
            </div>
        ));
    }
    return <div>Please select a league</div>;
};

const mapStateToProps = state => {
    return {
        teams: state.teams
    };
};

export default connect(mapStateToProps)(Teams);
