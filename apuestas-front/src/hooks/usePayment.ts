import { useEffect, useState } from 'react';
import useValidationForm from './useValidationForm';
import { toast } from '@/components/ui/toast';
import { handleErrorResponse } from '@/utils/handleErrorResponse';
import { buyCredits } from '@/api/payments/payments';

const INITIAL_VALUES = {
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    fullName: '',
    amount: '',
};

export const usePayment = () => {
    const {
        values,
        errors,
        isEnableSubmit,
        handleChange,
        setIsEnableSubmit,
        areRequiredFieldsFulfilled,
        validate,
        setValues,
    } = useValidationForm(INITIAL_VALUES);
    const [loading, setLoading] = useState(false);

    const handleSubmitPayment = async () => {
        try {
            setLoading(true);
            const paymentData = {
                cardNumber: values?.cardNumber.trim(),
                expiryDate: values?.expiryDate.trim(),
                cvv: values?.cvv.trim(),
                fullName: values?.fullName.trim(),
                amount: values?.amount.trim(),
            };

            Object.entries(paymentData).forEach(([name, value]) => {
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

            const res = await buyCredits(paymentData);

            if (res.statusCode === 201 && res.payment.status === 'Success') {
                let currentCredit = Number(
                    localStorage.getItem('user-credit') ?? 0,
                );

                currentCredit += Number(res.payment.transaction_amount);

                localStorage.setItem('user-credit', currentCredit.toString());

                toast.add({
                    type: 'success',
                    description: 'Credits added successfully',
                    priority: 'high',
                });
            }

            setValues(INITIAL_VALUES);
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
        handleSubmitPayment,
        loading,
    };
};
