import { ThemeProvider } from "./context/ThemeContext";

import Navbar from "./components/Navbar";
import Main from "./components/Main";

export async function loader() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  return await response.json();
}

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Main />
    </ThemeProvider>
  );
}

export default App;
