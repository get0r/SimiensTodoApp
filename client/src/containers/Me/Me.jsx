import React from 'react';

import { CategoryList } from '..';
import { SideBar } from '../../layouts';
import { FAB, Modal } from '../../components';

import { PlusIcon } from '@heroicons/react/solid';
import AddCategory from '../Category/AddCategory';

const Me = () => {
    const onModalClose = () => {

    }
    return (
        <>
            <CategoryList />
            <FAB icon={ PlusIcon } />
            <SideBar />
            <Modal show onClose={ onModalClose }>
                <AddCategory />
            </Modal>
        </>
    );
};

export default Me;
