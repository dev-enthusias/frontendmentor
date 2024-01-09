import { ThemeProvider } from "./context/ThemeContext";
import AppLayout from "./layout/AppLayout";

export async function loader() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  return await response.json();
}

function App() {
  return (
    <ThemeProvider>
      <AppLayout />
    </ThemeProvider>
  );
}

export default App;
