import PropTypes from 'prop-types';
import * as React from "react";
import {getDateDiff, isDateInFuture} from "../../../DateTimeUtils";
import ServiceDetailsContainer from "./ServiceDetails/ServiceDetailsContainer";

export default function ServiceView(props) {
    const {service, onClick, showDetails} = props;

    return (
        <div className={'service'} onClick={onClick}>
            <div className={'service-free-slots'}>
                <div>{service.free_slots}<img src={'./users.png'}/></div>
            </div>
            <div className={'service-name'}>{service.name}</div>
            {showDetails ?
                <ServiceDetailsContainer service={service}/>
                :
                <ServiceUsersView users={service.users}/>
            }
        </div>
    )
}

ServiceView.propTypes = {
    service: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    showDetails: PropTypes.bool.isRequired
};

function ServiceUsersView(props) {
    const {users} = props;

    const usersViews = users.map(user => <ServiceUserView
        user={user}
        key={user.name}/>
    );

    return (
        <div className={'service-users'}>
            {usersViews}
        </div>
    );
}

ServiceUsersView.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            to: PropTypes.string.isRequired
        })
    ).isRequired
};

//TODO should be container
class ServiceUserView extends React.Component {

    state = {
        date: null
    };

    componentDidMount() {
        setInterval(this.updateDate, 1000);
    }

    updateDate = () => {
        const {user} = this.props;
        const date = getDateDiff(Date.now(), Date.parse(user.to));
        this.setState({date});
    };

    render() {
        const {user} = this.props;
        const {date} = this.state;

        if (!isDateInFuture(Date.parse(user.to))) {
            return null;
        }

        return (
            <div className={'service-user'}>
                <span className={'user-name'}>{user.name} </span>
                <span className={'user-time'}>{date}</span>
            </div>
        );
    }
}

ServiceUserView.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
    }).isRequired
};
