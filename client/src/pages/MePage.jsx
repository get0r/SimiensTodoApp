import React from 'react';

import { PlusIcon } from '@heroicons/react/solid';

import { Layout, SideBar } from '../layouts';
import { CategoryList } from '../containers';
import { FAB } from '../components';


const MePage = () => {
    return (
        <Layout>
            <CategoryList />
            <FAB icon={ PlusIcon } />
            <SideBar />
        </Layout>
    );
};

export default MePage;
