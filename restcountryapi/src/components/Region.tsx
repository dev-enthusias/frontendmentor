import { MouseEvent, useContext, useState } from "react";

import { useLoaderData } from "react-router-dom";

import { CountryAPIContext } from "../context/CountryAPIContext";

import { FaChevronDown } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

function Region() {
  const countryAPIData: any = useLoaderData();

  const { setCountries } = useContext(CountryAPIContext);
  const { theme } = useContext(ThemeContext);

  const [region, setRegion] = useState<null | string>(null);
  const [isRegionOptionsDisplayed, setIsRegionOptionDisplayed] =
    useState(false);

  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  // Toggle option menu
  function displayRegionOptions() {
    setIsRegionOptionDisplayed(!isRegionOptionsDisplayed);
  }

  function handleRegionClick(e: MouseEvent<HTMLButtonElement>) {
    const region = (e.target as HTMLButtonElement).textContent;

    if (region) setRegion(region);

    setIsRegionOptionDisplayed(!isRegionOptionsDisplayed);

    //Filter data on option select
    const filteredByRegion = countryAPIData.filter(
      (country: any) => country.region === region,
    );
    setCountries(filteredByRegion);
  }

  return (
    <div className="relative w-48 font-medium">
      <button
        className={`box-shadow flex w-full items-center justify-between gap-5 rounded-md py-4 pl-6 pr-5 ${
          theme === "dark"
            ? "bg-dark-blue text-white"
            : "bg-white font-semibold text-dark-blue-text"
        }`}
        onClick={displayRegionOptions}
      >
        <span>{region ? region : "Filter by Region"}</span>
        <span>
          <FaChevronDown />
        </span>
      </button>

      {isRegionOptionsDisplayed && (
        <div
          className={`box-shadow absolute mt-1 grid w-full rounded-md px-5 py-3 ${
            theme === "dark"
              ? "bg-dark-blue text-white"
              : "bg-white font-semibold text-dark-blue-text"
          }`}
        >
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
  );
}

export default Region;
