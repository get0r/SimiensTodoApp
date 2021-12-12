import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { CustomForm, Toast } from '../../components';
import { signUpSchema } from '../../helpers/formSchema';
import { signUp, userSelector } from '../../store/slices/user.slice';

const SignUp = () => {
    const dispatch = useDispatch()
    const { loading, hasErrors, error, user } = useSelector(userSelector);

    const handleSignUp = (values, setSubmitting) => {
        setSubmitting(true);
        dispatch(signUp(values));
    };

    if (hasErrors) {
        Toast('Error', error);
    }

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
                onSubmit={ handleSignUp }
                disableBtn={ !hasErrors }
                initialValues={ { firstName: '', lastName: '', username: '', password: '' } }
                submitName="Sign Up">
            </CustomForm>
        </div>
    );
};

export default SignUp;
