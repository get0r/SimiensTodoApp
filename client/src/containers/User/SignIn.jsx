import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Toast from '../../components/common/Toast';

import { CustomForm } from '../../components';
import { userSelector, signIn } from '../../store/slices/user.slice';
import { signInInitials, signInSchema } from '../../helpers/formSchemas/userSchema';

const SignIn = () => {
    const dispatch = useDispatch();
    const { user, hasErrors, error } = useSelector(userSelector);

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
                initialValues={ signInInitials }
                submitName="Sign In">
            </CustomForm>
        </div>
    );
};

export default SignIn;
