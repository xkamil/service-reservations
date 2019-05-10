import PropTypes from 'prop-types';
import React from 'react';
import ServiceDetailsView from "./ServiceDetailsView";

class ServiceDetailsContainer extends React.Component {

    state = {
        totalTime: 0
    };

    onAddTimeBtnClicked = (time) => {
        this.setState((prevState, props) => ({
            totalTime: prevState.totalTime + time
        }))
    };

    onResetBtnClicked = () => {
       this.setState({totalTime: 0})
    };

    render() {
        const {service} = this.props;
        const {totalTime} = this.state;

        return (
            <ServiceDetailsView service={service} onAddTimeBtnClicked={this.onAddTimeBtnClicked} totalTime={totalTime} onResetBtnClicked={this.onResetBtnClicked}/>
        )
    }
}

ServiceDetailsContainer.propTypes = {
    service: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        free_slots: PropTypes.number.isRequired,
        users: PropTypes.array.isRequired
    }).isRequired,
};


export default ServiceDetailsContainer;

