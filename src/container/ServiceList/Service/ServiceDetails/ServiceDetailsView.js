import PropTypes from 'prop-types';
import * as React from "react";
import {formatDate} from "../../../../DateTimeUtils";

export default function ServiceDetailsView(props) {
    const {service, onClick, showDetails, onAddTimeBtnClicked, onResetBtnClicked, totalTime} = props;

    return (
        <div className={'service-details'} onClick={onClick}>
            <TotalTimeView totalTime={totalTime}/>
            <div className={'service-details-time-buttons'}>
                <ResetTimeButton onBtnClick={() => onResetBtnClicked()} label={'reset'}/>
                <AddTimeButton onBtnClick={() => onAddTimeBtnClicked(10 * 60)} label={'+10m'}/>
                <AddTimeButton onBtnClick={() => onAddTimeBtnClicked(30 * 60)} label={'+30m'}/>
                <AddTimeButton onBtnClick={() => onAddTimeBtnClicked(60 * 60)} label={'+60m'}/>
                <AcceptTimeButton onBtnClick={()=>{}}/>
            </div>
        </div>
    )
}

ServiceDetailsView.propTypes = {
    service: PropTypes.object.isRequired,
    onAddTimeBtnClicked: PropTypes.func.isRequired
};


function AddTimeButton(props) {
    const {label, onBtnClick} = props;

    const handleClick = (e) => {
        e.stopPropagation();
        onBtnClick()
    };

    return (
        <div type={'button'} className={'btn-time btn-time-add'} onClick={handleClick}>{label}</div>
    );
}

AddTimeButton.propTypes = {
    label: PropTypes.string.isRequired,
    onBtnClick: PropTypes.func.isRequired,
};

function AcceptTimeButton(props) {
    const {onBtnClick} = props;

    const handleClick = (e) => {
        e.stopPropagation();
        onBtnClick()
    };

    return (
        <div type={'button'} className={'btn-time btn-time-accept'} onClick={handleClick}>OK</div>
    );
}

AddTimeButton.propTypes = {
    onBtnClick: PropTypes.func.isRequired,
};


function ResetTimeButton(props) {
    const {label, onBtnClick} = props;

    const handleClick = (e) => {
        e.stopPropagation();
        onBtnClick()
    };

    return (
        <div type={'button'} className={'btn-time btn-time-reset'} onClick={handleClick}>{label}</div>
    );
}

function TotalTimeView(props) {
    const {totalTime, onClick} = props;

    return (
        <div className={'service-details-total-time'}>
            <div className={'total-time-label'}>{formatDate(totalTime)}</div>
        </div>
    );
}


