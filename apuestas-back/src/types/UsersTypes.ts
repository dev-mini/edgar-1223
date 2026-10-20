import crypto from 'node:crypto';

export interface User {
    id: crypto.UUID;
    fullName: string;
    email: string;
    credit: number;
    password: string;
}
