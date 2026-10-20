import { CustomError } from '../errors/CustomError';
import { RegisterBodyReq, RegisterBodyResponse } from '../types/AuthTypes';
import users from '../data/users.json';
import crypto from 'node:crypto';
import { bcryptAdapter } from '../config/bcryptAdapter';
import { User } from '../types/UsersTypes';

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
            email,
        };

        usersData.push({ ...newUser, password: bcryptAdapter.hash(password) });

        const successResponse: RegisterBodyResponse = {
            statusCode: 201,
            user: newUser,
        };

        return successResponse;
    }
}
