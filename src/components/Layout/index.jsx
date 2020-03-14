import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node
};

const Layout = ({ children }) => {
    return (
        <div>
            <h1>IN DEV</h1>
            {children}
        </div>
    );
};

Layout.propTypes = propTypes;

export default Layout;