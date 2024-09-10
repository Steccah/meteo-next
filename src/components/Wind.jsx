'use client'

import { useContext } from "react";
import { WeatherContext, processWeatherData } from "@/context/WeatherContext";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

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
                            data={processWeatherData(weatherData)}
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
                            <YAxis dataKey={"wind_speed_10m"} tickFormatter={(value) => value + ' ' + weatherData.hourly_units.wind_speed_10m} />
                        </BarChart>
                    </ChartContainer>
                ) : (
                    <p>Loading temperature...</p>
                )}
            </CardContent>
        </Card>
    )
}
