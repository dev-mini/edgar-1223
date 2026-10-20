export interface iRegisterData {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface iAuthRegisterResponse {
    id: string;
    fullName: string;
    email: string;
}

export interface iLoginData {
    email: string;
    password: string;
}

export interface iAuthLoginResponse {
    id: string;
    fullName: string;
    email: string;
    token: string;
}
