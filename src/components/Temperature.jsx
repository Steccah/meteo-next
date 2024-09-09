'use client'

import { useContext } from "react";
import { WeatherContext } from "@/context/WeatherContext";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--primary))",
    },
}

export default function Temperature() {
    const weatherData = useContext(WeatherContext);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Temperature </CardTitle>
            </CardHeader>
            <CardContent>
                {weatherData ? (
                    <ChartContainer config={chartConfig}>
                        <AreaChart
                            data={weatherData}
                            margin={{
                                left: 12,
                                right: 12,
                            }}
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis dataKey="time" tickMargin={8} tickFormatter={(value) => value.slice(-5)} />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent indicator="line" />}
                            />
                            <defs>
                                <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                                    <stop
                                        offset="5%"
                                        stopColor="var(--color-desktop)"
                                        stopOpacity={0.8}
                                    />
                                    <stop
                                        offset="95%"
                                        stopColor="var(--color-desktop)"
                                        stopOpacity={0.1}
                                    />
                                </linearGradient>
                            </defs>
                            <Area
                                dataKey="temperature_2m"
                                type="natural"
                                fill="url(#fillDesktop)"
                                stroke="var(--color-desktop)"
                            />
                            <YAxis dataKey={"temperature_2m"} />
                        </AreaChart>
                    </ChartContainer>
                ) : (
                    <p>Loading temperature...</p>
                )}
            </CardContent>
        </Card>
    )
}
