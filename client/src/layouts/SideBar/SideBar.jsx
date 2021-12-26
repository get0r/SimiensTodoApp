import React from 'react';
import PropTypes from 'prop-types';

import { ContainerType, TypographyType } from '../../assets/styles/theme';

import TodoTitleCard from './TodoTitleCard';
import CloseButton from './CloseButton';

const SideBar = ({ show }) => {

    if (!show) return null;

    return (
        <>
            <div className='h-full w-full fixed top-0 right-0 opacity-50 bg-gray-200'></div>
            <div class={ ContainerType.sideBar }>
                <CloseButton />
                <TodoTitleCard />
                <TodoTitleCard />
                <TodoTitleCard />
                <TodoTitleCard />
            </div>
        </>
    );
};

SideBar.propTypes = {
    show: PropTypes.bool,
};

export default SideBar;
