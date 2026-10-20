import { Request, Response } from 'express';
import { CustomError } from '../errors/CustomError';
import { FORM_ERROR } from '../utils/constants';
import { handleError } from '../utils/handleError';
import { validatePaymentData } from '../schemas/payment/paymentSchema';
import { PaymentService } from '../services/PaymentService';

export class PaymentController {
    constructor(public readonly paymentService: PaymentService) {}

    payment = (req: Request, res: Response) => {
        const { id: payerId, email: payerEmail } = req.user!;
        const result = validatePaymentData(req.body);

        if (result.error) {
            const errors = JSON.parse(result.error.message);
            const error = new CustomError(422, FORM_ERROR, errors);
            handleError(error, res);
            return;
        }

        this.paymentService
            .addPayment({ ...result.data, payerId, payerEmail })
            .then((user) => res.json(user))
            .catch((error) => handleError(error, res));
    };
}
