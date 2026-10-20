import { useEffect, useState } from 'react';
import useValidationForm from './useValidationForm';
import { registerReq } from '@/api/auth/auth';
import { toast } from '@/components/ui/toast';
import { handleErrorResponse } from '@/utils/handleErrorResponse';
import { useNavigate } from 'react-router';

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
        validate,
    } = useValidationForm(INITIAL_VALUES);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmitRegisterData = async () => {
        try {
            setLoading(true);
            const registerData = {
                fullName: values?.fullName.trim(),
                email: values?.email.trim(),
                password: values?.password.trim(),
                confirmPassword: values?.confirmPassword.trim(),
            };

            Object.entries(registerData).forEach(([name, value]) => {
                validate(name, value);
            });

            if (
                !areRequiredFieldsFulfilled([]) ||
                Object.keys(errors).length > 0
            ) {
                toast.add({
                    type: 'error',
                    description: 'Complete the required fields',
                    priority: 'high',
                });
            }

            await registerReq(registerData);

            toast.add({
                type: 'success',
                description: 'User registered successfully',
                priority: 'high',
            });

            navigate('/login', { replace: true });
        } catch (error) {
            console.log(error);
            handleErrorResponse(error);
        } finally {
            setLoading(false);
        }
    };

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
        handleSubmitRegisterData,
        loading,
    };
};
