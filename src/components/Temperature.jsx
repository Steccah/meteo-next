'use client'

import { useContext } from "react";
import { WeatherContext, processWeatherData } from "@/context/WeatherContext";
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
import { Skeleton } from "./ui/skeleton";

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--primary))",
    },

}

export default function Temperature() {
    const weatherData = useContext(WeatherContext);

    return (
        <div className="w-screen overflow-x-auto relative">
            {weatherData ? (
                <ChartContainer className="min-h-[20px] max-h-52 w-[300%] overflow-x-auto" config={chartConfig}>
                    <AreaChart
                        data={processWeatherData(weatherData)}
                        margin={{
                            left: 0,
                            right: 0,
                        }}
                    >
                        {/* <CartesianGrid vertical={false} /> */}
                        <XAxis axisLine={false} dataKey="time" minTickGap={20} tickMargin={8} tickFormatter={(value) => value.slice(-5)} />
                        <XAxis axisLine={false} tickLine={false} dataKey="temperature_2m" minTickGap={15} tickFormatter={(value) => value + weatherData.hourly_units.temperature_2m} xAxisId={1} />
                        {/* <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line" />}
                        /> */}
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
                        {/* <YAxis dataKey={"temperature_2m"} tickFormatter={(value) => value + weatherData.hourly_units.temperature_2m} /> */}
                    </AreaChart>
                </ChartContainer>
            ) : (
                <Skeleton className="w-full h-52" />
            )}
        </div>
    )
}
