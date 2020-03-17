import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-background-image';

import ReactMarkdown from 'react-markdown';

import styled from 'styled-components';

const Container = styled.section`
    display: flex;
    flex-direction: column-reverse;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
    }
`;
Container.displayName = 'Container';

const ImageWrapper = styled.aside`
    display: flex;
    flex-direction: column;
`;
ImageWrapper.displayName = 'ImageWrapper';

const ImageDecor = styled.hr`
    align-self: center;
    height: 1px;
    width: 90%;
    background-color: rgba(0, 0, 0, .5);
    margin-top: 20px;

    @media screen and (min-width: 768px) {
        margin-top: 0;
        align-self: flex-end;
        width: 65%;
    }
`;
ImageDecor.displayName = 'ImageDecor';

const Image = styled.div`
    min-width: 200px;
    min-height: 200px;
    width: 50vw;
    height: 50vw;
    max-width: 300px;
    max-height: 300px;
    margin: 30px 0 0 0;
    border-radius: 50%;
    overflow: hidden;
    align-self: center;
    border: 4px solid silver;
    box-shadow: 0 0 30px black;

    @media screen and (min-width: 768px) {
        width: 100px;
        height: 100px;
        margin: 30px 50px 0 0;
        align-self: flex-end;
        box-shadow: 0 0 20px black;
    }

    @media screen and (min-width: 860px) {
        width: 150px;
        height: 150px;
        margin-right: 50px;
        box-shadow: 0 0 25px black;
    }

    @media screen and (min-width: 1024px) {
        width: 200px;
        height: 200px;
        margin-right: 100px;
        box-shadow: 0 0 30px black;
    }
`;
Image.displayName = 'Image';

const StyledImg = styled(Img)`
    min-width: 200px;
    min-height: 200px;
    width: 50vw;
    height: 50vw;
    max-width: 300px;
    max-height: 300px;

    @media screen and (min-width: 768px) {
        width: 100px;
        height: 100px;
    }

    @media screen and (min-width: 860px) {
        width: 150px;
        height: 150px;
    }

    @media screen and (min-width: 1024px) {
        width: 200px;
        height: 200px;
    }
`;
StyledImg.displayName = 'StyledImg';

const TextWrapper = styled.main`
    max-width: 800px;
    display: flex;
    flex-direction: column;
`;
TextWrapper.displayName = 'TextWrapper';

const TextDecor = styled.hr`
    margin-bottom: 0;
    width: 25%;
    height: 1px;
    background-color: rgba(0, 0, 0, .5);
    display: none;

    @media screen and (min-width: 768px) {
        display: initial;
    }
`;
TextDecor.displayName = 'TextDecor';

const Header = styled.h1`
    width: 100%
`;
Header.displayName = 'Header';

const Divider = styled.hr`
    width: 50%;
    height: 1px;
    background-color: rgba(0, 0, 0, .5);
`;
Divider.displayName = 'Divider';

const Body = styled.article`
    width: 100%
`;
Body.displayName = 'Body';

const About = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allFile(filter: {name: {eq: "home"}}) {
                    edges {
                        node {
                            childMdx {
                                frontmatter {
                                    about {
                                        image {
                                            childImageSharp {
                                                fluid(quality: 100) {
                                                    ...GatsbyImageSharpFluid
                                                }
                                            }
                                        }
                                        header
                                        description
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `
    );
    const { image, header, description } = data.allFile.edges[0].node.childMdx.frontmatter.about;
    console.log(description);

    return (
        <Container>
            <ImageWrapper>
                <ImageDecor />
                <Image>
                    <StyledImg fluid={image.childImageSharp.fluid}/>
                </Image>
            </ImageWrapper>
            <TextWrapper>
                <TextDecor />
                <Header>{header}</Header>
                <Divider />
                <Body>
                    <ReactMarkdown source={description}/>
                </Body>
            </TextWrapper>
        </Container>
    );
};

export default About;