'use client'

import { useContext, useEffect } from "react";
import { WeatherContext } from "@/context/WeatherContext";
import { useState } from "react";

export default function BackDrop() {
    const weatherData = useContext(WeatherContext);
    const [gradient1, setGradient1] = useState("from-slate-500 to-slate-300");
    const [gradient2, setGradient2] = useState("from-blue-200 to-slate-400");

    useEffect(() => {
        if (weatherData) {
            switch (weatherData.current.weather_code) {
                // switch (77) {
                case 0:  	            // Clear sky
                    setGradient1("from-red-500 to-orange-400");
                    setGradient2("from-orange-400 via-orange-400 to-yellow-100");
                    break;
                case 1:
                case 2:
                case 3:                // Partly cloudy
                    if (weatherData.current.temperature_2m > 20) {
                        setGradient1("from-red-500 to-orange-400");
                        setGradient2("from-orange-400 via-orange-400 to-yellow-100");
                        break;
                    }
                case 45:
                case 48:               // Fog
                case 51:
                case 53:
                case 55:               // Drizzle
                case 56:
                case 57:               // Freezing drizzle
                case 61:
                case 63:
                case 65:               // Rain
                case 66:
                case 67:               // Freezing rain
                case 95:
                case 96:
                case 99:               // Thunderstorm
                    setGradient1("from-purple-500 to-cyan-600");
                    setGradient2("from-blue-700 to-slate-400");
                    break;
                case 71:
                case 73:
                case 75:
                case 85:
                case 86:               // Snow
                case 77:               // Hail
                    setGradient1("from-purple-500 to-cyan-400");
                    setGradient2("from-blue-500 to-gray-300");
                    break;
            }
        }
    }
        , [weatherData]);

    return (
        <div className="fixed p-1 w-full h-[100vw] min-h-[80vw] max-w-[100vh] self-center top-1/4 animate-[pulse_10s_infinite] from-gray-300">
            <div className={`h-1/2 w-full bg-gradient-to-br ${gradient1} rounded-tl-full rounded-tr-full`}></div>
            <div className={`h-1/2 w-full bg-gradient-to-br ${gradient2} rounded-bl-full rounded-br-full`}></div>
        </div>
    );
}
