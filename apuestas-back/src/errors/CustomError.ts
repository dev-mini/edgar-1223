export class CustomError extends Error {
    constructor(
        public readonly statusCode: number,
        public readonly message: string,
        public readonly errors: any[] = [],
    ) {
        super(message);
    }

    static badRequest(message: string, errors: any[] = []) {
        return new CustomError(400, message, errors);
    }

    static unauthorized(message: string, errors: any[] = []) {
        return new CustomError(401, message, errors);
    }

    static forbidden(message: string, errors: any[] = []) {
        return new CustomError(403, message, errors);
    }

    static notFound(message: string, errors: any[] = []) {
        return new CustomError(404, message, errors);
    }

    static internalServer(message: string, errors: any[] = []) {
        return new CustomError(500, message, errors);
    }
}
