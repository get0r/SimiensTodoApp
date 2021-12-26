import React from 'react';

import { TypographyType, ImageType, ContainerType } from '../../assets/styles/theme';

import logo from '../../assets/images/logo.png';

const Logo = () => {
    return (
        <a className={ ContainerType.flexCenter } href="#">
            <img className={ ImageType.logoImage } src={ logo } alt="Logo" />
            <p className={ TypographyType.brandText }>Simien</p>
        </a>
    );
};

export default Logo;