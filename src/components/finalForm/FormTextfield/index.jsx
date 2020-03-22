import React from 'react';
import PropTypes from 'prop-types';

import { Field } from 'react-final-form';

import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
`;
Container.displayName = 'Container';

const Label = styled.label`
    
`;
Label.displayName = 'Label';

const LabelText = styled.h3`
    font-weight: 400;
    font-size: 22px;
    margin: 0;
`;

const FieldWrapper = styled.div`
    width: 100%;
`;
FieldWrapper.displayName = 'FieldWrapper';

const InputWrapper = styled.div`
    position: relative;
    width: 100%;
`;
InputWrapper.displayName = 'InputWrapper';

const InputError = styled.span`
    position: absolute;
    left: 0;
    bottom: 15px;
    color: red;
    opacity: .7;
    font-size: 14px;
`;
InputError.displayName = 'InputError';

const TextfieldInput = styled.input`
    box-shadow: none;
    border: none;
    background: none;
    width: 100%;
    padding: 5px;
    border-bottom: 1px solid rgba(${({ isError }) => isError ? '255, 0, 0, .5' : '0, 0, 0, .3'});
    outline: none;
    transition: border .5s;
    margin: 10px 0 40px;

    &:focus {
        border-bottom: 1px solid rgba(0, 0, 0, .9);
    }
`;
TextfieldInput.displayName = 'TextfieldInput';

const TextfieldArea = styled.textarea`
    box-shadow: none;
    border: none;
    background: none;
    width: 100%;
    padding: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, .3);
    outline: none;
    transition: border .5s;
    margin: 10px 0 40px;

    &:focus {
        border-bottom: 1px solid rgba(0, 0, 0, .9);
    }
`;
TextfieldArea.displayName = 'TextfieldArea';

const propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    autoComplete: PropTypes.string,
    placeholder: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    disabled: PropTypes.bool,
    validate: PropTypes.func
};

const FormTextfield = ({ label, name, placeholder, type, autoComplete, disabled, validate, area }) => {
    return (
        <Container>
            <Label><LabelText>{label}</LabelText></Label>
            <FieldWrapper>
                <Field name={name} validate={validate}>
                    {
                        props => {
                            const isError = (props.meta.error || props.meta.submitError) && props.meta.touched;
                            return (
                                <InputWrapper>
                                    {
                                        area ? (
                                            <TextfieldArea
                                                name={props.input.name}
                                                value={props.input.value}
                                                onChange={props.input.onChange}
                                                placeholder={placeholder}
                                                type={type}
                                                autoComplete={autoComplete}
                                                disabled={disabled}
                                            />
                                        ) : (
                                            <TextfieldInput
                                                name={props.input.name}
                                                value={props.input.value}
                                                onChange={props.input.onChange}
                                                placeholder={placeholder}
                                                type={type}
                                                autoComplete={autoComplete}
                                                disabled={disabled}
                                                isError={isError}
                                            />
                                        )
                                    }
                                    
                                    {isError && <InputError>{props.meta.error || props.meta.submitError}</InputError>}
                                </InputWrapper>
                            );
                        }
                    }
                </Field>
            </FieldWrapper>
        </Container>
    );
};

FormTextfield.propTypes = propTypes;

export default FormTextfield;