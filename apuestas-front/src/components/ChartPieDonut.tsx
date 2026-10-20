import { TrendingDown } from 'lucide-react';
import { Pie, PieChart } from 'recharts';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from '@/components/ui/chart';
import { myBets, races } from '@/utils/constants';

const ganadas = myBets.filter(
    (bet) =>
        races.find((race) => race.raceNumber === bet.race)?.winner ===
        bet.snail,
).length;

const donutBetsData = [
    { status: 'wins', amount: ganadas, fill: 'var(--color-wins)' },
    {
        status: 'loses',
        amount: myBets.length - ganadas,
        fill: 'var(--color-loses)',
    },
];

export const description = 'A donut chart';

const chartConfig = {
    amount: {
        label: 'Bets made',
    },
    wins: {
        label: 'Wins',
        color: 'var(--chart-2)',
    },
    loses: {
        label: 'Loses',
        color: 'var(--chart-1)',
    },
} satisfies ChartConfig;

export function ChartPieDonut() {
    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>Bet history</CardTitle>
                <CardDescription>September - October 2024</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-62.5 min-h-32 w-full"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={donutBetsData}
                            dataKey="amount"
                            nameKey="status"
                            innerRadius={60}
                        />
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 leading-none font-medium">
                    Decreasing down by 5.2% this month
                    <TrendingDown className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total bets for the last 2 months
                </div>
            </CardFooter>
        </Card>
    );
}
