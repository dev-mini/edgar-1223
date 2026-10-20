import type { Race, UserBet } from '@/api/dashboard/dashboardTypes';

export const snails = [
    'Rayo',
    'Turbo',
    'Flecha',
    'Chispa',
    'Gary',
    'Rocky',
] as const;

export const myBets: UserBet[] = [
    { race: 1, snail: 'Rayo' }, // won
    { race: 1, snail: 'Gary' }, // lost
    { race: 2, snail: 'Rayo' }, // lost
    { race: 2, snail: 'Turbo' }, // won
    { race: 2, snail: 'Rocky' }, // lost
    { race: 3, snail: 'Flecha' }, // lost
    { race: 3, snail: 'Turbo' }, // lost
    { race: 4, snail: 'Flecha' }, // won
    { race: 4, snail: 'Rayo' }, // lost
    { race: 5, snail: 'Chispa' }, // won
    { race: 5, snail: 'Turbo' }, // lost
    { race: 5, snail: 'Gary' }, // lost
    { race: 6, snail: 'Turbo' }, // won
    { race: 6, snail: 'Rayo' }, // lost
];

export const races: Race[] = [
    { raceNumber: 1, winner: 'Rayo' },
    { raceNumber: 2, winner: 'Turbo' },
    { raceNumber: 3, winner: 'Rayo' },
    { raceNumber: 4, winner: 'Flecha' },
    { raceNumber: 5, winner: 'Chispa' },
    { raceNumber: 6, winner: 'Turbo' },
];
