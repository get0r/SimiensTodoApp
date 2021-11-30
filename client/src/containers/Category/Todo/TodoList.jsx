import React from 'react';

import { List } from '../../../components';
import TodoCard from './TodoCard';

const TodoList = () => {
    const onTodoDone = () => {

    };

    return (
        <List data={ [1, 2, 3] }
            card={ TodoCard }
            onItemClick={ onTodoDone }
        />
    );
};

export default TodoList;
