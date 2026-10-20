'use client';

import { TrendingUp } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from 'recharts';

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
import { races, snails } from '@/utils/constants';

export const description = 'A bar chart with a label';

const winsPerSnail = snails.map((name) => ({
    snail: name,
    wins: races.filter((race) => race.winner === name).length,
}));
// => Rayo 2, Turbo 2, Flecha 1, Chispa 1, Gary 0, Rocky 0

const chartConfig = {
    wins: {
        label: 'Wins',
        color: 'var(--chart-1)',
    },
} satisfies ChartConfig;

export function ChartBarLabel() {
    const date = new Date();
    return (
        <Card>
            <CardHeader>
                <CardTitle>Today's history race</CardTitle>
                <CardDescription>
                    <span>{date.toDateString()}</span>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-62.5 min-h-32 w-full"
                >
                    <BarChart
                        accessibilityLayer
                        data={winsPerSnail}
                        margin={{
                            top: 20,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="snail"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="wins" fill="var(--color-wins)" radius={8}>
                            <LabelList
                                position="top"
                                offset={12}
                                className="fill-foreground"
                                fontSize={12}
                            />
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 leading-none font-medium">
                    Rayo and Turbo went hard this day
                    <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing today's races results
                </div>
            </CardFooter>
        </Card>
    );
}
