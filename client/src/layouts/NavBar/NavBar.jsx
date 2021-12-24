import React from 'react';

import { NavType, ContainerType } from '../../styles/theme';

import Logo from './Logo';
import UserDropDown from './UserDropdown/UserDropdown';
import { isAuthenticated } from '../../helpers/isAuthenticated';
import { useSelector } from 'react-redux';
import { authSelector } from '../../store/slices/auth.slice';
import { userSelector } from '../../store/slices/user.slice';

const NavBar = () => {
    const { user } = useSelector(userSelector);
    const { token } = useSelector(authSelector);
    const isAuth = isAuthenticated(token);

    return (
        <nav className={ NavType.primary }>
            <div className={ ContainerType.paddedContainerAuto }>
                <div className={ `${ContainerType.fullWidth} ${ContainerType.flexBetween}` }>
                    <Logo />
                    { isAuth == 1 && user ? <UserDropDown fullName={ `${user.fname} ${user.lname}` } /> : null }
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
