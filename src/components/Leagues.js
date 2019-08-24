import React from 'react';
import { fetchLeagues, fetchTeams, selectLeague } from '../actions';
import { connect } from 'react-redux';

class Leagues extends React.Component {
    componentDidMount() {
        this.props.fetchLeagues();
    }

    renderLeagues = (leagues, selctdLig) => {
        return leagues.map(l => (
            <div
                className={`list-group-item text-capitalize ${
                    parseInt(l.id) === selctdLig.selectedLeague ? 'active' : ''
                }`}
                key={l.id}
                onClick={() => {
                    this.props.selectLeague(l.id);
                    this.props.fetchTeams(l.id);
                }}>
                {l.name}
            </div>
        ));
    };

    render() {
        if (this.props.leagues.leagues) {
            return <div>{this.renderLeagues(this.props.leagues.leagues, this.props.selectedLeague)}</div>;
        }

        return <div>Loading...</div>;
    }
}

const mapStateToProps = state => {
    return {
        leagues: state.leagues,
        selectedLeague: state.selectedLeague
    };
};

export default connect(
    mapStateToProps,
    { fetchLeagues, fetchTeams, selectLeague }
)(Leagues);
