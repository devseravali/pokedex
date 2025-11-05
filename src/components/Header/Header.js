import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { HeaderContainer, H1, Nav, Ul, HomeLi, HomeLink, TogglerWrapper } from "../Header/Header.style";
import { Link } from "react-router-dom";
import { ThemeToggler } from "../ThemeToggle/ThemeToggle";
export const Header = () => {
    return (_jsx(_Fragment, { children: _jsxs(HeaderContainer, { role: "banner", "aria-label": "Cabe\u00E7alho principal", children: [_jsx(H1, { children: "Pok\u00E9dex" }), _jsx(Nav, { role: "navigation", "aria-label": "Navega\u00E7\u00E3o principal", children: _jsxs(Ul, { children: [_jsx(HomeLi, { children: _jsx(HomeLink, { as: Link, to: "/", "aria-current": "page", children: "Home" }) }), _jsx(HomeLi, { children: _jsx(HomeLink, { as: Link, to: "/favorites", "aria-current": "page", children: "Favoritos" }) }), _jsx(TogglerWrapper, { children: _jsx(ThemeToggler, {}) })] }) })] }) }));
};
