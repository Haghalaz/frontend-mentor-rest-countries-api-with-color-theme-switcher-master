"use client";

import CountryCard from "@/components/country-card";
import Options from "@/components/options";
import apiService from "@/services/api";
import { IconButton, Spinner, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";

type Country = {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
  population: number;
  region: string;
  capital: Array<string>;
};

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [name, setName] = useState("");
  const [region, setRegion] = useState("all");
  const [url, setUrl] = useState("");

  const { data, isLoading } = apiService.get(url);

  useEffect(() => {
    if (data) setCountries(data);
  }, [data]);

  useEffect(() => {
    const urlConstr: Array<String> = [];

    if (name !== "") {
      urlConstr.push(`/name/${name}`);
      setRegion("all");
    } else {
      region === "all"
        ? urlConstr.push(`/${region}`)
        : urlConstr.push(`/region/${region}`);
    }

    urlConstr.push(`?fields=name,flags,population,region,capital`);

    setUrl(urlConstr.join(""));
  }, [region, name]);

  return (
    <>
      <Options
        region={region}
        setRegion={setRegion}
        name={name}
        setName={setName}
      />
      <div className="relative grid grid-cols-1 gap-24 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {isLoading && (
          <div className="col-span-full grid place-items-center">
            <Spinner color="light-blue" />
          </div>
        )}

        {!countries.length && !isLoading && (
          <div className="col-span-full grid h-full place-items-center opacity-50">
            <Typography variant="paragraph">No countries found</Typography>
          </div>
        )}

        {!isLoading && (
          <>
            {countries.map((country, index) => (
              <div key={index} className="animate-fade-up animate-ease-in-out">
                <CountryCard
                  name={country.name.common}
                  flag={country.flags.png}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                />
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}
