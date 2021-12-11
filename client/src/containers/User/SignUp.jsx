import React from 'react';

import { CustomForm, Toast } from '../../components';
import { signUpSchema } from '../../helpers/formSchema';

const SignUp = () => {
    console.log(Toast('Hey', 'You are doing great'));
    return (
        <div className='w-1/3 mx-auto'>
            <CustomForm
                fields={ [
                    { label: 'First Name', type: 'text', name: 'firstName', placeholder: 'Abebe' },
                    { label: 'Last Name', type: 'text', name: 'lastName', placeholder: 'Kebede' },
                    { label: 'Username', type: 'text', name: 'username', placeholder: 'abebe' },
                    { label: 'Password', type: 'text', name: 'password', placeholder: 'Password' }
                ] }
                validationSchema={ signUpSchema }
                onSubmit={ (values, setSubmitting) => { setSubmitting(true); setTimeout(() => { setSubmitting(false); console.log(values) }, 3000) } }
                initialValues={ { firstName: '', lastName: '', username: '', password: '' } }
                submitName="Sign Up">
            </CustomForm>
        </div >
    );
};

export default SignUp;
