import zod from 'zod';

const loginSchema = zod.object({
    email: zod.string({ error: 'Email is required' }).trim(),
    password: zod.string({ error: 'Password is required' }).trim(),
});

export function validateLoginCredentials(object: any) {
    return loginSchema.safeParse(object);
}
