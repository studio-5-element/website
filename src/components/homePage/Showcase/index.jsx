import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import { motion } from 'framer-motion';

import styled from 'styled-components';

const Container = styled.section`
    width: 100%;
`;
Container.displayName = 'Container';

const Overlay = styled(BackgroundImage)`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`;

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

    &::after {
        content: "";
        background-color: rgba(0, 0, 0, .4);
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: 1;
    }

    @media screen and (min-width: 600px) {
        height: 80vw;
        max-height: 800px;
    }
`;
Main.displayName = 'Main';

const DiamondWrapper = styled.div`
    position: absolute;
    z-index: 2;
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

const DiamondChildImage = styled(BackgroundImage)`
    width: 100%;
    height: 100%;
    transform: rotate(-45deg) scale(1.45);
    transform-origin: center;
    transition: transform .5s;
`;

const DiamondChild = styled.div`
    margin: 2px;
    background-color: black;
    border: silver 2px solid;
    transition: margin .15s ease-in;
    cursor: pointer;
    overflow: hidden;

    @media screen and (min-width: 1024px) {
        margin: 5px;
    }

    &:hover {
        ${DiamondChildImage} {
            transform: rotate(-45deg) scale(1.4);
        }
    }
`;

const DiamondChildFiller = styled.div`
    margin: 2px;
    border: silver 2px solid;

    @media screen and (min-width: 1024px) {
        margin: 5px;
    }
`;

const DiamondChildEmpty = styled.div`
    margin: 2px;

    @media screen and (min-width: 1024px) {
        margin: 5px;
    }
`;

const Showcase = () => {
    const { allFile: { edges } } = useStaticQuery(
        graphql`
            query {
                allFile(filter: {name: {eq: "home"}}) {
                    edges {
                        node {
                            childMdx {
                                frontmatter {
                                    showcase {
                                        overlay {
                                            childImageSharp {
                                                fluid(quality: 100) {
                                                    ...GatsbyImageSharpFluid
                                                }
                                            }
                                        }
                                        title
                                        subTitle
                                        gallery {
                                            image1 {
                                                childImageSharp {
                                                    fluid(quality: 100) {
                                                        ...GatsbyImageSharpFluid
                                                    }
                                                }
                                            }
                                            image2 {
                                                childImageSharp {
                                                    fluid(quality: 100) {
                                                        ...GatsbyImageSharpFluid
                                                    }
                                                }
                                            }
                                            image3 {
                                                childImageSharp {
                                                    fluid(quality: 100) {
                                                        ...GatsbyImageSharpFluid
                                                    }
                                                }
                                            }
                                            image4 {
                                                childImageSharp {
                                                    fluid(quality: 100) {
                                                        ...GatsbyImageSharpFluid
                                                    }
                                                }
                                            }
                                            image5 {
                                                childImageSharp {
                                                    fluid(quality: 100) {
                                                        ...GatsbyImageSharpFluid
                                                    }
                                                }
                                            }
                                            image6 {
                                                childImageSharp {
                                                    fluid(quality: 100) {
                                                        ...GatsbyImageSharpFluid
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `
    );

    const { overlay, gallery } = edges[0].node.childMdx.frontmatter.showcase;

    return (
        <Container>
            <Header>
                <h2>BOGATE DOŚWIADCZENIE</h2>
            </Header>
            <Main>
                <Overlay fluid={overlay.childImageSharp.fluid}/>
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
                        >
                            <DiamondChildImage
                                fluid={gallery.image1.childImageSharp.fluid}
                            />
                        </DiamondChild>
                        <DiamondChild
                            gridArea="07"
                        >
                            <DiamondChildImage
                                fluid={gallery.image2.childImageSharp.fluid}
                            />
                        </DiamondChild>
                        <DiamondChild
                            gridArea="08"
                        >
                            <DiamondChildImage
                                fluid={gallery.image3.childImageSharp.fluid}
                            />
                        </DiamondChild>
                        <DiamondChild
                            gridArea="09"
                        >
                            <DiamondChildImage
                                fluid={gallery.image4.childImageSharp.fluid}
                            />
                        </DiamondChild>
                        <DiamondChild
                            gridArea="10"
                        >
                            <DiamondChildImage
                                fluid={gallery.image5.childImageSharp.fluid}
                            />
                        </DiamondChild>
                        <DiamondChild
                            gridArea="11"
                        >
                            <DiamondChildImage
                                fluid={gallery.image6.childImageSharp.fluid}
                            />
                        </DiamondChild>
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
