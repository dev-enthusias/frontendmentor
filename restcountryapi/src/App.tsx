import { useState } from "react";

import { useLoaderData } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeProvider";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Region from "./components/Region";

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

        <section className="grid hidden place-items-center gap-y-8">
          {countries.map((country: any, index: number) => {
            return (
              <article
                key={index}
                className="box-shadow w-[200px] overflow-hidden rounded-md"
              >
                <div className="h-44 bg-white">
                  <img
                    src={country.flags.svg}
                    alt={`Country flag of ${country.name.common}`}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="px-6 pb-12 pt-6">
                  <h1 className="mb-3 text-xl font-extrabold">
                    {country.name.common}
                  </h1>

                  <p className="mb-1">
                    <span className="font-semibold">Population:</span>{" "}
                    <span>{country.population.toLocaleString()}</span>
                  </p>
                  <p className="mb-1">
                    <span className="font-semibold">Region:</span>{" "}
                    <span>{country.region}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Capital:</span>{" "}
                    <span>{country.capital}</span>
                  </p>
                </div>
              </article>
            );
          })}
        </section>
      </main>
    </ThemeProvider>
  );
}

export default App;
