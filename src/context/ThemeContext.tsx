import { createContext, } from "react";
import type { ThemeType } from "../types/pokemon";


export type ThemeContextType = {
    theme: ThemeType;
    toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => {},
});

