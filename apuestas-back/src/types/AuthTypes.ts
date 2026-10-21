import { Request } from 'express';
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

export interface LoginBodyReq {
    email: string;
    password: string;
}

export interface LoginBodyResponse {
    statusCode: number;
    user: Omit<User, 'password'>;
    token: string | unknown;
}

export interface AuthRequest extends Request {
    user?: { id: string; email: string };
}
