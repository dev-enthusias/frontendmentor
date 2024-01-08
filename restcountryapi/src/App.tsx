import { useState } from "react";

import { useLoaderData } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeProvider";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Region from "./components/Region";
import CountryCard from "./components/CountryCard";

export async function loader() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  return await response.json();
}

function App() {
  const apiData: any = useLoaderData();

  const [countries, setCountries] = useState<any>(apiData);

  return (
    <ThemeProvider>
      <Navbar />

      <main className="px-5 text-sm lg:px-12">
        <div className="mb-10 flex flex-col lg:flex-row lg:justify-between">
          <SearchBar />
          <Region />
        </div>

        <section className="grid place-items-center gap-y-8">
          {countries.map((country: any, index: number) => {
            return <CountryCard key={index} country={country} />;
          })}
        </section>
      </main>
    </ThemeProvider>
  );
}

export default App;
