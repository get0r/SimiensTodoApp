import React, { useState } from 'react';
import propTypes from 'prop-types';

import { ButtonType, ContainerType, ImageType, TypographyType } from '../../../assets/styles/theme';
import DropdownMenu from './DropdownMenu';

const UserDropDown = ({ fullName, username }) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const handleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const onSignOut = () => {

    }
    return (
        <div className={ ContainerType.flexColCenter }>
            <button className={ ButtonType.userContainerBtn }
                onClick={ handleDropdown }>
                <div className={ ContainerType.roundedUserPhoto }>
                    <img
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                        className={ ImageType.fullCover } alt="avatar" />
                </div>

                <h3 className={ `${TypographyType.nameText} px-2 md:block hidden` }>{ fullName }</h3>
            </button>
            <DropdownMenu show={ isDropdownVisible } onSignOut={ onSignOut } />
        </div>
    );
};

UserDropDown.propTypes = {
    fullName: propTypes.string.isRequired,
    username: propTypes.string,
};

export default UserDropDown;

