import PropTypes from 'prop-types';
import * as React from "react";

function AppView(props) {
    const {updating, services, error} = props;

    return (
        <div className={'row'}>
            {services.map(service => <ServiceView service={service} key={service.id}/>)}
        </div>
    );
}

AppView.propTypes = {
    updating: PropTypes.bool.isRequired,
    services: PropTypes.array.isRequired,
    error: PropTypes.object
};

function ServiceView(props) {
    const {service} = props;

    return (
        <div className={'col-6 col-md-4'}>
            <div className={'service-container'}>
                <div className={'service-slots'}>
                    <div>{service.free_slots}<img src={'./users.png'}/></div>
                </div>
                <div className={'service-name'}>{service.name}</div>
                <ServiceUsersView users={service.users}/>
            </div>
        </div>
    )
}


function ServiceUsersView(props) {
    const {users} = props;

    return (
        <div className={'service-users'}>
            {users && users.map(user => <ServiceUserView user={user}/>)}
        </div>
    );
}

class ServiceUserView extends React.Component {

    state = {
        time: null
    };

    componentDidMount() {
        const {user} = this.props;

        setInterval(() => {
            this.setState({time: getDateDiff(Date.now(), Date.parse(user.to))})
        }, 1000)
    }

    render() {
        const {user} = this.props;
        const {time} = this.state;

        if(!time){
            return null;
        }

        return (
            <div className={'service-user'}>
                <span className={'service-user-name'}>{user.name} </span>
                <span className={'service-user-time'}>{time}</span>
            </div>
        );
    }
}

function getDateDiff(date1, date2) {
    const diff = Math.floor((date2 - date1) / 1000);
    const seconds = diff % 60;
    const minutes = Math.floor(diff / 60) % 60;
    const hours = Math.floor(diff / 3600);

    return diff > 0 ? `${hours}:${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}` : null;
}

export default AppView;