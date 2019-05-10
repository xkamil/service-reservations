import React from 'react';
import {connect} from 'react-redux'
import ServiceListView from "./ServiceListView";

class ServiceListContainer extends React.Component {

    render() {
        const {services} = this.props;

        return (
            <ServiceListView services={services}/>
        );
    }
}

const mapStateToProps = (state) => ({
    services: state.services
});

export default connect(mapStateToProps)(ServiceListContainer);

