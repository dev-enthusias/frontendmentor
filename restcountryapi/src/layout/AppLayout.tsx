import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import { CountryAPIProvider } from "../context/CountryAPIContext";

import Navbar from "../components/Navbar";
import Main from "../components/Main";

const AppLayout = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen ${
        theme === "dark"
          ? "bg-dark-blue-bg text-white"
          : "bg-grey-500/10 text-dark-blue-text"
      }`}
    >
      <Navbar />
      <CountryAPIProvider>
        <Main />
      </CountryAPIProvider>
    </div>
  );
};

export default AppLayout;
