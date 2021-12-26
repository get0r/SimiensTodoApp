import React from 'react';

import { CustomForm } from '../../components';
import { categoryInitials, categorySchema } from '../../helpers/formSchemas/categorySchema';

const AddCategory = () => {
    return (
        <CustomForm
            fields={ [
                { label: 'Title', type: 'text', name: 'title', placeholder: 'To Be Done' },
                { label: 'Sub Title', type: 'text', name: 'subTitle', placeholder: 'tasks to be done today' }
            ] }
            initialValues={ categoryInitials }
            validationSchema={ categorySchema }
            submitName="Add Category">
        </CustomForm>
    );
};

export default AddCategory;

export const ADD_CATEGORY_MODAL = 'ADD_CATEGORY';