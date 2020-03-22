import React from "react"
import { useStaticQuery, gatsbyql } from 'gatsby';

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Carousel from "../components/homePage/Carousel";
import About from "../components/homePage/About";
import Showcase from "../components/homePage/Showcase";
import Contact from "../components/homePage/Contact";

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
                <Showcase />
                <Contact />
            </Main>
        </Layout>
    )
};

export default IndexPage;
