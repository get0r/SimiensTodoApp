import React from 'react';

import { CategoryList } from '..';
import { SideBar } from '../../layouts';
import { FAB, Modal } from '../../components';

import { PlusIcon } from '@heroicons/react/solid';

const Me = () => {
    const onModalClose = () => {

    }
    return (
        <>
            <CategoryList />
            <FAB icon={ PlusIcon } />
            <SideBar />
            <Modal onClose={ onModalClose }>
                <p>HI</p>
            </Modal>
        </>
    );
};

export default Me;
