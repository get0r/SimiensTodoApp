import React from 'react';
import PropTypes from 'prop-types';

const IconButton = ({ style, icon: Icon, iconStyle, onClick }) => {
    return (
        <button className={ style }
            onClick={ onClick }>
            <Icon className={ iconStyle } />
        </button>
    );
};

IconButton.propTypes = {
    style: PropTypes.string.isRequired,
    icon: PropTypes.node,
    onClick: PropTypes.func
};

export default IconButton;
