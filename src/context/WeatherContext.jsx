'use client'

import { createContext, useState, useEffect } from "react";

export const WeatherContext = createContext();

const processWeatherData = (data) => {
    return data.hourly.time.map((time, index) => ({
        time, // Use this as the X axis key
        temperature_2m: data.hourly.temperature_2m[index], // This is the Y axis key for temperature
        apparent_temperature: data.hourly.apparent_temperature[index], // You can add more if needed
        wind_speed_10m: data.hourly.wind_speed_10m[index], // Example for wind speed
    }));
};

export function WeatherProvider({ children }) {
    const [weatherData, setWeatherData] = useState(null);
    const [position, setPosition] = useState({ latitude: null, longitude: null });

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const { latitude, longitude } = pos.coords;
                    setPosition({ latitude, longitude });
                },
                (error) => {
                    console.error("Error getting geolocation: ", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }, []);

    useEffect(() => {
        if (position.latitude && position.longitude) {
            fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${position.latitude}&longitude=${position.longitude}&hourly=temperature_2m,apparent_temperature,rain,wind_speed_10m`
            )
                .then((response) => response.json())
                .then((data) => {
                    setWeatherData(processWeatherData(data));
                    console.log("Weather data: ", data);
                })
                .catch((error) => {
                    console.error("Error fetching weather data: ", error);
                });
        }
    }, [position]);

    return (
        <WeatherContext.Provider value={weatherData}>
            {children}
        </WeatherContext.Provider>
    );
}