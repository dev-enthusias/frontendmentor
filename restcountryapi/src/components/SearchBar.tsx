import { FormEvent } from "react";

import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  function handleInputChange(e: FormEvent<HTMLInputElement>) {
    const filteredCountries = countries.filter((country: any) =>
      country.name.common
        .toLowerCase()
        .includes(e.currentTarget.value.toLowerCase()),
    );

    setCountries(filteredCountries);
  }

  return (
    <div className="relative lg:w-[37%]">
      <input
        type="search"
        name="search"
        placeholder="Search for a country..."
        className="box-shadow w-full rounded-md bg-white py-4 pl-12 pr-3 font-semibold shadow-md"
        onChange={handleInputChange}
      />
      <button className="absolute left-4 top-1/2 -translate-y-1/2 text-grey-500">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
