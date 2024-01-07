import { createContext, useState, Dispatch, SetStateAction } from "react";

type ComponentProps = {
  children: React.ReactNode;
};

type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

const defaultTheme: ThemeContextProps = {
  theme: "dark",
  setTheme: () => {},
};

const ThemeContext = createContext<ThemeContextProps>(defaultTheme);

const ThemeProvider = ({ children }: ComponentProps) => {
  const [theme, setTheme] = useState<Theme>("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
