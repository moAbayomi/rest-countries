import React from "react";
import { useCountry } from "./CountryProvider";
import Countries from "./Countries";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const {
    info,
    search,
    setSearch,
    selectedRegion,
    handleSelectedRegion,
    darkMode,
  } = useCountry();

  return (
    <div
      className={`${
        darkMode ? "text-white" : "text-blueTxt"
      } px-4 py-6 sm:py-6 sm:px-24`}
    >
      <div className="flex flex-col gap-8 sm:flex-row justify-between mb-12">
        <div
          id="inputcontainer"
          className="flex items-center justify-center rounded-sm"
        >
          <span
            className={` ${
              darkMode ? "bg-blueBg" : "bg-grayBg"
            } h-12 flex items-center justify-center p-4 rounded-sm`}
          >
            <FaSearch />
          </span>
          <input
            className={`${
              darkMode ? "bg-blueBg" : "bg-grayBg"
            } h-12 border-none outline-none shadow-blue-bg focus:border-blueBg focus:outline-blueBg py-4 rounded-sm text-sm`}
            type="text"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a country..."
          />
        </div>

        <select
          className={`${
            darkMode ? "bg-blueBg text-white" : "text-blueTxt bg-grayBg"
          }border-none appearance-none shadow-blue-bg focus:border-blueBg focus:outline-blueBg px-12 py-3 outline-none rounded-sm text-sm`}
          name=""
          value={selectedRegion}
          onChange={handleSelectedRegion}
          id="searchbyregion"
        >
          <option className="outline-none border-none text-white py-2" value="">
            Filter by region
          </option>
          <option
            className={`outline-none border-none ${
              darkMode ? "text-white" : "text-blueTxt"
            } py-2`}
            value="africa"
          >
            Africa
          </option>
          <option
            className={`outline-none border-none ${
              darkMode ? "text-white" : "text-blueTxt"
            } py-2`}
            value="americas"
          >
            Americas
          </option>
          <option
            className={`outline-none border-none ${
              darkMode ? "text-white" : "text-blueTxt"
            } py-2`}
            value="asia"
          >
            Asia
          </option>
          <option
            className={`outline-none border-none ${
              darkMode ? "text-white" : "text-blueTxt"
            } py-2`}
            value="europe"
          >
            Europe
          </option>
          <option
            className={`outline-none border-none ${
              darkMode ? "text-white" : "text-blueTxt"
            } py-2`}
            value="oceania"
          >
            Oceania
          </option>
        </select>
      </div>

      <div className="">
        {info ? <Countries info={info} /> : <div>still loadingg</div>}
      </div>
    </div>
  );
};

export default Search;
