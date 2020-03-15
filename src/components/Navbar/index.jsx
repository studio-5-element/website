import React from 'react';
import PropTypes from 'prop-types';

import AnimatedLogo from '../AnimatedLogo';

import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
`;
Container.displayName = 'NavbarContainer';

const Menu = styled.nav`
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

    &::after {
        width: 100%;
        position: absolute;
        bottom: 0;
        display:block;
        content: "";
        border-bottom: solid 2px black;  
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


    return (
        <Container>
            <AnimatedLogo />
            <Menu>
                <MenuDesktop>
                    <DesktopItem>
                        <Button>Projekt</Button>
                    </DesktopItem>
                    <DesktopItem>
                        <Button>Realizacje</Button>
                    </DesktopItem>
                </MenuDesktop>
            </Menu>
        </Container>
    );
};

Navbar.propTypes = propTypes;

export default Navbar;