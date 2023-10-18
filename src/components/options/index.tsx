"use client";

import { Button, Collapse } from "@material-tailwind/react";
import { ChangeEvent, useState } from "react";

const regions = ["Africa", "America", "Asia", "Europe", "Oceania", "All"];

type Props = {
  region: string;
  setRegion: Function;
  name: string;
  setName: Function;
};

const Options: React.FC<Props> = ({ region, setRegion, name, setName }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);

  const switchRegion = (region: string) => {
    setRegion(region.toLowerCase());
    setName("");
    toggleOpen();
  };

  const handleSearch = (evt: ChangeEvent<HTMLInputElement>) =>
    setName(evt.target?.value.toLocaleLowerCase());

  const Drop = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`h-6 w-6 transition ${open ? "rotate-180" : "rotate-0"}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );

  const Search = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );

  return (
    <div className="relative z-50 mb-16 flex flex-col justify-between gap-6 md:flex-row">
      <div className="h-16 text-white">
        <div className="flex h-full w-full items-center justify-between gap-4 rounded-md bg-white px-6 text-veryDarkBlue drop-shadow-md dark:bg-darkBlue dark:text-white">
          <Search />
          <input
            className="grow border-none bg-white text-veryDarkBlue outline-none dark:bg-darkBlue dark:text-white"
            placeholder="Search for a country..."
            value={name}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="h-16 w-full text-white md:w-72">
        <Button
          variant="text"
          className="right-0 z-50 flex h-full w-full items-center justify-between bg-white capitalize text-veryDarkBlue drop-shadow-md dark:bg-darkBlue dark:text-white"
          onClick={toggleOpen}
        >
          {region === "all" ? `Filter by Region` : `${region}`}
          <Drop />
        </Button>
        <Collapse open={open}>
          <div className="mt-4 flex flex-col overflow-hidden rounded-md text-veryDarkBlue drop-shadow-lg dark:text-white">
            {regions.map((region, index) => (
              <p
                key={index}
                className="cursor-pointer bg-white px-6 py-2 text-sm hover:bg-gray-200 dark:bg-darkBlue hover:dark:bg-gray-900"
                onClick={() => switchRegion(region)}
              >
                {region}
              </p>
            ))}
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default Options;
