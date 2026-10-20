import { useEffect, useState } from 'react';
import useValidationForm from './useValidationForm';

const INITIAL_VALUES = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

export const useRegister = () => {
    const {
        values,
        errors,
        isEnableSubmit,
        handleChange,
        addError,
        removeError,
        setIsEnableSubmit,
        areRequiredFieldsFulfilled,
    } = useValidationForm(INITIAL_VALUES);

    const handleSubmitRegisterData = () => {};

    useEffect(() => {
        if (!areRequiredFieldsFulfilled([]) || Object.keys(errors).length > 0) {
            setIsEnableSubmit(false);
        } else {
            setIsEnableSubmit(true);
        }
    }, [values, errors]);

    useEffect(() => {
        if (values.password !== values.confirmPassword) {
            addError('confirmPassword', 'Passwords dont match');
        } else {
            removeError('confirmPassword');
        }
    }, [values.password, values.confirmPassword]);

    return {
        values,
        errors,
        isEnableSubmit,
        handleChange,
    };
};
