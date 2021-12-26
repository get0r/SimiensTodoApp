import React from 'react';

import { List } from '../../components';
import { GridType } from '../../assets/styles/theme';

import CategoryCard from './CategoryCard';

const CategoryList = () => {
    return (
        <List parentStyle={ GridType.horizontal }
            data={ [1, 2, 3, 4, 5, 6, 7, 8, 9] }
            card={ CategoryCard }

        />
    );
};

export default CategoryList;
