import React from 'react';
import PropTypes from 'prop-types';

const List = ({ data, card: Card, parentStyle, onItemClick }) => {
    return (
        <ul className={ parentStyle }>
            {
                data ? data.map(item => <Card item={ item } onClick={ onItemClick } />) : null
            }
        </ul>
    );
};

List.propTypes = {
    data: PropTypes.array.isRequired,
    card: PropTypes.node,
    parentStyle: PropTypes.string,
    onItemClick: PropTypes.func,
};

export default List;
