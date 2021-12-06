import React from 'react';
import PropTypes from 'prop-types';

import { ErrorMessage, Field, Form, Formik } from 'formik';


const CustomForm = ({ fields, initialValues, onSubmit, validationSchema, submitName }) => {

    const generateFields = () => {
        let key = 0;
        return fields.map(field => (
            <div key={ key++ }>
                <label className="block text-gray-700">{ field.label }</label>
                <Field type={ field.type }
                    name={ field.name }
                    placeholder={ field.placeholder }
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                <div className="text-red-600 font-serif p-2">
                    <ErrorMessage name={ field.name } />
                </div>
            </div>
        ));
    };

    return (
        <Formik { ...{ initialValues, validationSchema, onSubmit } }>
            {
                () => (
                    <Form noValidate>
                        { generateFields() }
                        <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">{ submitName }</button>
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
