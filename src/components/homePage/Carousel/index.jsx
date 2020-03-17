import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import { motion } from 'framer-motion';
import Slider from 'react-slick';

import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
`;
Container.displayName = 'CarouselContainer';

const CarouselWrapper = styled.div`
    width: 100%;
    max-width: 1920px;
    height: 400px;

    .slick-slide {
        height: 400px;

        div {
            height: 100%;
        }
    }

    @media screen and (min-width: 768px) {
        height: 550px;

        .slick-slide {
            height: 550px;
        }
    }

    @media screen and (min-width: 1024px) {
        height: 700px;

        .slick-slide {
            height: 700px;
        }
    }
`;
CarouselWrapper.displayName = 'CarouselCarouselWrapper';

const StyledBackgroundImage = styled(BackgroundImage)`
    height: 100%;
    width: 100%;
`;
StyledBackgroundImage.displayName = 'CarouselStyledBackgroundImage';

const Overlay = styled.div`
    width: 100%;
    height: 100%;

    &::before {
        content: "";
        background: url(${({ overlayImage }) => overlayImage});
        background-size: cover;
        opacity: ${({ overlayOpacity }) => overlayOpacity};
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;
        pointer-events: none;
    }
`;
Overlay.displayName = 'CarouselOverlay';

const TextWrapper = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
`;
TextWrapper.displayName = 'CarouselTextWrapper';

const TextWrapperInner = styled.div`
    position: absolute;
    right: 50%;
    top: -150px;
    width: 300px;
    max-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    position: relative;
    background-color: rgba(255, 255, 255, .5);
    border-radius: 4px;
    text-align: center;

    @media screen and (min-width: 768px) {
        top: -175px;
        max-width: 600px;
        max-height: 350px;
        width: 50vw;
    }

    @media screen and (min-width: 1024px) {
        top: -175px;
        width: 600px;
        max-height: 350px;
    }
`;
TextWrapperInner.displayName = 'CarouselTextWrapperInner';

const SlideHeader = styled(motion.h2)`
    font-weight: 700;
`;
SlideHeader.displayName = 'CarouselSlideHeader';

const Divider = styled(motion.hr)`
    background-color: black;
    height: 2px;
`;

const SlideParagraph = styled(motion.p)`
    font-weight: 600;
`;
SlideParagraph.displayName = 'CarouselStyledParagraph';

const propTypes = {

};

const Carousel = () => {
    const { allFile: { edges } } = useStaticQuery(
        graphql`
            query {
                allFile(filter: {name: {eq: "home"}}) {
                    edges {
                        node {
                            childMdx {
                                frontmatter {
                                    carousel {
                                        secondsForSlide
                                        overlay {
                                            image {
                                                childImageSharp {
                                                    fluid(quality: 100) {
                                                        ...GatsbyImageSharpFluid
                                                    }
                                                }
                                            }
                                            opacity
                                        }
                                        slide {
                                            header
                                            description
                                            displayTextContent
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
        `
    );
    const [ currentSlideIndex, setCurrentSlideIndex ] = useState(0);

    const slides = edges[0].node.childMdx.frontmatter.carousel.slide;
    const secondsForSlide = edges[0].node.childMdx.frontmatter.carousel.secondsForSlide;
    const { image: overlayImage, opacity: overlayOpacity } = edges[0].node.childMdx.frontmatter.carousel.overlay;

    const handleBeforeChange = (oldIndex, newIndex) => {
        setCurrentSlideIndex(newIndex);
    };

    const sliderSettings = {
        arrows: false,
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: secondsForSlide * 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        dots: true,
        swipe: false,
        beforeChange: handleBeforeChange,
    };

    const framerDivider = {
        visible: {
            width: '90%',
            transition: {
                ease: 'easeOut',
                delay: .5,
                duration: 1
            }
        },
        hidden: {
            width: 0,
            transition: {
                ease: 'easeIn',
                duration: 1
            }
        }
    };

    const framerHeader = {
        visible: {
            opacity: 1,
            transition: {
                ease: 'easeOut',
                delay: 1.5,
                duration: .75
            }
        },
        hidden: {
            opacity: 0,
        }
    };

    const framerDescription = {
        visible: {
            opacity: 1,
            transition: {
                ease: 'easeOut',
                delay: 1.6,
                duration: .75
            }
        },
        hidden: {
            opacity: 0,
        }
    };

    return (
        <Container>
            <CarouselWrapper>
                <Slider {...sliderSettings}>
                    {
                        slides.map((slide, i) => {
                            const { header, description, displayTextContent } = slide;

                            return (
                                <StyledBackgroundImage
                                    key={`slide-${i}`}
                                    fluid={slide.image.childImageSharp.fluid}
                                >
                                    <Overlay
                                        overlayImage={overlayImage.childImageSharp.fluid.src}
                                        overlayOpacity={overlayOpacity/100}
                                    >
                                        {
                                            displayTextContent &&
                                                <TextWrapper>
                                                    <TextWrapperInner>
                                                        <SlideHeader
                                                            variants={framerHeader}
                                                            initial="hidden"
                                                            animate={i === currentSlideIndex ? "visible" : "hidden"}
                                                        >
                                                            {header}
                                                        </SlideHeader>
                                                        <Divider
                                                            variants={framerDivider}
                                                            initial="hidden"
                                                            animate={i === currentSlideIndex ? "visible" : "hidden"}
                                                        />
                                                        <SlideParagraph
                                                            variants={framerDescription}
                                                            initial="hidden"
                                                            animate={i === currentSlideIndex ? "visible" : "hidden"}
                                                        >
                                                            {description}
                                                        </SlideParagraph>
                                                    </TextWrapperInner>
                                                </TextWrapper>
                                        }
                                    </Overlay>
                                </StyledBackgroundImage>
                            );
                        })
                    }
                </Slider>
            </CarouselWrapper>
        </Container>
    );
};

Carousel.propTypes = propTypes;

export default Carousel;