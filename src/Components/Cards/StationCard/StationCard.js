import React from 'react';
import './StationCard.css';
import LineIndicator from "../../Snippets/LineIndicator/LineIndicator";
import {connect} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSubway } from '@fortawesome/free-solid-svg-icons';

class StationCard extends React.Component {
    state = {

    };

    componentDidMount() {
        this.setState(
            {
                name: this.props.name,
                lines: this.props.lines,
                dist: this.props.dist,
                id: this.props.id
            }
        )
    }

    render() {
        return(
            <a className="station-card" href={"/station/" + this.props.id}>
                <span className="station-desc">
                    <span className="line-list">
                        <FontAwesomeIcon icon={faSubway} className="vehicle"/>
                        {this.props.lines.map(line => (
                           <LineIndicator line={line} />
                        ))}
                    </span>
                    <h3 className="station-name">{this.state.name}</h3>
                </span>
                <span className="station-dist">
                    <p className="station-dist-val">{this.state.dist}
                        <span className="station-dist-unit">mi</span>
                    </p>
                    <span className="arr">›</span>
                </span>
            </a>
        );
    }
}

const mapStateToProps = (state) => ({
    favoriteStations: state.favoriteStations,
    theme: state.theme
});

export default connect(mapStateToProps)(StationCard);