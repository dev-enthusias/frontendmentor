import { useContext } from "react";

import { useLoaderData } from "react-router-dom";

import { ThemeContext } from "../context/ThemeContext";

import SearchBar from "./SearchBar";
import Region from "./Region";
import CountryCard from "./CountryCard";

const Main = () => {
  const apiData: any = useLoaderData();

  const { theme } = useContext(ThemeContext);

  return (
    <main
      className={`px-5 pt-8 text-sm lg:px-12 ${
        theme === "dark" ? "bg-dark-blue-bg text-white" : "bg-slate-100"
      }`}
    >
      <div className="mb-10 flex flex-col lg:flex-row lg:justify-between">
        <SearchBar />
        <Region />
      </div>

      <section className="grid grid-cols-4 gap-16">
        {apiData.map((country: any, index: number) => {
          return <CountryCard key={index} country={country} />;
        })}
      </section>
    </main>
  );
};

export default Main;
