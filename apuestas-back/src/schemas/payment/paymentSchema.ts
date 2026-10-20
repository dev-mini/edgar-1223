import zod from 'zod';

const EXPIRATION_FORMAT = /^(0[1-9]|1[0-2])\/\d{2}$/;

const paymentSchema = zod.object({
    cardNumber: zod
        .string()
        .regex(/^\d{16}$/, 'Card number must have 16 digits'),
    expiryDate: zod
        .string()
        .trim()
        .regex(EXPIRATION_FORMAT, 'Expiration date must use the MM/YY format')
        .refine((value) => {
            const [month, year] = value.split('/').map(Number);
            // Day 0 of the next month = last day of the expiration month
            const endOfMonth = new Date(2000 + year, month, 0, 23, 59, 59, 999);
            return endOfMonth >= new Date();
        }, 'Your card has expired')
        .refine((value) => {
            const year = 2000 + Number(value.split('/')[1]);
            return year <= new Date().getFullYear() + 20;
        }, 'Expiration date is too far in the future'),
    cvv: zod.string().regex(/^\d{3}$/, 'CVV must have 3 digits'),
    fullName: zod
        .string()
        .trim()
        .min(3, 'Full name must be at least 3 characters')
        .max(100, 'Full name is too long'),
    amount: zod.number().max(10000).gt(0).positive(),
});

export function validatePaymentData(object: any) {
    return paymentSchema.safeParse(object);
}
