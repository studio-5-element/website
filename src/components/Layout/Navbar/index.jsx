import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from "gatsby"

import VisibilitySensor from 'react-visibility-sensor';

import AnimatedLogo from '../AnimatedLogo';
import DesktopLogoButton from '../DesktopLogoButton';

import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    position: relative;
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
`;
Menu.displayName = 'NavbarMenu';

const MenuDesktop = styled.ul`
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
`;
DesktopItem.displayName = 'NavbarDesktopItem';

const Button = styled.button`
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

const propTypes = {

};

const Navbar = () => {
    const [ isLogoVisible, setIsLogoVisible ] = useState(true);
    const { allFile: { edges: pages }} = useStaticQuery(
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
        }
        `
    );
    const projectPageTitle = pages.find(page => page.node.name === 'project').node.childMdx.frontmatter.title;
    const caseStudyPageTitle = pages.find(page => page.node.name === 'caseStudy').node.childMdx.frontmatter.title;

    const onVisibilityChange = isVisible => setIsLogoVisible(isVisible ? true : false);

    return (
        <Container>
            <VisibilitySensor offset={{ top: -300 }} onChange={onVisibilityChange}>
                <AnimatedLogo />
            </VisibilitySensor>
            <Menu isLogoVisible={isLogoVisible}>
                <MenuDesktop>
                    <DesktopItem>
                        <Button isLogoVisible={isLogoVisible}>{projectPageTitle}</Button>
                    </DesktopItem>
                    <DesktopItem>
                        <DesktopLogoButton isVisible={!isLogoVisible}/>
                    </DesktopItem>
                    <DesktopItem>
                        <Button isLogoVisible={isLogoVisible}>{caseStudyPageTitle}</Button>
                    </DesktopItem>
                </MenuDesktop>
            </Menu>
        </Container>
    );
};

Navbar.propTypes = propTypes;

export default Navbar;