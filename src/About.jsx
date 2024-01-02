import React from "react";
import { useCountry } from "./CountryProvider";
import { Link, useParams } from "react-router-dom";

const About = () => {
  const { info } = useCountry();
  let { nameParam } = useParams();

  const findCountry = info.find(
    (country) => country.name.toLowerCase() == nameParam.toLowerCase()
  );
  console.log(findCountry);

  const {
    name,
    nativeName,
    flag,
    region,
    subregion,
    capital,
    population,
    currencies,
    languages,
    topLevelDomain,
  } = findCountry;
  return (
    <div className="text-white max-w-full grid my-4 ">
      <div className="px-4 py-6 sm:py-6 sm:px-24">
        <div className="my-6">
          <Link
            to="/"
            className="px-12 py-3 rounded-md border-none shadow-blueBg  bg-blueEl"
          >
            Back
          </Link>
        </div>
        <article className="flex items-start justify-start gap-[5%]">
          <div className="flex justify-center  items-center basis-[45%]">
            <img
              className="max-w-full h-[300px]"
              src={flag}
              alt="country flag"
            />
          </div>

          <div className="basis-[50%] p-6">
            <h1 className="text-2xl font-bold">{name}</h1>

            <div className="flex gap-12 my-8 text-xs">
              <div>
                <p className="my-2">
                  <span className="font-bold">Native Name: </span>
                  {nativeName}
                </p>
                <p className="my-2">
                  <span className="font-bold">Population: </span>
                  {population.toLocaleString()}
                </p>
                <p className="my-2">
                  <span className="font-bold">Region: </span>
                  {region}
                </p>
                <p className="my-2">
                  <span className="font-bold">Sub Region: </span>
                  {subregion}
                </p>
                <p className="my-2">
                  <span className="font-bold">Capital: </span>
                  {capital}
                </p>
              </div>
              <div>
                <p className="my-2">
                  <span className="font-bold">Top Level Domain: </span>
                  {topLevelDomain}
                </p>
                <p className="my-2">
                  <span className="font-bold">Currencies: </span>
                  {currencies[0].name}
                </p>
                <p className="my-2">
                  <span className="font-bold">Languages: </span>
                  {languages.map((lang) => lang.name).join(", ")}
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default About;
