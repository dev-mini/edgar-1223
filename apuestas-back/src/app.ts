import { Server } from './server';
import { AppRoutes } from './routes';

(() => {
    main();
})();

function main() {
    const server = new Server({
        port: 4000,
        routes: AppRoutes.routes,
    });

    server.start();
}
