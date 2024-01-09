import { useContext } from "react";
import { CountryAPIContext } from "../context/CountryAPIContext";

import SearchBar from "./SearchBar";
import Region from "./Region";
import CountryCard from "./CountryCard";

const Main = () => {
  const { countries } = useContext(CountryAPIContext);

  return (
    <main className={`px-5 py-8 text-sm lg:px-12`}>
      <div className="mb-10 flex flex-col gap-y-10 md:flex-row md:justify-between">
        <SearchBar />
        <Region />
      </div>

      <section className="min-[540px]:px-24 grid gap-y-12 px-10 sm:grid-cols-2 sm:gap-16 md:gap-16 md:px-20 lg:grid-cols-3 lg:px-0 xl:grid-cols-4">
        {countries.map((country: any, index: number) => {
          return <CountryCard key={index} country={country} />;
        })}
      </section>
    </main>
  );
};

export default Main;
