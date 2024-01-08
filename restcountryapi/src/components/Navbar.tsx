import { useContext } from "react";

import { ThemeContext } from "../context/ThemeProvider";

import { IoMoonSharp, IoMoonOutline } from "react-icons/io5";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`flex items-center justify-between px-5 py-6 text-sm shadow-md lg:px-12 lg:py-4 ${
        theme === "dark" ? "bg-dark-blue text-white" : "bg-white"
      }`}
    >
      <p className="font-extrabold lg:text-xl">Where in the world?</p>

      <button
        className="flex items-center gap-2 rounded-md p-2 font-semibold"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <IoMoonSharp /> : <IoMoonOutline />}
        Dark Mode
      </button>
    </nav>
  );
};

export default Navbar;
