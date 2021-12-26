import { useState } from 'react';

export const useModal = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggle = which => {
        if (which) return setIsVisible(which);
        setIsVisible(false);
    };

    return [
        isVisible,
        toggle
    ];
};