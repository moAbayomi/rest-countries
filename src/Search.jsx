import React from "react";
import { useCountry } from "./CountryProvider";
import Countries from "./Countries";

const Search = () => {
  const { info, search, setSearch, selectedRegion, handleSelectedRegion } =
    useCountry();

  return (
    <div className="text-white px-4 py-6 sm:py-6 sm:px-24">
      <div className="flex justify-between mb-12">
        <input
          className="bg-blueEl border-none outline-none px-12 py-4 rounded-sm text-sm"
          type="text"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a country..."
        />
        <select
          className="bg-blueEl border-none shadow-blue-bg px-6 py-3 outline-none rounded-sm text-sm"
          name=""
          value={selectedRegion}
          onChange={handleSelectedRegion}
          id="searchbyregion"
        >
          <option value="">Filter by region</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>

      <div className="">
        {info ? <Countries info={info} /> : <div>still loadingg</div>}
      </div>
    </div>
  );
};

export default Search;
