import React from 'react';
import PropTypes from 'prop-types';

import { ContainerType, TypographyType } from '../../styles/theme';

import TodoTitleCard from './TodoTitleCard';

const SideBar = ({ show }) => {

    if(!show) return null;

    return (
        <div class={ ContainerType.sideBar }>
            <TodoTitleCard />
        </div>
    );
};

SideBar.propTypes = {
    show: PropTypes.bool,
};

export default SideBar;
