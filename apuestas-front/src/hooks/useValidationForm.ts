import { useState } from 'react';

const emailRegex =
    /^[a-zA-Z0-9](?!.*[._%+-]{2})[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const useValidationForm = (initialValues: Record<string, string>) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isEnableSubmit, setIsEnableSubmit] = useState(false);

    const handleChange = (name: string, value: string) => {
        setValues({
            ...values,
            [name]: value,
        });
        validate(name, value);
        setIsEnableSubmit(true);
    };

    const validate = (name: string, value: string) => {
        switch (name) {
            case 'fullName':
                if (value === '' || value.trim().length === 0) {
                    addError(name, 'Full name is required.');
                } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value)) {
                    addError(
                        name,
                        'Full name must be of characters and spaces',
                    );
                } else if (value.length < 3) {
                    addError(name, 'Full name must be at least 3 characters');
                } else if (value.length > 50) {
                    addError(
                        name,
                        'El nombre no puede tener más de 50 caracteres',
                    );
                } else {
                    removeError(name);
                }
                break;
            case 'email':
                if (!value || value.trim().length === 0) {
                    addError(name, 'Email is required');
                } else if (!emailRegex.test(value)) {
                    addError(name, 'Invalid email format');
                } else if (!/^\S+$/.test(value)) {
                    addError(name, 'Email cannot have spaces');
                } else {
                    removeError(name);
                }
                break;
            case 'password':
                if (value === '') {
                    addError(name, 'Password is required.');
                } else if (value.length < 8) {
                    addError(name, 'Password must be at least 8 characters');
                } else if (!/[A-Z]/.test(value)) {
                    addError(
                        name,
                        'Password must have at least one uppercase letter',
                    );
                } else if (!/[a-z]/.test(value)) {
                    addError(
                        name,
                        'Password must have at least one lowercase letter',
                    );
                } else if (!/\d/.test(value)) {
                    addError(name, 'Password must have at least one number');
                } else {
                    removeError(name);
                }
                break;
            case 'confirmPassword':
                if (!value) {
                    addError(name, 'Confirm password is required.');
                } else if (value !== values?.password) {
                    addError(name, 'Confirm password dont match the password');
                } else {
                    removeError(name);
                }
                break;
            default:
                break;
        }
    };

    const addError = (name: string, error: string) => {
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: error,
        }));
    };

    const removeError = (name: string) => {
        let { [name]: _, ...newErrors } = errors;
        setErrors(newErrors);
    };

    const areRequiredFieldsFulfilled = (notRequiredFields: string[] = []) => {
        const requiredFields = Object.keys(values).filter(
            (key) => !notRequiredFields.includes(key) && values[key] === '',
        );
        return requiredFields.length === 0;
    };

    return {
        values,
        errors,
        isEnableSubmit,
        setValues,
        setErrors,
        setIsEnableSubmit,
        handleChange,
        addError,
        removeError,
        validate,
        areRequiredFieldsFulfilled,
    };
};

export default useValidationForm;
