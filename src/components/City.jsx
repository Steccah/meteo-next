'use client'

import { useContext, useState } from "react";
import { WeatherContext } from "@/context/WeatherContext";

export default function City() {
    const weatherData = useContext(WeatherContext);
    const [city, setCity] = useState("");

    if (weatherData) {
        console.log("https://geocode.xyz/" + weatherData.latitude + "," + weatherData.longitude + "?json=1");
        fetch("https://geocode.xyz/" + weatherData.latitude + "," + weatherData.longitude + "?json=1")
            .then((response) => response.json())
            .then((data) => {
                if (data.city.includes("Throttled!")) {
                    console.error("Geocode API throttled!");
                } else {
                    setCity(data.city);
                }
            })
            .catch((error) => {
                console.error("Error fetching city: ", error);
            });
    }

    return (
        <h2 className="text-2xl font-semibold">{city}</h2>
    );
}
