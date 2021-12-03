import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ header: Header, main: Main, footer: Footer }) => {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
};

Layout.propTypes = {
    header: PropTypes.node,
    main: PropTypes.node.isRequired,
    footer: PropTypes.node,
};

export default Layout;
