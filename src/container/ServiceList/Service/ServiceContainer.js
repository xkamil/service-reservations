import PropTypes from 'prop-types';
import React from 'react';
import ServiceView from "./ServiceView";
import DisposablePopup from "../../../component/DisposablePopup";

class ServiceContainer extends React.Component {

    state = {
        showPopup: false,
        serviceDetails: false
    };

    onServiceClicked = () => {
        this.setState((prevState, props) => ({
            serviceDetails: !prevState.serviceDetails
        }));
    };

    onPopupOkButtonClicked = () => {
        this.setState({showPopup: false})
    };

    render() {
        const {service} = this.props;
        const {showPopup, serviceDetails} = this.state;

        return (
            <div className={'service-container'}>
                {showPopup &&
                <DisposablePopup message={'No free spoots left'} okButton={this.onPopupOkButtonClicked}/>
                }
                <ServiceView service={service} onClick={this.onServiceClicked} showDetails={serviceDetails}/>
            </div>
        )
    }
}

ServiceContainer.propTypes = {
    service: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        free_slots: PropTypes.number.isRequired,
        users: PropTypes.array.isRequired
    }).isRequired,
};


export default ServiceContainer;

