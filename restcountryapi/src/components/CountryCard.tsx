const CountryCard = ({ country }: { country: any }) => {
  return (
    <article className="box-shadow overflow-hidden rounded-md bg-dark-blue">
      <div className="h-40">
        <img
          src={country.flags.svg}
          alt={`Country flag of ${country.name.common}`}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="px-6 pb-12 pt-6">
        <h1 className="mb-3 text-xl font-extrabold">{country.name.common}</h1>

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
