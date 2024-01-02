import { useState } from "react";
import { IoMoonSharp, IoMoonOutline } from "react-icons/io5";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <nav
      className={`mb-8 flex items-center justify-between px-5 py-6 text-sm shadow-md lg:px-12 lg:py-4 ${
        darkMode ? "bg-dark-blue text-white" : "bg-white"
      }`}
    >
      <p className="font-extrabold lg:text-lg">Where in the world?</p>

      <button
        className="flex items-center gap-2 rounded-md p-2 font-semibold"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <IoMoonSharp /> : <IoMoonOutline />}
        Dark Mode
      </button>
    </nav>
  );
};

export default Navbar;
