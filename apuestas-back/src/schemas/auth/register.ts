import zod from 'zod';

const registerSchema = zod
    .object({
        fullName: zod
            .string()
            .trim()
            .min(3, 'Full name must be at least 3 characters')
            .max(100, 'Full name is too long'),
        email: zod
            .email({ error: 'Invalid email address' })
            .trim()
            .toLowerCase(),
        password: zod
            .string()
            .min(8, 'Password must be at least 8 characters')
            .regex(
                /[A-Z]/,
                'Password must include at least one uppercase letter',
            )
            .regex(
                /[a-z]/,
                'Password must include at least one lowercase letter',
            )
            .regex(/[0-9]/, 'Password must include at least one number'),

        confirmPassword: zod.string().min(1, 'Please confirm your password'),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Passwords dont match',
        path: ['confirmPassword'],
    });

export function validateCreateUser(object: any) {
    return registerSchema.safeParse(object);
}
