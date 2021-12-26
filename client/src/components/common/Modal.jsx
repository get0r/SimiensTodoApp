import { XIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';

const Modal = ({ title, children, show, onClose }) => {

    if (!show) return null;

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto" ariaLabelledby="modal-title" role="dialog" ariaModal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                    aria-hidden="true"
                    onClick={ onClose }></div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white pt-2 pb-5 sm:p-3 sm:pb-4">
                        <div className="flex-col">
                            <div className='flex items-center p-3'>
                                <button
                                    className='w-7 h-7 text-red-500 border border-red-500 rounded-full p-1 hover:bg-red-500 hover:text-white'
                                    onClick={ onClose }>
                                    <XIcon />
                                </button>
                                <h3 className="text-lg leading-6 font-medium text-gray-900 mx-4" id="modal-title">
                                    { title }
                                </h3>
                            </div>
                            <hr className='h-2 w-full'></hr>
                        </div>

                        <div className="flex justify-center">
                            <div className="mt-3 px-2 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <div className="mt-2">
                                    { children }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
