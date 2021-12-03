import React from 'react';

import { ContainerType } from '../../styles/theme';
import CategoryCard from '../../containers/Category/CategoryCard';
import CategoryList from '../../containers/Category/CategoryList';
import SideBar from '../SideBar/SideBar';


const Content = () => {
    return (
        <main className={ ` ${ContainerType.paddedContainerAuto} my-4` }>
            <SideBar />
            <CategoryList />
        </main>
    );
};

export default Content;
