import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between px-4 py-6 sm:py-6 sm:px-24 bg-blueEl text-white shadow-blueTxt mb-6">
      <h1 className="text-xl font-bold">Where in the world?</h1>
      <div>
        <span></span>
        <span>Dark Mode</span>
      </div>
    </header>
  );
};

export default Header;
