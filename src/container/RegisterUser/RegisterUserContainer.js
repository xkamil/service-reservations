import React from 'react';
import {connect} from 'react-redux'
import {Route, Redirect  } from "react-router";

class RegisterUserContainer extends React.Component {

    getService(){
        const {match, services} = this.props;
        const serviceName = match.params.name;
        return services.items.filter(s => s.name === serviceName)[0];
    }

    render() {
        const service = this.getService();

        if(!service){
            return <Redirect to={'/'}/>
        }

        return (
            <React.Fragment>
                {service && service.id}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    services: state.services
});

export default connect(mapStateToProps)(RegisterUserContainer);

