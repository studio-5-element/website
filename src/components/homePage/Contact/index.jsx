import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Form } from 'react-final-form';
import { motion } from 'framer-motion';

import FormTextfield from '../../finalForm/FormTextfield';
import Button from '../../Button';

import styled from 'styled-components';

const Container = styled.section`
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
Container.displayName = 'Container';

const Header = styled.header`
    width: 100%
`;
Header.displayName = 'Header';

const HeaderTitle = styled.h2`

`;
HeaderTitle.displayName = 'HeaderTitle';

const HeaderSubTitle = styled.p`

`;
HeaderSubTitle.displayName = 'HeaderSubTitle';

const HeaderDivider = styled.hr`
    background-color: rgba(0,0,0,.5);
    width: 30%;
    height: 1px;
`;
HeaderDivider.displayName = 'HeaderDivider';

const StyledForm = styled.form`
    width: 100%;
    max-width: 700px;
    margin: 20px auto;

    @media screen and (min-width: 768px) {
        margin: 40px auto;
        padding: 40px 20px;
        box-shadow: 0 0 40px rgba(0, 0, 0, .3);
    }
`;
StyledForm.displayName = 'StyledForm';

const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;
Row.displayName = 'Row';

const RowItem = styled.span`
    width: 100%;

    @media screen and (min-width: 768px) {
        width: 300px;
    }
`;
RowItem.displayName = 'RowItem';

const ButtonWrapper = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    @media screen and (min-width: 768px) {
        justify-content: center;
    }
`;
ButtonWrapper.displayName = 'ButtonWrapper';

const Contact = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allFile(filter: {name: {eq: "home"}}) {
                    edges {
                        node {
                            childMdx {
                                frontmatter {
                                    contact {
                                        header
                                        description
                                        name
                                        email
                                        message
                                        button
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `
    );
    const { header, description, name, email, message, button } = data.allFile.edges[0].node.childMdx.frontmatter.contact;

    const [ isLoading, setIsLoading ] = useState(false);

    const encode = data => 
        Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&")
    ;

    const handleSubmit = async formData => {
        setIsLoading(true);
        try {
            await  fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", ...formData })
            });
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    };

    const required = value => (value ? undefined : 'Pole Wymagane');

    return (
        <Container>
            <Header>
                <HeaderTitle>{header}</HeaderTitle>
                <HeaderDivider />
                <HeaderSubTitle>{description}</HeaderSubTitle>
            </Header>
            <Form
                onSubmit={handleSubmit}
                render={({ submitError, handleSubmit }) => (
                    <StyledForm onSubmit={handleSubmit} method="post" netlify-honeypot="bot-field" data-netlify="true" netlify>
                        <input type="hidden" name="bot-field" />
                        <Row>
                            <RowItem>
                                <FormTextfield
                                    diabled={isLoading}
                                    name="imię"
                                    label={name}
                                    placeholder="Twoje Imie"
                                    validate={required}
                                    type="text"
                                />
                            </RowItem>
                            <RowItem>
                                <FormTextfield
                                    diabled={isLoading}
                                    name="email"
                                    label={email}
                                    placeholder="Twój E-mail"
                                    validate={required}
                                    type="email"
                                />
                            </RowItem>
                        </Row>
                        <FormTextfield
                            diabled={isLoading}
                            name="wiadomość"
                            label={message}
                            placeholder="Twoja Wiadomość"
                            type="text"
                            area
                        />
                        <ButtonWrapper>
                            <Button
                                label={button}
                                isLoading={isLoading}
                                type="submit"
                                disabled={isLoading || submitError}
                            />
                        </ButtonWrapper>
                    </StyledForm>
                )}
            />
        </Container>
    );
};

export default Contact;
