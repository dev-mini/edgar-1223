import { Request, Response } from 'express';
import { AuthService } from '../services/AuthService';
import { CustomError } from '../errors/CustomError';
import { FORM_ERROR } from '../utils/constants';
import { validateCreateUser } from '../schemas/auth/register';
import { handleError } from '../utils/handleError';
import { validateLoginCredentials } from '../schemas/auth/login';

export class AuthController {
    constructor(public readonly authService: AuthService) {}

    registerUser = (req: Request, res: Response) => {
        const result = validateCreateUser(req.body);

        if (result.error) {
            const errors = JSON.parse(result.error.message);
            const error = new CustomError(422, FORM_ERROR, errors);
            handleError(error, res);
            return;
        }

        this.authService
            .registerUser(result.data)
            .then((user) => res.json(user))
            .catch((error) => handleError(error, res));
    };

    loginUser = (req: Request, res: Response) => {
        const result = validateLoginCredentials(req.body);

        if (result.error) {
            const errors = JSON.parse(result.error.message);
            const error = new CustomError(422, FORM_ERROR, errors);
            handleError(error, res);
            return;
        }

        this.authService
            .loginUser(result.data)
            .then((user) => res.json(user))
            .catch((error) => handleError(error, res));
    };
}
