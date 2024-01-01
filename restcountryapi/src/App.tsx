import {
  Dispatch,
  FormEvent,
  MouseEvent,
  createContext,
  useState,
} from 'react';
import { IoMoonSharp, IoMoonOutline } from 'react-icons/io5';
import { FaSearch, FaChevronDown } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

interface ThemeValueProps {
  darkMode: boolean;
  setDarkMode: Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = createContext<boolean | ThemeValueProps>(false);

export async function loader() {
  const response = await fetch('https://restcountries.com/v3.1/all');
  return await response.json();
}

function App() {
  const apiData: any = useLoaderData();
  const [isDarkMode, setIsDarkMode] = useState(false);
  //prettier-ignore
  const [isRegionOptionsDisplayed, setIsRegionOptionDisplayed] = useState(false);
  const [countries, setCountries] = useState<any>(apiData);
  const [region, setRegion] = useState<null | string>(null);

  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  console.log(countries);

  function displayRegionOptions() {
    setIsRegionOptionDisplayed(!isRegionOptionsDisplayed);
  }

  function handleInputChange(e: FormEvent<HTMLInputElement>) {
    const filteredCountries = countries.filter((country: any) =>
      country.name.common
        .toLowerCase()
        .includes(e.currentTarget.value.toLowerCase())
    );

    setCountries(filteredCountries);
  }

  function handleRegionClick(e: MouseEvent<HTMLButtonElement>) {
    const region = (e.target as HTMLButtonElement).textContent;

    if (region) setRegion(region);

    setIsRegionOptionDisplayed(!isRegionOptionsDisplayed);

    const filteredByRegion = apiData.filter(
      (country: any) => country.region === region
    );
    setCountries(filteredByRegion);
  }

  console.log(region);

  return (
    <ThemeContext.Provider value={isDarkMode}>
      <nav className='flex items-center justify-between shadow py-6 lg:py-4 px-5 lg:px-12 mb-8'>
        <p className='font-extrabold'>Where in the world?</p>
        <button
          className='flex items-center gap-2 font-semibold'
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? <IoMoonSharp /> : <IoMoonOutline />}
          Dark Mode
        </button>
      </nav>

      <main className='px-5 lg:px-12 bg-grey-100 text-sm'>
        <div className='flex flex-col lg:flex-row lg:justify-between mb-10'>
          <div className='mb-10 relative'>
            <input
              type='search'
              name='search'
              placeholder='Search for a country'
              className='w-full rounded-md box-shadow shadow-md bg-white pl-12 py-4 pr-3'
              onChange={handleInputChange}
            />
            <span className='absolute top-1/2 -translate-y-1/2 left-4 text-gray-200'>
              <FaSearch />
            </span>
          </div>

          <div className='w-3/5 relative font-semibold'>
            <button
              className='w-full rounded-md box-shadow py-4 px-6 bg-white flex justify-between items-center'
              onClick={displayRegionOptions}
            >
              <span>{region ? region : 'Filter by Region'}</span>
              <span>
                <FaChevronDown />
              </span>
            </button>

            {isRegionOptionsDisplayed && (
              <div className='absolute rounded-md bg-white box-shadow px-5 py-3 grid w-full mt-1'>
                {regions.map((region, index) => {
                  return (
                    <button
                      key={index}
                      className='text-left w-full py-1 px-1'
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

        <section className='grid place-items-center gap-y-8'>
          {countries.map((country: any, index: number) => {
            return (
              <article
                key={index}
                className='w-[300px] overflow-hidden rounded-md box-shadow'
              >
                <div className='h-44 bg-white'>
                  <img
                    src={country.flags.svg}
                    alt={`Country flag of ${country.name.common}`}
                    className='object-cover w-full h-full'
                  />
                </div>

                <div className='px-6 pt-6 pb-12'>
                  <h1 className='font-extrabold text-xl mb-3'>
                    {country.name.common}
                  </h1>

                  <p className='mb-1'>
                    <span className='font-semibold'>Population:</span>{' '}
                    <span>{country.population.toLocaleString()}</span>
                  </p>
                  <p className='mb-1'>
                    <span className='font-semibold'>Region:</span>{' '}
                    <span>{country.region}</span>
                  </p>
                  <p>
                    <span className='font-semibold'>Capital:</span>{' '}
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
