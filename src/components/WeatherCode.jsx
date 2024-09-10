'use client'

import { useContext } from "react";
import { WeatherContext } from "@/context/WeatherContext";
import { CloudDrizzle, CloudFog, CloudHail, CloudLightning, CloudRain, CloudSnow, CloudSun, Sun } from "lucide-react";

export default function Temperature() {
    const weatherData = useContext(WeatherContext);

    if (!weatherData) {
        return <p>Loading icon...</p>;
    } else {
        console.log("Weather code: ", weatherData.current.weather_code);
        switch (weatherData.current.weather_code) {
            case 0:  	            // Clear sky
                return <Sun />;
            case 1:
            case 2:
            case 3:                // Partly cloudy
                return <CloudSun />;
            case 45:
            case 48:               // Fog
                return <CloudFog />;
            case 51:
            case 53:
            case 55:               // Drizzle
                return <CloudDrizzle />;
            case 56:
            case 57:               // Freezing drizzle
                return <CloudDrizzle />;
            case 61:
            case 63:
            case 65:               // Rain
                return <CloudRain />;
            case 66:
            case 67:               // Freezing rain
                return <CloudRain />;
            case 71:
            case 73:
            case 75:
            case 85:
            case 86:               // Snow
                return <CloudSnow />;
            case 77:               // Hail
                return <CloudHail />;
            case 95:
            case 96:
            case 99:               // Thunderstorm
                return <CloudLightning />;
            default:
                return null;
        }
    }
}
