'use client'
import Nav from "@/components/nav";
import { WeatherProvider } from "@/context/WeatherContext"; // The WeatherContext you created
import Temperature from "@/components/Temperature";
import Wind from "@/components/Wind";
import WeatherCode from "@/components/WeatherCode";
import City from "@/components/City";
import Image from "next/image";
import TemperatureIcon from "@/components/TemperatureIcon";
import WindIcon from "@/components/WindIcon";
// import Cloudiness from "@/components/Cloudiness";

export default function Page() {

  return (
    <div className="flex justify-center">
      <Nav />
      <div className="fixed p-1 w-full h-[100vw] min-h-[80vw] max-w-[100vh] self-center top-1/4">
        <div className="h-1/2 w-full bg-gradient-to-br from-purple-500 to-cyan-600 rounded-tl-full rounded-tr-full"></div>
        <div className="h-1/2 w-full bg-gradient-to-br from-blue-700 to-slate-400 rounded-bl-full rounded-br-full"></div>
      </div>
      <div>
        <section className="py-24 flex flex-col text-center backdrop-blur-2xl h-max min-h-screen">
          <div className="flex justify-center items-center">
            <h1 className=" inline-block text-4xl font-bold bg-gradient-to-r from-primary via-chart-1 to-chart-4 text-transparent bg-clip-text">Stecca Meteo</h1>
          </div>
          <p className="text-muted-foreground">A simple weather app</p>
          <WeatherProvider>
            <div className="flex flex-col justify-center items-center mt-8 text-white">
              <div className="flex justify-center items-center">
                <WeatherCode />
                <TemperatureIcon />
              </div>
              <City />
            </div>
            <div className="grid grid-cols-1 gap-4 p-0 mt-8">
              <Temperature />
              {/* <Wind /> */}
            </div>
            <div className="flex justify-center items-center mt-8">
              <WindIcon />
            </div>
          </WeatherProvider>
        </section>
      </div>
    </div>
  );
}