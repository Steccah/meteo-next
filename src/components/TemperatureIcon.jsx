'use client'

import { useContext } from "react";
import { WeatherContext } from "@/context/WeatherContext";
import { Skeleton } from "./ui/skeleton";

export default function TemperatureIcon() {
    const weatherData = useContext(WeatherContext);

    if (!weatherData) {
        return <Skeleton className="ml-6 w-36 h-12 bg-white" />;
    } else {
        console.log("Weather code: ", weatherData.current.temperature_2m, weatherData.current.temperature_2m);
        return (
            <div>
                <p className="text-4xl pl-6 font-bold">{weatherData.current.temperature_2m + weatherData.current_units.temperature_2m}</p>
            </div>
        );
    }
}
