import 'dotenv/config';
import { Server } from './server';
import { AppRoutes } from './routes';

(() => {
    main();
})();

function main() {
    const server = new Server({
        port: Number(process.env.PORT) || 4000,
        routes: AppRoutes.routes,
    });

    server.start();
}
