import crypto from 'node:crypto';

export interface PaymentBodyReq {
    cardNumber: string;
    expiryDate: string;
    fullName: string;
    cvv: string;
    amount: number;
    payerId: string;
    payerEmail: string;
}

export interface PaymentDetail {
    id: crypto.UUID;
    status: PaymentStatus;
    status_detail: string;
    transaction_amount: number;
    date_created: Date | string;
    authorization_code: number;
    reference: string;
    payer_id: crypto.UUID;
    payer_email: string;
}

export interface PaymentBodyResponse {
    statusCode: number;
    payment: PaymentDetail;
}

export enum PaymentStatus {
    SUCCESS = 'Success',
    ERROR = 'Failed',
    PENDING = 'Pending',
}
