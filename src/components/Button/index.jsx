import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Label = styled.span`
    transition: all 0.3s;
    line-height: 50px;
`;
Label.displayName = 'Label';

const Container = styled.button`
    transition: all 0.3s;
    position: relative;
    height: 50px;
    text-align: center;
    width: 250px;
    cursor: pointer;
    color: rgba(0, 0, 0, .7);
    border: none;
    background: transparent;

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        opacity: 0;
        transition: all 0.3s;
        border-top-width: 1px;
        border-bottom-width: 1px;
        border-top-style: solid;
        border-bottom-style: solid;
        border-top-color: rgba(0,0,0,0.5);
        border-bottom-color: rgba(0,0,0,0.5);
        transform: scale(0.1, 1);
    }

    &:hover {
        ${Label} {
            letter-spacing: 2px;
        }

        &::before {
            opacity: 1; 
            transform: scale(1, 1); 
        }

        &::after {
            opacity: 0; 
            transform: scale(0.1, 1);
        }
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        transition: all 0.3s;
        background-color: rgba(0,0,0,0.1);
    }
}
`;
Container.displayName = 'Container';

const propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    onClick: PropTypes.func
};

const Button = ({ label, type, disabled, isLoading, onClick }) => {
    return (
        <Container
            type={type}
            disabled={disabled}
            isLoading={isLoading}
            onClick={onClick}
        >
            <Label>{label && label.toUpperCase()}</Label>
        </Container>
    );
};

Button.propTypes = propTypes;

export default Button;