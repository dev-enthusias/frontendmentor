import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

import { IoMoonSharp } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`box-shadow mb-0 flex items-center justify-between px-5 py-6 text-sm lg:px-12 lg:py-4 ${
        theme === "dark"
          ? "bg-dark-blue text-white"
          : "bg-white text-dark-blue-text"
      }`}
    >
      <p className="font-extrabold lg:text-xl">Where in the world?</p>

      <button
        className="flex items-center gap-2 rounded-md p-2 font-semibold"
        onClick={() =>
          setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
        }
      >
        {theme === "dark" ? <IoMdSunny /> : <IoMoonSharp />}
        {theme === "dark" ? "Light" : "Dark"} mode
      </button>
    </nav>
  );
};

export default Navbar;
