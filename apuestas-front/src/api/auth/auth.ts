import { axiosClient } from '@/config/axiosConfig';
import type {
    iAuthLoginResponse,
    iAuthRegisterResponse,
    iLoginData,
    iRegisterData,
} from './authTypes';

export const registerReq = async (
    registerData: iRegisterData,
): Promise<iAuthRegisterResponse> => {
    const { data } = await axiosClient.post('/auth/register', registerData);
    return data;
};

export const loginReq = async (
    loginData: iLoginData,
): Promise<iAuthLoginResponse> => {
    const { data } = await axiosClient.post('/auth/login', loginData);
    return data;
};

export const logOut = () => {
    localStorage.clear();
};

export function setLocalData(token: string, email: string, fullName: string) {
    localStorage.setItem('snail-tkn', token);
    localStorage.setItem('user-email', email);
    localStorage.setItem('user-fullName', fullName);
}
