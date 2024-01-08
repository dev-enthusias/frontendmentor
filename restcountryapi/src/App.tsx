import { ThemeProvider } from "./context/ThemeContext";
import { CountryAPIProvider } from "./context/CountryAPIContext";

import Navbar from "./components/Navbar";
import Main from "./components/Main";

export async function loader() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  return await response.json();
}

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-dark-blue-bg text-white">
        <CountryAPIProvider>
          <Navbar />
          <Main />
        </CountryAPIProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
