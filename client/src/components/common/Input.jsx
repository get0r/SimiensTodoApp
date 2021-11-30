import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Input = ({ show, placeholder, onChange }) => {
    const [value, setValue] = useState('');

    const handleChange = e => {
        setValue(e.target.value);
        if (onChange) onChange(value);
    };

    if (!show) return null;

    return (
        <div className="flex items-center justify-between px-4 py-2">
            <input className="w-full p-2 outline-none text-gray-800 border-gray-200 bg-white"
                placeholder={ placeholder || 'input here...' }
                onChange={ handleChange } />
        </div>
    );
};

Input.propTypes = {
    placeholder: PropTypes.string,
    show: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Input;
