import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../errors/CustomError';
import {
    INVALID_BEARER_TOKEN,
    INVALID_TOKEN,
    MISSING_TOKEN,
    SERVER_ERROR,
} from '../utils/constants';
import { JwtAdapter } from '../config/JwtAdapter';
import { handleError } from '../utils/handleError';

export class AuthMiddleware {
    static async validateJWT(req: Request, res: Response, next: NextFunction) {
        const authorization = req.header('Authorization');
        if (!authorization) {
            const error = CustomError.unauthorized(MISSING_TOKEN);
            res.status(401).json(handleError(error, res));
            return;
        }

        if (!authorization.startsWith('Bearer ')) {
            const error = CustomError.unauthorized(INVALID_BEARER_TOKEN);
            res.status(401).json(handleError(error, res));
            return;
        }

        const token = authorization.split(' ').at(1) || '';

        try {
            const payload = await JwtAdapter.validateToken<{ id: string }>(
                token,
            );

            if (!payload) {
                const error = CustomError.unauthorized(INVALID_TOKEN);
                res.status(401).json(handleError(error, res));
                return;
            }

            next();
        } catch (error) {
            console.log(error);
            const customError = CustomError.internalServer(SERVER_ERROR);
            res.status(500).json(handleError(customError, res));
        }
    }
}
