import React from 'react';
import PropTypes from 'prop-types'

import { CardType } from '../../../styles/theme';
import { CheckBox } from '../../../components';


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

