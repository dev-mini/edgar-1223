interface PaymentDetail {
    id: string;
    status: string;
    status_detail: string;
    transaction_amount: number;
    date_created: Date | string;
    authorization_code: number;
    reference: string;
    payer_id: string;
    payer_email: string;
}

export interface iPaymentDataReq {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    fullName: string;
    amount: string;
}

export interface iPaymentResponse {
    statusCode: number;
    payment: PaymentDetail;
}
