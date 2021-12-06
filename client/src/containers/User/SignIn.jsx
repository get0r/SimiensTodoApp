import React from 'react';

import { CardType, ContainerType } from '../../styles/theme';
import { CustomForm } from '../../components';

const SignIn = () => {
    return (
        <div className='w-1/3 mx-auto'>
            <CustomForm
                fields={ [{ label: 'Full Name', type: 'text', name: 'fullName', placeholder: 'Ex. Abebe kebede' },
                { label: 'Username', type: 'text', name: 'username', placeholder: 'abebe' },
                { label: 'Password', type: 'text', name: 'password', placeholder: 'Password' }] }
                onSubmit={ (values) => console.log(values) }
                initialValues={ { fullName: '', username: '', password: '' } }
                submitName="Sign In">
            </CustomForm>
        </div>
    );
};

export default SignIn;
