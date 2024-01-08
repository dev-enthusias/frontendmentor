import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { CountryAPIContext } from "../context/CountryAPIContext";

import SearchBar from "./SearchBar";
import Region from "./Region";
import CountryCard from "./CountryCard";

const Main = () => {
  const { theme } = useContext(ThemeContext);
  const { countries } = useContext(CountryAPIContext);

  return (
    <main className={`px-5 py-8 text-sm lg:px-12`}>
      <div className="mb-10 flex flex-col lg:flex-row lg:justify-between">
        <SearchBar />
        <Region />
      </div>

      <section className="grid grid-cols-4 gap-16">
        {countries.map((country: any, index: number) => {
          return <CountryCard key={index} country={country} />;
        })}
      </section>
    </main>
  );
};

export default Main;
