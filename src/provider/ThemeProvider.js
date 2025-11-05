import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { themes } from "../styles/themes";
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => localStorage.getItem("preferredTheme") || "light");
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("preferredTheme", newTheme);
    };
    return (_jsx(ThemeContext.Provider, { value: { theme, toggleTheme }, children: _jsx(StyledThemeProvider, { theme: themes[theme], children: children }) }));
};
export default ThemeProvider;
