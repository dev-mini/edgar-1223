import { axiosClient, getToken } from '@/config/axiosConfig';
import type { iPaymentDataReq, iPaymentResponse } from './paymentTypes';

export const buyCredits = async (
    paymentData: iPaymentDataReq,
): Promise<iPaymentResponse> => {
    getToken();
    const { data } = await axiosClient.post('/snailpay/pay', paymentData);
    return data;
};
