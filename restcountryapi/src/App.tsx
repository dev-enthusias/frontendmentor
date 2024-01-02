import { Dispatch, MouseEvent, createContext, useState } from "react";

import { FaChevronDown } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

interface ThemeValueProps {
  darkMode: boolean;
  setDarkMode: Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = createContext<boolean | ThemeValueProps>(false);

export async function loader() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  return await response.json();
}

function App() {
  const apiData: any = useLoaderData();
  const [darkMode, setDarkMode] = useState(false);
  //prettier-ignore
  const [isRegionOptionsDisplayed, setIsRegionOptionDisplayed] = useState(false);
  const [countries, setCountries] = useState<any>(apiData);
  const [region, setRegion] = useState<null | string>(null);

  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  function displayRegionOptions() {
    setIsRegionOptionDisplayed(!isRegionOptionsDisplayed);
  }

  function handleRegionClick(e: MouseEvent<HTMLButtonElement>) {
    const region = (e.target as HTMLButtonElement).textContent;

    if (region) setRegion(region);

    setIsRegionOptionDisplayed(!isRegionOptionsDisplayed);

    const filteredByRegion = apiData.filter(
      (country: any) => country.region === region,
    );
    setCountries(filteredByRegion);
  }

  return (
    <ThemeContext.Provider value={darkMode}>
      <Navbar />

      <main className="bg-grey-100 px-5 text-sm lg:px-12">
        <div className="mb-10 flex flex-col lg:flex-row lg:justify-between">
          <SearchBar />

          <div className="relative w-3/5 font-semibold">
            <button
              className="box-shadow flex w-full items-center justify-between rounded-md bg-white px-6 py-4"
              onClick={displayRegionOptions}
            >
              <span>{region ? region : "Filter by Region"}</span>
              <span>
                <FaChevronDown />
              </span>
            </button>

            {isRegionOptionsDisplayed && (
              <div className="box-shadow absolute mt-1 grid w-full rounded-md bg-white px-5 py-3">
                {regions.map((region, index) => {
                  return (
                    <button
                      key={index}
                      className="w-full px-1 py-1 text-left"
                      onClick={handleRegionClick}
                    >
                      {region}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
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
    </ThemeContext.Provider>
  );
}

export default App;
