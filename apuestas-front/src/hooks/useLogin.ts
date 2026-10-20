import { useEffect, useState } from 'react';
import useValidationForm from './useValidationForm';
import { loginReq, setLocalData } from '@/api/auth/auth';
import { toast } from '@/components/ui/toast';
import { handleErrorResponse } from '@/utils/handleErrorResponse';
import { useNavigate } from 'react-router';

const INITIAL_VALUES = {
    email: '',
    password: '',
};

export const useLogin = () => {
    const {
        values,
        errors,
        isEnableSubmit,
        handleChange,
        setIsEnableSubmit,
        areRequiredFieldsFulfilled,
        validate,
    } = useValidationForm(INITIAL_VALUES);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmitLoginData = async () => {
        try {
            setLoading(true);
            const loginData = {
                email: values?.email.trim(),
                password: values?.password.trim(),
            };

            Object.entries(loginData).forEach(([name, value]) => {
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

            const {
                token,
                user: { fullName, email },
            } = await loginReq(loginData);

            toast.add({
                type: 'success',
                description: 'Login successful',
                priority: 'high',
            });

            setLocalData(token, email, fullName);

            navigate('/dashboard', { replace: true });
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

    return {
        values,
        errors,
        isEnableSubmit,
        handleChange,
        handleSubmitLoginData,
        loading,
    };
};
