import { useState } from 'react';

const emailRegex =
    /^[a-zA-Z0-9](?!.*[._%+-]{2})[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const onlyDigitsRegex = /^\d+$/;
const expiryDateRegex = /^\d{2}\/\d{2}$/;

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
            case 'cardNumber':
                if (!value.trim()) {
                    addError(name, 'Card number is required');
                } else if (!onlyDigitsRegex.test(value)) {
                    addError(name, 'Card number can only contain numbers');
                } else if (value.length !== 16) {
                    addError(name, 'Card number must have exactly 16 digits');
                } else {
                    removeError(name);
                }
                break;
            case 'expiryDate': {
                const [month, year] = value.split('/').map(Number);
                const endOfMonth = new Date(
                    2000 + year,
                    month,
                    0,
                    23,
                    59,
                    59,
                    999,
                );
                if (!value.trim()) {
                    addError(name, 'Expiration date is required');
                } else if (!expiryDateRegex.test(value)) {
                    addError(name, 'Expiration date must use the YY/MM format');
                } else if (month < 1 || month > 12) {
                    addError(name, 'Month must be between 01 and 12');
                } else if (endOfMonth < new Date()) {
                    addError(name, 'Your card has expired');
                } else if (2000 + year > new Date().getFullYear() + 20) {
                    addError(name, 'Expiration date is too far in the future');
                } else {
                    removeError(name);
                }
                break;
            }

            case 'cvv':
                if (!value.trim()) {
                    addError(name, 'CVV is required');
                } else if (!onlyDigitsRegex.test(value)) {
                    addError(name, 'CVV can only contain numbers');
                } else if (value.length !== 3) {
                    addError(name, 'CVV must have exactly 3 digits');
                } else {
                    removeError(name);
                }
                break;
            case 'amount': {
                const amount = Number(value);
                if (!value.trim()) {
                    addError(name, 'Amount is required');
                } else if (!onlyDigitsRegex.test(value)) {
                    addError(name, 'Amount can only contain numbers');
                } else if (amount <= 0) {
                    addError(name, 'Amount must be greater than 0');
                } else if (amount >= 10000) {
                    addError(name, 'Amount must be less than 10,000');
                } else {
                    removeError(name);
                }
                break;
            }
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
