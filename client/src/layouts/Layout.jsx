import React from 'react';
import PropTypes from 'prop-types';

import Content from './Content';

const Layout = ({ header: Header, children, footer: Footer }) => {

    return (
        <>
            { Header ? <Header /> : null }
            <Content>
                { children }
            </Content>
            { Footer ? <Footer /> : null }
        </>
    );
};

Layout.propTypes = {
    header: PropTypes.node,
    main: PropTypes.node.isRequired,
    footer: PropTypes.node,
};

export default Layout;
