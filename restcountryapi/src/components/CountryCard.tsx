import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const CountryCard = ({ country }: { country: any }) => {
  const { theme } = useContext(ThemeContext);

  const [isTruncated, setIsTruncated] = useState(false);

  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (textRef.current) {
      setIsTruncated(textRef.current.scrollWidth > textRef.current.clientWidth);
    }
  }, [country.name.common]);

  return (
    <article
      className={`box-shadow overflow-hidden rounded-md ${
        theme === "dark"
          ? "bg-dark-blue text-white"
          : "bg-grey-100 text-dark-blue-text"
      }`}
    >
      <div className="h-40">
        <img
          src={country.flags.svg}
          alt={`Country flag of ${country.name.common}`}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="px-6 pb-12 pt-6">
        <div className="group relative">
          <h1
            className="mb-3 overflow-hidden truncate whitespace-nowrap text-xl font-extrabold"
            ref={textRef}
          >
            {country.name.common}
          </h1>

          {isTruncated && (
            <div className="invisible absolute -top-10 h-full w-full py-1 group-hover:visible">
              <div className="rounded-md bg-dark-blue-bg p-2 text-sm">
                {country.name.common}
              </div>
            </div>
          )}
        </div>

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
};

export default CountryCard;
