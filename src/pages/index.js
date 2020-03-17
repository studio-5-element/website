import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Carousel from "../components/homePage/Carousel";
import About from "../components/homePage/About";

import styled from 'styled-components';

const Header = styled.header`
    margin-top: 60px;
    width: 100%;

    @media screen and (min-width: 768px) {
        margin-top: 0;
    }
`;
Header.displayName = 'Header';

const Main = styled.main`
    width: 100%;
    max-width: 1920px;
    overflow-x: hidden;
    padding: 40px 20px;

    @media screen and (min-width: 480px) {
        padding: 60px 40px;
    }

    @media screen and (min-width: 768px) {
        padding: 80px 40px;
    }

    @media screen and (min-width: 1024px) {
        padding: 120px 80px;
    }
`;
Main.displayName = 'Main';

const IndexPage = () => {
    return (
        <Layout>
            <SEO
                title="Home"
                keywords={[`blog`, `gatsby`, `javascript`, `react`]}
            />
            <Header>
                <Carousel />
            </Header>
            <Main>
                <About />
            </Main>
        </Layout>
    )
};

export default IndexPage;
