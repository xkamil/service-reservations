import PropTypes from 'prop-types';
import * as React from "react";
import ServiceContainer from "./Service/ServiceContainer";

function ServiceListView(props) {
    const {services} = props;

    const serviceViews = services.items.map(service => <ServiceContainer
        service={service}
        key={service.id}/>
    );

    return (
        <React.Fragment>
            {serviceViews}
        </React.Fragment>
    );
}

ServiceListView.propTypes = {
    services: PropTypes.shape({
        updating: PropTypes.bool.isRequired,
        error: PropTypes.object,
        items: PropTypes.array.isRequired
    }).isRequired,
};

export default ServiceListView;