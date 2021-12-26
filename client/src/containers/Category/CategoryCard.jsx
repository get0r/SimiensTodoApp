import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { PlusIcon, XIcon } from '@heroicons/react/solid';

import { TypographyType, ContainerType, CardType, ButtonType } from '../../assets/styles/theme';
import { Typography, IconButton, Input } from '../../components';

import TodoList from './Todo/TodoList';

const CategoryCard = ({ item }) => {
    const [isAddTodoVisible, setIsAddTodoVisible] = useState(false);

    const showAddTodo = () => {
        setIsAddTodoVisible(!isAddTodoVisible);
    };

    return (
        <div class={ CardType.categoryCard }>
            <div class={ `${ContainerType.flexBetween} ${ContainerType.paddedContainerAuto}` }>
                <Typography variant="h1"
                    style={ TypographyType.xUpperText }
                    text="TODAY" />
                <IconButton style={ ButtonType.roundedIcon }
                    icon={ isAddTodoVisible ? XIcon : PlusIcon }
                    iconStyle={ ButtonType.blueIconWhite }
                    onClick={ showAddTodo } />
            </div>
            <TodoList />
            <Input show={ isAddTodoVisible } />
        </div>

    );
};

CategoryCard.propTypes = {
    item: PropTypes.any.isRequired,
}

export default CategoryCard;
