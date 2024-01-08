import { Dispatch, SetStateAction, createContext, useState } from "react";

import { useLoaderData } from "react-router-dom";

interface APIContextProps {
  countries: any;
  setCountries: Dispatch<SetStateAction<any>>;
}

type ComponentProps = {
  children: React.ReactNode;
};

const CountryAPIContext = createContext<APIContextProps>(null!);

const CountryAPIProvider = ({ children }: ComponentProps) => {
  const countryAPIData = useLoaderData();

  const [countries, setCountries] = useState<any>(countryAPIData);

  console.log(countries);

  return (
    <CountryAPIContext.Provider value={{ countries, setCountries }}>
      {children}
    </CountryAPIContext.Provider>
  );
};

export { CountryAPIProvider, CountryAPIContext };
