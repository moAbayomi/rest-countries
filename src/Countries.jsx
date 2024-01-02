import React from "react";
import CountryCard from "./CountryCard";

const Countries = ({ info }) => {
  if (info) {
    return (
      <div className="grid gap-12 px-4 py-6 sm:py-6 sm:px-24 justify-between items-start grid-cols-4 auto-rows-auto">
        {info.map((country, i) => {
          return <CountryCard country={country} key={i} />;
        })}
      </div>
    );
  } else {
    <div>skrrr</div>;
  }
};

export default Countries;
