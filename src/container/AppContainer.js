import React from 'react';
import {connect} from 'react-redux'
import {updateServices} from "../redux/servicesActions";
import AppView from "./AppView";

class AppContainer extends React.Component {

    componentDidMount() {
        updateServices();
        setInterval(updateServices, 4000);
    }

    render() {
        const {config} = this.props;

        console.log(config);

        return (
            <React.Fragment>
              <AppView updating={config.updating} services={config.services} error={config.error}/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    config: state.config
});

export default connect(mapStateToProps)(AppContainer);

