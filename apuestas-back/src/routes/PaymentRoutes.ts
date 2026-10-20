import { Router } from 'express';
import { AuthMiddleware } from '../middlewares/auth.middleware';
import { PaymentService } from '../services/PaymentService';
import { PaymentController } from '../controllers/PaymentController';

export class PaymentRoutes {
    static get routes(): Router {
        const router = Router();

        const paymentService = new PaymentService();

        const paymentController = new PaymentController(paymentService);

        router.use([AuthMiddleware.validateJWT]);
        router.post('/pay', paymentController.payment);

        return router;
    }
}
