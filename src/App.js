import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { GlobalStyle } from './styles/GlobalStyle';
import ThemeProvider from './provider/ThemeProvider';
import { Home } from './pages/Home/Home';
import { FavoritePage } from './pages/Favorites/FavoritePage';
import { Header } from './components/Header/Header';
import { Routes, Route, useLocation } from 'react-router-dom';
import { PokemonDetail } from './pages/PokemonDetail/PokemonDetail';
import { Footer } from './components/Footer/Footer';
import { AnimatePresence, motion } from 'framer-motion';
import { ScrollToTop } from './utils/ScrollToTop';
function App() {
    const location = useLocation();
    return (_jsxs(_Fragment, { children: [_jsx(ScrollToTop, {}), _jsxs(ThemeProvider, { children: [_jsx(GlobalStyle, {}), _jsx(Header, {}), _jsx(AnimatePresence, { mode: "wait", children: _jsxs(Routes, { location: location, children: [_jsx(Route, { path: "/", element: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 }, transition: { duration: 0.5 }, children: _jsx(Home, {}) }) }), _jsx(Route, { path: "/favorites", element: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 }, transition: { duration: 0.5 }, children: _jsx(FavoritePage, {}) }) }), _jsx(Route, { path: "/pokemon/:name", element: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 }, transition: { duration: 0.5 }, children: _jsx(PokemonDetail, {}) }) })] }, location.pathname) }), _jsx(Footer, {})] })] }));
}
export default App;
