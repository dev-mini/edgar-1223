import { User } from './UsersTypes';

export interface RegisterBodyReq {
    fullName: string;
    email: string;
    password: string;
}

export interface RegisterBodyResponse {
    statusCode: number;
    user: Omit<User, 'password'>;
}
