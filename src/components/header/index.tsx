"use client";

import { Typography, Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";

const Light = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );
};

const Dark = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );
};

const Header = () => {
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
        setMode("dark");
      } else {
        document.documentElement.classList.remove("dark");
        setMode("light");
      }
    }
  }, []);

  const switchMode = () => {
    if (!localStorage.theme || localStorage.theme === "dark") {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
      setMode("light");
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      setMode("dark");
    }
  };

  return (
    <header className="sticky top-0 z-[99] flex items-center justify-between bg-white px-6 py-6 drop-shadow-lg dark:bg-darkBlue lg:px-24">
      <Typography className="text-lg font-[750] sm:text-2xl" variant="h1">
        Where in the world?
      </Typography>
      <Button
        className=" flex items-center gap-2 capitalize text-veryDarkBlue dark:text-white"
        size="sm"
        variant="text"
        onClick={switchMode}
      >
        {mode === "light" ? <Dark /> : <Light />}

        <Typography className="font-bold" variant="paragraph">
          {mode === "light" ? "Dark Mode" : "Light Mode"}
        </Typography>
      </Button>
    </header>
  );
};

export default Header;
