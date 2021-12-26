import React from 'react';
import { PlusIcon } from '@heroicons/react/solid';

import { CategoryList } from '..';
import { SideBar } from '../../layouts';
import { FAB, Modal } from '../../components';
import { useModal } from '../../helpers/hooks/useModal';

import AddCategory, { ADD_CATEGORY_MODAL } from '../Category/AddCategory';


const Me = () => {

    const [isVisible, toggle] = useModal();

    return (
        <>
            <CategoryList />
            <FAB icon={ PlusIcon } onClick={ () => toggle(ADD_CATEGORY_MODAL) } />
            <SideBar />
            <Modal show={ isVisible === ADD_CATEGORY_MODAL } title="Add New Category" onClose={ toggle }>
                <AddCategory />
            </Modal>
        </>
    );
};

export default Me;
