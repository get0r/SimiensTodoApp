import React from 'react';
import PropTypes from 'prop-types';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import { ButtonType } from '../assets/styles/theme';


const CustomForm = ({ fields, initialValues, onSubmit, validationSchema, disableBtn, submitName }) => {

    const generateFields = (formikObj) => {
        let key = 0;
        const fieldStyle = 'w-full px-4 py-2 text-base border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1';
        const { errors, touched } = formikObj;

        return fields.map(field => (
            <div key={ key++ }>
                <label className="block text-gray-700">{ field.label }</label>
                <Field type={ field.type }
                    id={ field.name }
                    name={ field.name }
                    placeholder={ field.placeholder }
                    className={ errors[field.name] && touched[field.name] ? `${fieldStyle}` : fieldStyle } />
                <div className="text-red-600 font-serif p-2">
                    <ErrorMessage name={ field.name } />
                </div>
            </div>
        ));
    };

    return (
        <Formik { ...{ initialValues, validationSchema, onSubmit: (values, { setSubmitting }) => onSubmit(values, setSubmitting) } }>
            {
                (formik) => (
                    <Form noValidate>
                        { generateFields(formik) }
                        <button type="submit" disabled={ !(formik.isValid && formik.dirty && !formik.isSubmitting) && disableBtn } className={ ButtonType.primary }>
                            { formik.isSubmitting && disableBtn ? 'Please wait...' : submitName }
                        </button>
                    </Form>
                )
            }
        </Formik>
    );
};

CustomForm.propTypes = {
    fields: PropTypes.array.isRequired,
    submitName: PropTypes.string.isRequired,
    onSubmit: PropTypes.func,
    validationSchema: PropTypes.object,
    initialValues: PropTypes.object,
    disableBtn: PropTypes.bool,
};

export default CustomForm;
