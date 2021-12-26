import React from 'react';
import { ButtonType } from '../../assets/styles/theme';

const FAB = ({ icon: Icon, onClick }) => {
    return (
        <button
            className={ ButtonType.floating }
            onClick={ onClick }>
            <Icon />
        </button>
    );
};

export default FAB;
