import express, { Router } from 'express';
import { ServerOptions } from './types/ServerTypes';
import { corsMiddleware } from './middlewares/cors.middleware';

export class Server {
    public readonly app = express();
    private readonly port: number;
    private readonly routes: Router;

    constructor(serverOptions: ServerOptions) {
        const { port, routes } = serverOptions;
        this.port = port;
        this.routes = routes;
    }

    async start() {
        this.app.disable('x-powered-by');
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

        this.app.use(corsMiddleware());

        this.app.use(this.routes);

        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}
