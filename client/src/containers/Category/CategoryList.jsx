import React from 'react';

import { List } from '../../components';
import { GridType } from '../../styles/theme';

import CategoryCard from './CategoryCard';

const CategoryList = () => {
    return (
        <List parentStyle={ GridType.horizontal }
            data={ [1] }
            card={ CategoryCard }

        />
    );
};

export default CategoryList;
