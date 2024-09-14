'use client'

import { useContext } from "react";
import { WeatherContext } from "@/context/WeatherContext";
import { CloudDrizzle, CloudFog, CloudHail, CloudLightning, CloudRain, CloudSnow, CloudSun, Sun } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

export default function Temperature() {
    const weatherData = useContext(WeatherContext);

    if (!weatherData) {
        return <Skeleton className="w-12 h-12 bg-white" />;
    } else {
        switch (weatherData.current.weather_code) {
            case 0:  	            // Clear sky
                return <Sun size={48} />;
            case 1:
            case 2:
            case 3:                // Partly cloudy
                return <CloudSun size={48} />;
            case 45:
            case 48:               // Fog
                return <CloudFog size={48} />;
            case 51:
            case 53:
            case 55:               // Drizzle
                return <CloudDrizzle size={48} />;
            case 56:
            case 57:               // Freezing drizzle
                return <CloudDrizzle size={48} />;
            case 61:
            case 63:
            case 65:               // Rain
                return <CloudRain size={48} />;
            case 66:
            case 67:               // Freezing rain
                return <CloudRain size={48} />;
            case 71:
            case 73:
            case 75:
            case 85:
            case 86:               // Snow
                return <CloudSnow size={48} />;
            case 77:               // Hail
                return <CloudHail size={48} />;
            case 95:
            case 96:
            case 99:               // Thunderstorm
                return <CloudLightning size={48} />;
            default:
                return null;
        }
    }
}
