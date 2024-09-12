'use client'

import { useContext } from "react";
import { WeatherContext } from "@/context/WeatherContext";
import { Skeleton } from "./ui/skeleton";

export default function WindIcon() {
    const weatherData = useContext(WeatherContext);

    if (!weatherData) {
        return <Skeleton className="ml-6 w-36 h-12 bg-white" />;
    } else {
        console.log(weatherData.current);

        return (
            <div className="flex flex-col justify-center">
                <div className="w-32 h-32">
                    <div className="relative inset-0 text-xl font-bold w-32 h-32 left-8">
                        <span className="absolute top-4 left-1/2 -translate-x-1/2">N</span>
                        <span className="absolute bottom-4 left-1/2 -translate-x-1/2">S</span>
                        <span className="absolute left-4 top-1/2 -translate-y-1/2">W</span>
                        <span className="absolute right-4 top-1/2 -translate-y-1/2">E</span>
                    </div>

                    <div className="relative inset-0 w-32 h-32 -top-32 left-8">
                        <div className="relative w-full h-full" style={{ transform: `rotate(${weatherData.current.wind_direction_10m}deg)` }}>
                            <div className="absolute top-1/4 left-1/2 w-1 h-1/4 bg-white -translate-x-1/2 origin-bottom" style={{ clipPath: 'polygon(50% 0, 0 100%, 100% 100%)' }}></div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-4xl pl-6 font-bold">{weatherData.current.wind_speed_10m + ' ' + weatherData.current_units.wind_speed_10m}</p>
                </div>
            </div>
        );
    }
}
