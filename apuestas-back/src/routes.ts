import { Response, Router } from 'express';
import { AuthRoutes } from './routes/AuthRoutes';

export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        router.use('/api/auth', AuthRoutes.routes);

        router.get('/api/health', (_, res: Response) => {
            res.status(200).send('Healthy!!');
        });

        return router;
    }
}
