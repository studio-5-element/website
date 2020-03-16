import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { motion } from 'framer-motion';

import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 300px;
    justify-content: center;
    align-items: center;
    display: none;
    margin: 0;
    padding: 0 0 40px;

    @media screen and (min-width: 768px) {
        display: flex;
    }
`;
Container.displayName = 'AnimatedLogoContainer';

const Inner = styled.div`
    width: 600px;
    height: 300px;
    position: relative;
`;
Inner.displayName = 'AnimatedLogoInner';

const ImageWrapper = styled(motion.div)`
    width: 100%;
    height: 100%;
`;
ImageWrapper.displayName = 'AnimatedLogoImageWrapper';


const Image = styled(Img)`
    width: 100%;
    height: 100%;

    img {
        margin: 0;
    }
`;
Image.displayName = 'AnimatedLogoImage';

const Logo = styled(motion.svg)`
    height: 100px;
    overflow: visible;
    stroke: #000;
    stroke-width: .1;
    stroke-linejoin: round;
    stroke-linecap: round;
    fill: #000;
    transform: scale(3);
    position: absolute;
    left: 186px;
    top: 100px;
    overflow: visible !important;
    margin: 0;
`;
Logo.displayName = 'AnimatedLogoLogo';

const Path = styled(motion.path)`
    color: black;
`;
Path.displayName = 'AnimatedLogoPath';

const propTypes = {

};

const Navbar = () => {
    const data = useStaticQuery(graphql`
        query {
            logoBackground: file(absolutePath: {regex: "/logo-background.png/"}) {
                childImageSharp {
                    # Specify the image processing specifications right in the query.
                    # Makes it trivial to update as your page's design changes.
                    fixed(width: 600 height: 300) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    const framerImage = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 2,
                duration: 1,
                ease: [1, 0, 0.8, 1]
            }
        }
    };

    const framerIcon = {
        hidden: {
            x: 7,
            pathLength: 0,
            rotate: -90,
            fill: "rgba(0, 0, 0, 0)",
        },
        visible: {
            x: 0,
            pathLength: 1,
            rotate: 0,
            fill: "rgba(0, 0, 0, 1)"
        }
    };

    const framerIconTrastitions = {
        default: { duration: 1.5, ease: "easeInOut" },
        fill: { delay: 2, duration: 1, ease: [1, 0, 0.8, 1] },
        rotate: { delay: 1.3, type: "spring", stiffness: 60 },
        x: { delay: 1.3, type: "spring", stiffness: 60 },
    };

    return (
        <Container>
            <Inner>
                <ImageWrapper
                    variants={framerImage}
                    initial="hidden"
                    animate="visible"
                >
                    <Image fixed={data.logoBackground.childImageSharp.fixed}/>
                </ImageWrapper>
                <Logo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <g id="layer1" transform="translate(-80,-115)">
                        <Path
                            d="m 104.05107,122.37246 c -1.92464,-0.005 -3.4903,1.54849 -3.49668,3.4732 -0.003,0.96235 0.38387,1.83481 1.01242,2.4675 0.62847,0.63281 0.9399,1.70755 0.944,3.02708 -0.0241,1.01742 -0.51377,3.2567 -1.58032,3.70364 -1.066383,0.4468 -2.027437,1.09548 -2.835533,1.89823 -0.404052,0.40134 -0.769821,0.84121 -1.091332,1.3137 -0.32151,0.47245 -0.746647,1.94067 0.228411,2.27719 0.997168,0.34411 1.417797,-0.56235 2.275524,-0.99925 0.85776,-0.43687 1.9281,-0.49485 2.97092,-0.0763 2.08588,0.83646 2.29346,2.75554 2.07287,3.69289 -0.17981,0.76422 -0.80358,2.82678 -3.02242,2.89717 -0.90056,0.0285 -1.587322,0.006 -2.847764,-0.95178 -0.794326,-0.60442 -0.747898,-2.01589 -2.022456,-1.95408 -1.56219,0.0752 -0.950871,2.48657 -0.504001,3.55296 0.446871,1.06643 1.095439,2.02768 1.89813,2.83574 0.629806,0.62506 1.024405,1.41654 0.272588,3.21577 -1.855197,2.86059 -2.516685,1.63265 -3.387187,3.16054 -0.645417,1.13285 -0.09689,2.58458 1.072279,3.16162 1.169178,0.57696 2.562535,0.0862 3.161813,-1.07208 0.825773,-1.59555 -0.473035,-2.18003 0.813956,-4.39009 0.538812,-0.89461 1.733252,-1.8095 2.558542,-1.6345 2.08049,0.41301 4.20491,0.11121 6.03982,-0.87314 0.75301,-0.5785 1.49033,-0.46542 2.10183,-0.13268 1.24214,0.74447 0.63585,1.73385 1.4688,2.5271 0.83308,0.79312 2.15144,0.76087 2.94454,-0.0721 0.79328,-0.83297 0.7609,-2.15137 -0.0721,-2.94455 -0.83302,-0.7932 -1.73622,-0.17826 -2.6337,-1.44414 -0.4566,-0.56968 -0.37083,-0.98262 -0.21339,-1.50565 0.71752,-1.30852 1.08099,-2.79013 1.08869,-4.23937 -0.0148,-0.90278 0.20688,-1.86829 1.27491,-2.1484 0.3486,-0.12925 0.48442,-0.18762 0.90745,-0.11497 0.52737,0.0908 1.03768,0.33183 1.59142,0.1683 1.10757,-0.32715 1.73999,-1.49008 1.41289,-2.59753 -0.32722,-1.10745 -1.49028,-1.74018 -2.5978,-1.41309 -0.55373,0.16356 -0.93664,0.56846 -1.24424,1.00636 -0.26342,0.37465 -0.29019,0.37009 -1.00006,0.63477 -0.68705,0.1413 -1.13762,0.064 -1.84805,-0.51717 -0.96784,-1.42929 -2.47621,-2.61521 -3.90563,-3.23817 -1.06348,-0.45404 -1.8588,-2.61803 -1.97892,-3.79491 -0.0507,-1.14484 -0.0189,-2.31385 0.61397,-2.94244 0.63282,-0.6285 1.0258,-1.49838 1.02904,-2.46069 0.005,-1.92464 -1.54855,-3.49004 -3.47324,-3.49647 z"
                            variants={framerIcon}
                            initial="hidden"
                            animate="visible"
                            transition={framerIconTrastitions}
                        />
                    </g>
                </Logo>
            </Inner>
        </Container>
    );
};

Navbar.propTypes = propTypes;

export default Navbar;