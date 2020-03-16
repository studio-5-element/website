import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './Navbar';

import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    ${normalize}

    html {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
    }
    
    *,
    *::before,
    *::after {
        -webkit-box-sizing: inherit;
        -moz-box-sizing: inherit;
        box-sizing: inherit;
    }
`;

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
`;
Container.displayName = `LayoutContainer`;

const propTypes = {
    children: PropTypes.node
};

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Container>
                <Navbar />
                {children}
            </Container>
        </React.Fragment>
    );
};

Layout.propTypes = propTypes;

export default Layout;