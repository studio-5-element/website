import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from 'gatsby-image';

import { useMedia } from 'use-media';
import Burger from '@animated-burgers/burger-squeeze';
import '@animated-burgers/burger-squeeze/dist/styles.css';
import { motion, useCycle } from 'framer-motion';
import VisibilitySensor from 'react-visibility-sensor';

import AnimatedLogo from '../AnimatedLogo';
import DesktopLogoButton from '../DesktopLogoButton';

import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    position: relative;
    z-index: 999;
`;
Container.displayName = 'NavbarContainer';

const Menu = styled.nav`
    position: ${({ isLogoVisible }) => isLogoVisible ? 'absolute' : 'fixed'};
    top: ${({ isLogoVisible }) => isLogoVisible ? 'unset' : '0'};
    left: 0;
    right: 0;
    bottom: -60px;
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transition: background .3s;
    background-color: #fff;

    @media screen and (min-width: 768px) {
        background-color: rgba(${({ isLogoVisible }) => isLogoVisible ? '255, 255, 255, .65' : '255, 255, 255, .9'});
    }
    
`;
Menu.displayName = 'NavbarMenu';

const MenuDesktop = styled.ul`
    padding: 0 0 0 20px;
    height: 100%;
    list-style: none;
    display: none;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0;

    @media screen and (min-width: 768px) {
        display: flex;
    }
`;
MenuDesktop.displayName = 'NavbarMenuDesktop';

const DesktopItem = styled.li`
    margin: 0;
    height: 100%;
    flex: 2;
`;
DesktopItem.displayName = 'NavbarDesktopItem';

const DesktopItemButton = styled.li`
    margin: 0;
    height: 100%;
    flex: 1;
`;
DesktopItemButton.displayName = 'NavbarDesktopItemButton';

const Button = styled.button`
    font-weight: 500;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: none;
    padding: 0 20px;
    cursor: pointer;
    outline: none;
    color: #000;
    transition: color 1s;

    &::after { 
        width: 100%;
        position: absolute;
        bottom: 0;
        display:block;
        content: "";
        border-bottom: solid 2px #000;  
        transform: scaleX(0);  
        transition: transform 250ms ease-in-out;
    }

    &:hover::after {
        transform: scaleX(1);
    }

    &:focus::after {
        transform: scaleX(1);
    }
`;
Button.displayName = 'NavbarButton';

const MenuMobile = styled(motion.div)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 0 5px 0 10px;
    align-items: center;
    z-index: 9999;

    @media screen and (min-width: 768px) {
        display: none;
        padding: 0;
    }

    .burger {
        border: none;
        background: none;
        color: #000;
        z-index: 9998;
        outline: none;
        font-size: 10px;

        .burger-lines, .burger-lines:before, .burger-lines:after {
            background-color: #000;
            opacity: .7;
        }
    }

    .burger:hover, .burger:focus {
        opacity: 1;

        .burger-lines, .burger-lines:before, .burger-lines:after {
            opacity: 1;
        }
    }
`;
MenuMobile.displayName = 'MenuMobile';

const MobileSidebar = styled(motion.div)`
    position: fixed;
    top: 60px;
    left: 0;
    bottom: 0;
    width: 360px;
    background: #fff;
    z-index: 1;
`;
MobileSidebar.displayName = 'MobileSidebar';

const MobileSidebarUnderlay = styled(motion.div)`
    position: fixed;
    top: 60px;
    left: 0;
    bottom: 0;
    width: 100vw;
    background: rgba(0, 0, 0, .3);
`;
MobileSidebarUnderlay.displayName = 'MobileSidebarUnderlay';

const MobileLogo = styled(Link)`
    height: 40px;
    border: none;
    background-color: #fff;
    cursor: pointer;
`;
MobileLogo.displayName = 'MobileLogo';

const MobileLogoInner = styled(Img)`
    img {
        margin: 0;
    }
`;
MobileLogoInner.displayName = 'MobileLogoInner';

const MobileNavigation = styled.ul`
    position: fixed;
    display: flex;
    flex-direction: column;
    z-index: 2;
    top: 120px;
    left: 40px;
    width: 280px;
    height: fit-content;
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    height: ${({ isOpen }) => isOpen ? 'fit-content' : '0'};
    opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
    transition: opacity 1s;
`;
MobileNavigation.displayName = 'MobileNavigation';

const MobileNavigationItem = styled.li`
    margin-bottom: 30px;
`;
MobileNavigationItem.displayName = 'MobileNavigationitem';

const MobileNavigationItemInner = styled(Link)`
    color: #000;
    opacity: .7;
    font-weight: 500;
    font-size: 20px;
    transition: all .3s;
    outline: none;

    &:hover, &:focus {
        opacity: 1;
        color: #000;
    }
`;
MobileNavigationItemInner.displayName = 'MobileNavigationButtonInner';

const propTypes = {

};

const Navbar = () => {
    const [ isLogoVisible, setIsLogoVisible ] = useState(true);
    const { logo, allFile: { edges: pages }} = useStaticQuery(
        graphql`
            query {
                allFile(filter: {name: {in: ["project", "caseStudy"]}}) {
                    edges {
                        node {
                            name
                            childMdx {
                                frontmatter {
                                    title
                                }
                            }
                        }
                    }
                }
                logo: file(absolutePath: {regex: "/Logo.png/"}) {
                    childImageSharp {
                        fixed(width: 260 height: 40) {
                        ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `
    );
    const projectPageTitle = pages.find(page => page.node.name === 'project').node.childMdx.frontmatter.title;
    const caseStudyPageTitle = pages.find(page => page.node.name === 'caseStudy').node.childMdx.frontmatter.title;

    const framerSidebar = {
        open: {
            clipPath: `circle(${1000 * 2 + 200}px at 0px 0px)`,
            transition: {
                delay: .1,
                type: "spring",
                stiffness: 20,
                restDelta: 2
            }
        },
        closed: {
            clipPath: "circle(0px at 0px 0px)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };

    const framerSidebarUnderlay = {
        open: {
            clipPath: `circle(${1000 * 2 + 200}px at 0px 0px)`,
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2
            }
        },
        closed: {
            clipPath: "circle(0px at 0px 0px)",
            transition: {
                delay: .1,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };

    const [ isMobileOpen, toggleMobileOpen ] = useCycle(false, true);
    const onVisibilityChange = isVisible => setIsLogoVisible(isVisible ? true : false);
    const isDesktop = useMedia({ minWidth: 768 });

    return (
        <Container>
            <VisibilitySensor offset={{ top: -360 }} onChange={onVisibilityChange}>
                <AnimatedLogo />
            </VisibilitySensor>
            <Menu isLogoVisible={isLogoVisible}>
                {
                    isDesktop ? (
                        <MenuDesktop>
                            <DesktopItem>
                                <Button isLogoVisible={isLogoVisible}>{projectPageTitle}</Button>
                            </DesktopItem>
                            <DesktopItemButton>
                                <DesktopLogoButton isVisible={!isLogoVisible}/>
                            </DesktopItemButton>
                            <DesktopItem>
                                <Button isLogoVisible={isLogoVisible}>{caseStudyPageTitle}</Button>
                            </DesktopItem>
                        </MenuDesktop>
                    ) : (
                        <MenuMobile
                            initial={false}
                            animate={isMobileOpen ? "open" : "closed"}
                        >
                            <Burger onClick={toggleMobileOpen} isOpen={isMobileOpen} Component="button" type="button"/>
                            <MobileLogo>
                                <MobileLogoInner fixed={logo.childImageSharp.fixed}/>
                            </MobileLogo>
                            <MobileNavigation isOpen={isMobileOpen}>
                                <MobileNavigationItem>
                                    <MobileNavigationItemInner>
                                        {projectPageTitle}
                                    </MobileNavigationItemInner>
                                </MobileNavigationItem>
                                <MobileNavigationItem>
                                    <MobileNavigationItemInner>
                                        {caseStudyPageTitle}
                                    </MobileNavigationItemInner>
                                </MobileNavigationItem>
                            </MobileNavigation>
                            <MobileSidebar variants={framerSidebar}/>
                            <MobileSidebarUnderlay variants={framerSidebarUnderlay} onClick={toggleMobileOpen}/>
                        </MenuMobile>
                    )
                }
            </Menu>
        </Container>
    );
};

Navbar.propTypes = propTypes;

export default Navbar;