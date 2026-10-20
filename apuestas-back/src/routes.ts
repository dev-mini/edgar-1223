import { Response, Router } from 'express';

export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        router.get('/api/health', (_, res: Response) => {
            res.status(200).send('Healthy!!');
        });

        return router;
    }
}
