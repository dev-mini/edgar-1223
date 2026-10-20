import { CustomError } from '../errors/CustomError';
import users from '../data/users.json';
import crypto from 'node:crypto';
import { User } from '../types/UsersTypes';
import {
    PaymentBodyReq,
    PaymentBodyResponse,
    PaymentStatus,
} from '../types/PaymentTypes';

const usersData: User[] = users as User[];

const VALID_CREDIT_CARD = '1234123412341234';
const SYSTEM_DOWN_CVV = '666';

export class PaymentService {
    public async addPayment({
        cardNumber,
        expiryDate,
        fullName,
        cvv,
        amount,
        payerId,
        payerEmail,
    }: PaymentBodyReq): Promise<PaymentBodyResponse> {
        const user = usersData?.find((user: User) => user.id === payerId);

        if (!user)
            throw CustomError.badRequest('Cannot add credits to this user');

        if (cardNumber !== VALID_CREDIT_CARD) {
            const paymentFailed = {
                id: crypto.randomUUID(),
                status: PaymentStatus.ERROR,
                status_detail: `Payment failed, your card number is not valid${cardNumber}`,
                transaction_amount: amount,
                date_created: new Date(),
                authorization_code: 4000,
                reference: `Payment intent for $${amount} failed with card ${cardNumber}`,
                payer_id: user.id,
                payer_email: payerEmail,
            };

            throw CustomError.badRequest(
                paymentFailed.status_detail,
                [],
                paymentFailed,
            );
        }

        if (cvv === SYSTEM_DOWN_CVV) {
            const paymentFailed = {
                id: crypto.randomUUID(),
                status: PaymentStatus.ERROR,
                status_detail: `We're experiencing some issues, SnailPay cant process your payment, try later`,
                transaction_amount: amount,
                date_created: new Date(),
                authorization_code: 5000,
                reference: `Internal issues with the servers`,
                payer_id: user.id,
                payer_email: payerEmail,
            };

            throw CustomError.badRequest(
                paymentFailed.status_detail,
                [],
                paymentFailed,
            );
        }

        const newPayment = {
            id: crypto.randomUUID(),
            status: PaymentStatus.SUCCESS,
            status_detail: `Payment succesful, $${amount} added to: ${payerEmail}`,
            transaction_amount: amount,
            date_created: new Date(),
            authorization_code: 2000,
            reference: `Credits for races to: ${payerEmail}`,
            payer_id: user.id,
            payer_email: payerEmail,
        };

        const successResponse: PaymentBodyResponse = {
            statusCode: 201,
            payment: newPayment,
        };

        return successResponse;
    }
}
