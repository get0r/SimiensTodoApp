import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Toast from '../../components/common/Toast';

import { CustomForm } from '../../components';
import { signInSchema } from '../../helpers/formSchema';
import { userSelector, signIn } from '../../store/slices/user.slice';
import { isAuthenticated } from '../../helpers/isAuthenticated';

const SignIn = () => {
    const dispatch = useDispatch();
    const { hasErrors, error } = useSelector(userSelector);

    const handleSignIn = (values, setSubmitting) => {
        setSubmitting(true);
        dispatch(signIn(values));
    };

    if (hasErrors) {
        Toast('Error', error);
    }

    return (
        <div className='w-1/3 mx-auto'>
            <CustomForm
                fields={ [
                    { label: 'Username', type: 'text', name: 'username', placeholder: 'abebe' },
                    { label: 'Password', type: 'text', name: 'password', placeholder: 'Password' }
                ] }
                validationSchema={ signInSchema }
                onSubmit={ handleSignIn }
                disableBtn={ !hasErrors }
                initialValues={ { username: '', password: '' } }
                submitName="Sign In">
            </CustomForm>
        </div>
    );
};

export default SignIn;
