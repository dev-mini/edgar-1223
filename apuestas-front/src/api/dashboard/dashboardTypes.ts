import type { snails } from '@/utils/constants';

export type Snail = (typeof snails)[number];

export interface UserBet {
    race: number;
    snail: Snail;
}

export interface Race {
    raceNumber: number;
    winner: Snail;
}
