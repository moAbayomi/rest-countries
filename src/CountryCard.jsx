import React from "react";
import { useNavigate } from "react-router-dom";

const CountryCard = ({ country }) => {
  const { name, flag, population, region } = country;

  let nav = useNavigate();

  return (
    <div
      onClick={() => nav(`/${name}`)}
      className=" flex flex-col gap-[5%]  bg-blueEl shadow-blueBg border-none rounded-lg cursor-pointer"
    >
      <div className="max-w-full basis-[40%] rounded-tr-lg rounded-tl-lg">
        <img
          className="max-w-full w-[100%] h-[150px] object-cover rounded-tr-lg rounded-tl-lg"
          src={flag}
          alt="country flag"
        />
      </div>

      <div id="info" className="p-6 basis-[55%]">
        <div className="font-bold">{name}</div>

        <div className="text-xs">
          <p>
            <span className="font-bold">Population: </span>
            {population.toLocaleString()}
          </p>
          <p>
            <span className="font-bold">Region:</span> {region}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
