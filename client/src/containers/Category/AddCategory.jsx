import React from 'react';

import { CustomForm } from '../../components';

const AddCategory = () => {
    return (
        <CustomForm
            fields={ [
                { label: 'Username', type: 'text', name: 'username', placeholder: 'abebe' },
                { label: 'Password', type: 'text', name: 'password', placeholder: 'Password' }
            ] }
            initialValues={ { username: '', password: '' } }
            submitName="Sign In">
        </CustomForm>
    );
};

export default AddCategory;
