import type { DefaultTheme } from "styled-components";
export declare const gradientByType: (color: string) => string;
export type ThemeType = "light" | "dark";
export declare const lightTheme: DefaultTheme;
export declare const darkTheme: DefaultTheme;
export declare const themes: {
    light: DefaultTheme;
    dark: DefaultTheme;
};
