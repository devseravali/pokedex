import type { ThemeType } from "../types/pokemon";
export type ThemeContextType = {
    theme: ThemeType;
    toggleTheme: () => void;
};
export declare const ThemeContext: import("react").Context<ThemeContextType>;
