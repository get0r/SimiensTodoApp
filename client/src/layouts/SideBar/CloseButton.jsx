import React from 'react';

import { XIcon } from '@heroicons/react/solid';

const CloseButton = ({ onClick }) => {
    return (
        <button className='w-10 h-10 p-2 text-blue-500' onClick={ onClick }>
            <XIcon />
        </button>
    );
};

export default CloseButton;
