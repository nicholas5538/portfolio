'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';
import { childrenNode } from '@/constants/typeInterface';

type TthemeContext = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  toggleThemeHandler: () => void;
};

const ThemeContext = createContext(null as unknown as TthemeContext);

export const useThemeContext = () => useContext(ThemeContext);

const ThemeProvider = ({ children }: childrenNode) => {
  const [darkMode, setDarkMode] = useState(false);

  const initialThemeHandler = (): void => {
    if (localStorage.getItem('darkMode')) {
      const darkMode: boolean = JSON.parse(localStorage.getItem('darkMode')!);
      darkMode && document.documentElement.classList.add('dark');
      setDarkMode(darkMode);
    } else {
      localStorage.setItem('darkMode', 'true');
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  };

  useEffect(() => initialThemeHandler(), []);

  const toggleThemeHandler = () => {
    const darkMode: boolean = JSON.parse(localStorage.getItem('darkMode')!);
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', `${!darkMode}`);
    return darkMode;
  };

  return (
    <ThemeContext.Provider
      value={{ darkMode, setDarkMode, toggleThemeHandler }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
