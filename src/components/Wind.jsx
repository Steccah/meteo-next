'use client'

import { useContext } from "react";
import { WeatherContext } from "@/context/WeatherContext";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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

export default function Wind() {
    const weatherData = useContext(WeatherContext);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Wind</CardTitle>
            </CardHeader>
            <CardContent>
                {weatherData ? (
                    <ChartContainer config={chartConfig}>
                        <BarChart
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
                                content={<ChartTooltipContent hideLabel />}
                            />
                            <Bar
                                dataKey="wind_speed_10m"
                                fill="var(--color-desktop)"
                            />
                        </BarChart>
                    </ChartContainer>
                ) : (
                    <p>Loading temperature...</p>
                )}
            </CardContent>
        </Card>
    )
}
