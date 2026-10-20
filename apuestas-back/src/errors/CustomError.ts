export class CustomError extends Error {
    constructor(
        public readonly statusCode: number,
        public readonly message: string,
        public readonly errors: any[] = [],
        public readonly errorTrace: any = {},
    ) {
        super(message);
    }

    static badRequest(message: string, errors: any[] = [], errorTrace = {}) {
        return new CustomError(400, message, errors, errorTrace);
    }

    static unauthorized(message: string, errors: any[] = [], errorTrace = {}) {
        return new CustomError(401, message, errors, errorTrace);
    }

    static forbidden(message: string, errors: any[] = [], errorTrace = {}) {
        return new CustomError(403, message, errors, errorTrace);
    }

    static notFound(message: string, errors: any[] = [], errorTrace = {}) {
        return new CustomError(404, message, errors, errorTrace);
    }

    static internalServer(
        message: string,
        errors: any[] = [],
        errorTrace = {},
    ) {
        return new CustomError(500, message, errors, (errorTrace = {}));
    }
}
