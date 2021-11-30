import React from 'react';

import { NavType, ContainerType } from '../../styles/theme';

import Logo from './Logo';
import UserDropDown from './UserDropdown/UserDropdown';

const NavBar = () => {
    return (
        <nav className={ NavType.primary }>
            <div className={ ContainerType.paddedContainerAuto }>
                <div className={ `${ContainerType.fullWidth} ${ContainerType.flexBetween}` }>
                    <Logo />
                    <UserDropDown fullName="Abebe Dagne" />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
