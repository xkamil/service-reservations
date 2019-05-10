import React from 'react';
import PropTypes from 'prop-types';

function DisposablePopup(props) {
    const {message, okButton, cancelButton} = props;

    return (
        <div className={'popup-container'}>
            <div className={'popup'}>
                <span className={'popup-message'}>{message}</span>
                <div className={'popup-buttons'}>
                    {okButton &&
                    <span className={'popup-button'} onClick={okButton}>OK</span>
                    }
                    {cancelButton &&
                    <span className={'popup-button'} onClick={cancelButton}>CANCEL</span>
                    }
                </div>
            </div>
        </div>
    );
}

DisposablePopup.popTypes = {
    message: PropTypes.string.isRequired,
    okButton: PropTypes.func,
    cancelButton: PropTypes.func,
};

export default DisposablePopup;