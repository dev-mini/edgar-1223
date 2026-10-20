import { Response, Router } from 'express';
import { AuthRoutes } from './routes/AuthRoutes';
import { PaymentRoutes } from './routes/PaymentRoutes';

export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        router.use('/api/auth', AuthRoutes.routes);
        router.use('/api/snailpay', PaymentRoutes.routes);

        router.get('/api/health', (_, res: Response) => {
            res.status(200).send('Healthy!!');
        });

        return router;
    }
}
