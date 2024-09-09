'use client'
import Nav from "@/components/nav";
import { WeatherProvider } from "@/context/WeatherContext"; // The WeatherContext you created
import Temperature from "@/components/Temperature";
import Wind from "@/components/Wind";
// import Cloudiness from "@/components/Cloudiness";

export default function Page() {

  return (
    <div>
      <Nav />
      <section className="py-24 flex flex-col text-center">
        <h1 className="text-4xl font-bold">Stecca Meteo</h1>
        <p className="text-muted-foreground">A simple weather app</p>
        <WeatherProvider>
          <div className="grid grid-cols-2 gap-4 p-10 mt-8">
            <Temperature />
            <Wind />
          </div>
        </WeatherProvider>
      </section>
    </div>
  );
}