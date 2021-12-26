import React from 'react';
import PropTypes from 'prop-types'

import { CheckBox } from '../../../components';
import { CardType } from '../../../assets/styles/theme';


const TodoCard = ({ item, onClick }) => {
    return (
        <div class={ CardType.todoCard }>
            <CheckBox text="First Task" onChecked={ onClick } />
        </div>
    );
};

TodoCard.propTypes = {
    item: PropTypes.any,
    onClick: PropTypes.func,
};

export default TodoCard;

