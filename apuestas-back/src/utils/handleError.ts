import { Response } from 'express';
import { CustomError } from '../errors/CustomError';
import { SERVER_ERROR } from './constants';

export const handleError = (error: any, res: Response) => {
    const { statusCode = 500, message = SERVER_ERROR, errors = [] } = error;
    const errorResponse = {
        error: {
            statusCode,
            message,
            errors,
        },
    };

    if (error instanceof CustomError)
        return res.status(statusCode).json(errorResponse);

    return res.status(statusCode).json(errorResponse);
};
