import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
//import countryData from "../assets/data.json";

const CountryContext = createContext();

export const useCountry = () => useContext(CountryContext);

export const CountryProvider = ({ children }) => {
  const [info, setInfo] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleSelectedRegion = (e) => setSelectedRegion(e.target.value);

  useEffect(() => {
    fetch("../assets/data.json")
      .then((resp) => resp.json())
      .then((output) => {
        const modOutput = output.filter((out) =>
          out.name.toLowerCase().includes(search.toLowerCase().trim())
        );
        if (search.trim() == "" && selectedRegion == "") {
          setInfo(output);
        } else {
          setInfo(modOutput);
        }
      });
  }, [search]);

  useEffect(() => {
    console.log("aayya");
    fetch("../assets/data.json")
      .then((resp) => resp.json())
      .then((output) => {
        const modSelectedRegion = output.filter((country) => {
          return country.region.toLowerCase() == selectedRegion;
        });
        if (selectedRegion == "") {
          setInfo(output);
        } else {
          console.log(modSelectedRegion);
          setInfo(modSelectedRegion);
        }
      });
  }, [selectedRegion]);

  return (
    <CountryContext.Provider
      value={{ info, search, setSearch, selectedRegion, handleSelectedRegion }}
    >
      {children}
    </CountryContext.Provider>
  );
};