"use client";

import { Typography } from "@material-tailwind/react";
import React from "react";

interface Props {
  name: string;
  flag: string;
  population: number;
  region: string;
  capital: Array<string>;
}

const CountryCard: React.FC<Props> = ({
  name,
  flag,
  population,
  region,
  capital,
}) => {
  return (
    <div className="transform cursor-pointer overflow-hidden rounded-md bg-white drop-shadow-md transition hover:scale-[1.05] dark:bg-darkBlue">
      <div className="w-full">
        <img
          className="aspect-[5/3] w-full"
          src={flag}
          alt={`flag of ${name}`}
        />
      </div>
      <div className="flex flex-col justify-between px-6 py-6">
        <div className="py-2">
          <Typography className="truncate font-bold" variant="h5">
            {name}
          </Typography>
        </div>
        <div className="py-6">
          <div className="flex gap-2">
            <Typography variant="paragraph" className="font-medium">
              Population:
            </Typography>
            <Typography className="truncate font-thin" variant="paragraph">
              {population.toLocaleString()}
            </Typography>
          </div>
          <div className="flex gap-2">
            <Typography variant="paragraph" className="font-medium">
              Region:
            </Typography>
            <Typography className="truncate font-thin" variant="paragraph">
              {region}
            </Typography>
          </div>
          <div className="flex gap-2">
            <Typography variant="paragraph" className="font-medium">
              Capital:
            </Typography>
            <Typography className="truncate font-thin" variant="paragraph">
              {capital?.join(", ")}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
