import React from 'react';
import PropTypes from 'prop-types';

const Typography = ({ text, style }) => {
    return (
        <p className={ style }>{ text }</p>
    );
};

Typography.propTypes = {
    text: PropTypes.string.isRequired,
    style: PropTypes.string,
};

export default Typography;
