import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { motion } from 'framer-motion';

import styled from 'styled-components';

const Container = styled.section`
    width: 100%;
    background-color: silver;
`;
Container.displayName = 'Container';

const Header = styled.header`
    width; 100%;
    padding: 40px 20px 10px;

    @media screen and (min-width: 480px) {
        padding: 60px 40px 10px;
    }

    @media screen and (min-width: 768px) {
        padding: 80px 40px 10px;
    }

    @media screen and (min-width: 1024px) {
        padding: 120px 80px 10px;
    }

    h2 {
        color: #fff;
    }
`;
Header.displayName = 'Header';

const Main = styled.main`
    width: 100%;
    height: 450px;
    overflow: hidden;
    position: relative;

    @media screen and (min-width: 600px) {
        height: 80vw;
        max-height: 800px;
    }
`;
Main.displayName = 'Main';

const DiamondWrapper = styled.div`
    position: absolute;
    top: 50%;
    right: 50%;
    width: 380px;
    height: 380px;

    @media screen and (min-width: 480px) {
        width: 90vw;
        height: 90vw;
        max-width: 1000px;
        max-height: 1000px;
    }
`;

const Diamond = styled.div`
    position: absolute;
    top: -50%;
    right: -50%;
    width: 380px;
    height: 380px;
    display: grid;
    transform: rotate(135deg);
    gird-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 25% 25% 25% 25%;
    grid-template-areas:
        "01 02 03 04"
        "05 06 07 08"
        "09 10 11 12"
        "13 14 15 16";

    @media screen and (min-width: 480px) {
        transform: rotate(45deg);
        width: 90vw;
        height: 90vw;
        max-width: 1000px;
        max-height: 1000px;
    }
`;

const DiamondChild = styled.div`
    margin: 2px;
    background-color: black;

    @media screen and (min-width: 1024px) {
        margin: 5px;
    }
`;

const DiamondChildFiller = styled.div`
    margin: 2px;
    background-color: grey;

    @media screen and (min-width: 1024px) {
        margin: 5px;
    }
`;

const DiamondChildEmpty = styled.div`
    margin: 5px;
`;

const Showcase = () => {
    return (
        <Container>
            <Header>
                <h2>BOGATE DOŚWIADCZENIE</h2>
            </Header>
            <Main>
                <DiamondWrapper>
                    <Diamond>
                        <DiamondChildEmpty
                            gridArea="01"
                        />
                        <DiamondChildEmpty
                            gridArea="02"
                        />
                        <DiamondChildFiller
                            gridArea="03"
                        />
                        <DiamondChildEmpty
                            gridArea="04"
                        />
                        <DiamondChildEmpty
                            gridArea="05"
                        />
                        <DiamondChild
                            gridArea="06"
                        />
                        <DiamondChild
                            gridArea="07"
                        />
                        <DiamondChild
                            gridArea="08"
                        />
                        <DiamondChild
                            gridArea="09"
                        />
                        <DiamondChild
                            gridArea="10"
                        />
                        <DiamondChild
                            gridArea="11"
                        />
                        <DiamondChildEmpty
                            gridArea="12"
                        />
                        <DiamondChildEmpty
                            gridArea="13"
                        />
                        <DiamondChildFiller
                            gridArea="14"
                        />
                        <DiamondChildEmpty
                            gridArea="15"
                        />
                        <DiamondChildEmpty
                            gridArea="16"
                        />
                    </Diamond>
                </DiamondWrapper>
            </Main>
        </Container>
    );
};

export default Showcase;
