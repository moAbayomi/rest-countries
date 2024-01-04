import React from "react";
import { useCountry } from "./CountryProvider";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
  const { darkMode, toggleDarkMode } = useCountry();
  return (
    <header
      className={`flex justify-between px-4 py-6 sm:py-6 sm:px-24 ${
        darkMode ? "bg-blueEl text-white" : "bg-grayBg text-blueTxt"
      }  shadow-blueTxt mb-6`}
    >
      <h1 className="text-xl font-bold">Where in the world?</h1>
      <button onClick={() => toggleDarkMode(darkMode)}>
        {darkMode ? (
          <p className="flex justify-center items-center gap-2">
            <span>
              <FaSun />
            </span>{" "}
            Light Mode
          </p>
        ) : (
          <p className="flex justify-center items-center gap-2">
            <span>
              <FaMoon />
            </span>{" "}
            Dark Mode
          </p>
        )}
      </button>
    </header>
  );
};

export default Header;
