import React from 'react';

import { CustomForm } from '../../components';

const SignIn = () => {
    return (
        <div className='w-1/3 mx-auto'>
            <CustomForm
                fields={ [
                    { label: 'Username', type: 'text', name: 'username', placeholder: 'abebe' },
                    { label: 'Password', type: 'text', name: 'password', placeholder: 'Password' }
                ] }
                onSubmit={ (values) => console.log(values) }
                initialValues={ { username: '', password: '' } }
                submitName="Sign In">
            </CustomForm>
        </div>
    );
};

export default SignIn;
