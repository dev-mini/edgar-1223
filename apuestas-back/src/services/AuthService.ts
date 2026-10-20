import { CustomError } from '../errors/CustomError';
import {
    LoginBodyReq,
    LoginBodyResponse,
    RegisterBodyReq,
    RegisterBodyResponse,
} from '../types/AuthTypes';
import users from '../data/users.json';
import crypto from 'node:crypto';
import { bcryptAdapter } from '../config/bcryptAdapter';
import { User } from '../types/UsersTypes';
import { JwtAdapter } from '../config/JwtAdapter';

const usersData: User[] = users as User[];

export class AuthService {
    public async registerUser({
        fullName,
        email,
        password,
    }: RegisterBodyReq): Promise<RegisterBodyResponse> {
        const user = usersData?.find((user: User) => user.email === email);

        if (user) throw CustomError.badRequest('Email already registered');

        const newUser = {
            id: crypto.randomUUID(),
            fullName,
            credit: 0,
            email,
        };

        usersData.push({ ...newUser, password: bcryptAdapter.hash(password) });

        const successResponse: RegisterBodyResponse = {
            statusCode: 201,
            user: newUser,
        };

        return successResponse;
    }

    public async loginUser({
        email,
        password,
    }: LoginBodyReq): Promise<LoginBodyResponse> {
        const existUser = usersData?.find((user: User) => user.email === email);

        if (!existUser) throw CustomError.notFound('User not found');

        if (!bcryptAdapter.compare(password, existUser.password))
            throw CustomError.unauthorized('Invalid credentials');

        const { password: existUserPassword, ...user } = existUser;

        const token = await JwtAdapter.generateToken({
            id: existUser.id,
            email: existUser.email,
        });

        if (!token)
            throw CustomError.internalServer('Error while creating JWT');

        const successResponse = {
            statusCode: 200,
            user,
            token,
        };

        return successResponse;
    }
}
