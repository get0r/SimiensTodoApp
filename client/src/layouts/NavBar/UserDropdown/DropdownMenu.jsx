import React from 'react';
import PropTypes from 'prop-types';

import { ButtonType, CardType } from '../../../assets/styles/theme';

const DropdownMenu = ({ show, onSignOut, onChangePassword }) => {
    if (!show) return null;

    return (
        <div className={ CardType.userDropDown }>
            <div className="py-1">
                <button className={ ButtonType.primaryTextPadded } onClick={ onSignOut }>Change Password</button>
                <button className={ ButtonType.primaryTextPadded } onClick={ onChangePassword }>Sign Out</button>
            </div>
        </div>
    );
};

DropdownMenu.propTypes = {
    show: PropTypes.string.isRequired,
    onSignOut: PropTypes.func.isRequired,
    onChangePassword: PropTypes.func.isRequired,
};

export default DropdownMenu;

