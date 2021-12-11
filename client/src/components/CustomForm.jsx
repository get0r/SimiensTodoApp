import React from 'react';
import PropTypes from 'prop-types';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import { ButtonType } from '../styles/theme';


const CustomForm = ({ fields, initialValues, onSubmit, validationSchema, submitName }) => {

    const generateFields = (formikObj) => {
        let key = 0;
        const fieldStyle = 'w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:bg-white focus:outline-none';
        const { errors, touched } = formikObj;

        return fields.map(field => (
            <div key={ key++ }>
                <label className="block text-gray-700">{ field.label }</label>
                <Field type={ field.type }
                    id={ field.name }
                    name={ field.name }
                    placeholder={ field.placeholder }
                    className={ errors[field.name] && touched[field.name] ? `${fieldStyle} focus:border-blue-500` : fieldStyle } />
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
                        <button type="submit" disabled={ !(formik.isValid && formik.dirty) } className={ ButtonType.primary }>{ submitName }</button>
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
};

export default CustomForm;
