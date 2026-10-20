interface User {
    id: string;
    email: string;
    fullName: string;
}

export interface iRegisterData {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface iAuthRegisterResponse {
    statusCode: number;
    id: string;
    fullName: string;
    email: string;
}

export interface iLoginData {
    email: string;
    password: string;
}

export interface iAuthLoginResponse {
    statusCode: number;
    user: User;
    token: string;
}
