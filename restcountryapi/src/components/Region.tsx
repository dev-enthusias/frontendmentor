import { MouseEvent, useState } from "react";

import { FaChevronDown } from "react-icons/fa";

function Region() {
  const [region, setRegion] = useState<null | string>(null);
  const [isRegionOptionsDisplayed, setIsRegionOptionDisplayed] =
    useState(false);

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
    <div className="relative font-semibold">
      <button
        className="box-shadow flex w-full items-center justify-between gap-4 rounded-md bg-white px-6 py-4"
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
  );
}

export default Region;
