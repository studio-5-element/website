import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import { useMedia } from 'use-media';
import VisibilitySensor from 'react-visibility-sensor';
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
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 1300px;
    margin: 0 auto;

    @media screen and (min-width: 480px) {
        padding: 40px 40px 10px;
    }

    @media screen and (min-width: 768px) {
        padding: 40px 40px 10px;
    }

    @media screen and (min-width: 1024px) {
        padding: 40px 80px 10px;
    }
`;
Header.displayName = 'Header';

const HeaderTitle = styled.h2`

`;

const HeaderSubTitle = styled.p`

`;

const HeaderDivider = styled.hr`
    background-color: rgba(0,0,0,.5);
    width: 30%;
    height: 1px;
`;

const Main = styled.main`
    width: 100%;
    height: 450px;
    overflow: hidden;
    position: relative;

    &::after {
        content: "";
        background: rgb(255,255,255);
        background: linear-gradient(0deg, rgba(255,255,255,1) 10%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,1) 90%);
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

const Diamond = styled(motion.div)`
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
    transform: rotate(-135deg) scale(1.45);
    transform-origin: center;
    transition: transform .5s;

    @media screen and (min-width: 480px) {
        transform: rotate(-45deg) scale(1.45);
    }
`;

const DiamondChildOverlay = styled.div`
    position: abosulte;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
`;

const DiamondChildOverlayInner = styled.div`
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background-color: rgba(0, 0, 0, 0);
    transition: background .5s ease-in;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DiamondText = styled.span`
    color: #fff;
    font-weight: 600;
    transform: rotate(-45deg);
    opacity: 0;
    transition: opacity.5s ease-out;
`;

const DiamondChild = styled(motion.div)`
    margin: 2px;
    background-color: black;
    border: rgba(0, 0, 0, .5) 2px solid;
    transition: margin .15s ease-in;
    cursor: pointer;
    overflow: hidden;
    position: relative;

    &:hover {
        ${DiamondChildImage} {
            transform: rotate(-135deg) scale(1.4);
        }

        ${DiamondChildOverlayInner} {
            background-color: rgba(0, 0, 0, .5);
        }

        ${DiamondText} {
            opacity: 1;
        }
    }

    @media screen and (min-width: 1024px) {
        margin: 5px;
    }

    @media screen and (min-width: 480px) {
        &:hover {
            ${DiamondChildImage} {
                transform: rotate(-40deg) scale(1.4);
            }
        }
    }
`;

const DiamondChildFiller = styled(motion.div)`
    margin: 2px;
    border: rgba(0, 0, 0, .5) 2px solid;

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
                                            tile1 {
                                                label
                                                image {
                                                    childImageSharp {
                                                        fluid(quality: 100) {
                                                            ...GatsbyImageSharpFluid
                                                        }
                                                    }
                                                }
                                            }
                                            tile2 {
                                                label
                                                image {
                                                    childImageSharp {
                                                        fluid(quality: 100) {
                                                            ...GatsbyImageSharpFluid
                                                        }
                                                    }
                                                }
                                            }
                                            tile3 {
                                                label
                                                image {
                                                    childImageSharp {
                                                        fluid(quality: 100) {
                                                            ...GatsbyImageSharpFluid
                                                        }
                                                    }
                                                }
                                            }
                                            tile4 {
                                                label
                                                image {
                                                    childImageSharp {
                                                        fluid(quality: 100) {
                                                            ...GatsbyImageSharpFluid
                                                        }
                                                    }
                                                }
                                            }
                                            tile5 {
                                                label
                                                image {
                                                    childImageSharp {
                                                        fluid(quality: 100) {
                                                            ...GatsbyImageSharpFluid
                                                        }
                                                    }
                                                }
                                            }
                                            tile6 {
                                                label
                                                image {
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
            }
        `
    );

    const { overlay, gallery, title, subTitle } = edges[0].node.childMdx.frontmatter.showcase;

    const isDesktop = useMedia({ minWidth: 480 });
    const [ isVisible, setIsVisible ] = useState(false);

    const handleOnVisibilityChange = isVisible => {
        if (isVisible) {
            setIsVisible(true);
        }
    };

    const framerDiamondChildFiller1 = {
        visible: {
            y: 0,
            x: 0,
            opacity: 1,
            rotate: 0,
            transition: {
                default: {
                    ease: 'easeOut',
                        duration: 1,
                    delay: isDesktop ? .75 : 0
                },
                opacity: {
                    duration: 2,
                    delay: isDesktop ? .9 : .15
                }
            }
        },
        hidden: {
            y: 200,
            x: -200,
            opacity: 0,
            rotate: -135,
        }
    };

    const framerDiamondChild1 = {
        visible: {
            y: 0,
            x: 0,
            opacity: 1,
            rotate: 0,
            transition: {
                default: {
                    delay: isDesktop ? 0 : .15,
                    ease: 'easeOut',
                    duration: 1
                },
                opacity: {
                    duration: 2,
                    delay: isDesktop ? .15 : .3,
                }
            }
        },
        hidden: {
            y: 200,
            x: -200,
            opacity: 0,
            rotate: -135,
        }
    };


    const framerDiamondChild2 = {
        visible: {
            y: 0,
            x: 0,
            opacity: 1,
            rotate: 0,
            transition: {
                default: {
                    delay: isDesktop ? .6 : .3,
                    ease: 'easeOut',
                    duration: 1
                },
                opacity: {
                    duration: 2,
                    delay: isDesktop ? .75 : .45,
                }
            }
        },
        hidden: {
            y: -200,
            x: 200,
            opacity: 0,
            rotate: -135,
        }
    };

    const framerDiamondChild3 = {
        visible: {
            y: 0,
            x: 0,
            opacity: 1,
            rotate: 0,
            transition: {
                default: {
                    delay: isDesktop ? .9 : .45,
                    ease: 'easeOut',
                    duration: 1
                },
                opacity: {
                    duration: 2,
                    delay: isDesktop ? 1.05 : .6,
                }
            }
        },
        hidden: {
            y: 200,
            x: -200,
            opacity: 0,
            rotate: -135,
        }
    };

    const framerDiamondChild4 = {
        visible: {
            y: 0,
            x: 0,
            opacity: 1,
            rotate: 0,
            transition: {
                default: {
                    delay: isDesktop ? .15 : .6,
                    ease: 'easeOut',
                    duration: 1
                },
                opacity: {
                    duration: 2,
                    delay: isDesktop ? .3 : .75,
                }
            }
        },
        hidden: {
            y: 200,
            x: -200,
            opacity: 0,
            rotate: -135,
        }
    };

    const framerDiamondChild5 = {
        visible: {
            y: 0,
            x: 0,
            opacity: 1,
            rotate: 0,
            transition: {
                default: {
                    delay: isDesktop ? .45 : .75,
                    ease: 'easeOut',
                    duration: 1    
                },
                opacity: {
                    duration: 2,
                    delay: isDesktop ? .6 : .9,
                }
            }
        },
        hidden: {
            y: -200,
            x: 200,
            opacity: 0,
            rotate: -135,
        }
    };

    const framerDiamondChild6 = {
        visible: {
            y: 0,
            x: 0,
            opacity: 1,
            rotate: 0,
            transition: {
                default: {
                    delay: isDesktop ? 1.05 : .9,
                    ease: 'easeOut',
                    duration: 1
                },
                opacity: {
                    delay: isDesktop ? 1.2 : 1.05,
                    duration: 2
                }
            }
        },
        hidden: {
            y: 200,
            x: -200,
            opacity: 0,
            rotate: -135,
        }
    };

    const framerDiamondChildFiller2 = {
        visible: {
            y: 0,
            x: 0,
            opacity: 1,
            rotate: 0,
            transition: {
                default: {
                    delay: isDesktop ? .3 : 1.05,
                    ease: 'easeOut',
                    duration: 1  
                },
                opacity: {
                    duration: 2,
                    delay: isDesktop ? .45 : 1.2,
                }
            }
        },
        hidden: {
            y: 200,
            x: -200,
            opacity: 0,
            rotate: -135,
        }
    };

    return (
        <VisibilitySensor offset={{ bottom: -600 }} onChange={handleOnVisibilityChange}>
            <Container>
                <Header>
                    <HeaderTitle>{title}</HeaderTitle>
                    <HeaderDivider />
                    <HeaderSubTitle>{subTitle}</HeaderSubTitle>
                </Header>
                    <Main>
                        <Overlay fluid={overlay.childImageSharp.fluid}/>
                        <DiamondWrapper>
                            <Diamond
                                initial="hidden"
                                animate={isVisible ? "visible" : "hidden"}
                            >
                                <DiamondChildEmpty
                                    gridArea="01"
                                />
                                <DiamondChildEmpty
                                    gridArea="02"
                                />
                                <DiamondChildFiller
                                    variants={framerDiamondChildFiller2}
                                    gridArea="03"
                                />
                                <DiamondChildEmpty
                                    gridArea="04"
                                />
                                <DiamondChildEmpty
                                    gridArea="05"
                                />
                                <DiamondChild
                                    variants={framerDiamondChild4}
                                    gridArea="06"
                                >
                                    
                                    <DiamondChildImage
                                        fluid={gallery.tile1.image.childImageSharp.fluid}
                                    />
                                    <DiamondChildOverlay>
                                        <DiamondChildOverlayInner>
                                            <DiamondText>{gallery.tile1.label}</DiamondText>
                                        </DiamondChildOverlayInner>
                                    </DiamondChildOverlay>
                                </DiamondChild>
                                <DiamondChild
                                    variants={framerDiamondChild5}
                                    gridArea="07"
                                >
                                    <DiamondChildImage
                                        fluid={gallery.tile2.image.childImageSharp.fluid}
                                    />
                                    <DiamondChildOverlay>
                                        <DiamondChildOverlayInner>
                                            <DiamondText>{gallery.tile2.label}</DiamondText>
                                        </DiamondChildOverlayInner>
                                    </DiamondChildOverlay>
                                </DiamondChild>
                                <DiamondChild
                                    variants={framerDiamondChild6}
                                    gridArea="08"
                                >
                                    <DiamondChildImage
                                        fluid={gallery.tile3.image.childImageSharp.fluid}
                                    />
                                    <DiamondChildOverlay>
                                        <DiamondChildOverlayInner>
                                            <DiamondText>{gallery.tile3.label}</DiamondText>
                                        </DiamondChildOverlayInner>
                                    </DiamondChildOverlay>
                                </DiamondChild>
                                <DiamondChild
                                    variants={framerDiamondChild1}
                                    gridArea="09"
                                >
                                    <DiamondChildImage
                                        fluid={gallery.tile4.image.childImageSharp.fluid}
                                    />
                                    <DiamondChildOverlay>
                                        <DiamondChildOverlayInner>
                                            <DiamondText>{gallery.tile4.label}</DiamondText>
                                        </DiamondChildOverlayInner>
                                    </DiamondChildOverlay>
                                </DiamondChild>
                                <DiamondChild
                                    variants={framerDiamondChild2}
                                    gridArea="10"
                                >
                                    <DiamondChildImage
                                        fluid={gallery.tile5.image.childImageSharp.fluid}
                                    />
                                    <DiamondChildOverlay>
                                        <DiamondChildOverlayInner>
                                            <DiamondText>{gallery.tile5.label}</DiamondText>
                                        </DiamondChildOverlayInner>
                                    </DiamondChildOverlay>
                                </DiamondChild>
                                <DiamondChild
                                    variants={framerDiamondChild3}
                                    gridArea="11"
                                >
                                    <DiamondChildImage
                                        fluid={gallery.tile6.image.childImageSharp.fluid}
                                    />
                                    <DiamondChildOverlay>
                                        <DiamondChildOverlayInner>
                                            <DiamondText>{gallery.tile6.label}</DiamondText>
                                        </DiamondChildOverlayInner>
                                    </DiamondChildOverlay>
                                </DiamondChild>
                                <DiamondChildEmpty
                                    gridArea="12"
                                />
                                <DiamondChildEmpty
                                    gridArea="13"
                                />
                                <DiamondChildFiller
                                    variants={framerDiamondChildFiller1}
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
        </VisibilitySensor>
    );
};

export default Showcase;
