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

const App = () => {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <ThemeProvider>
        <GlobalStyle />
        <Header />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/favorites"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <FavoritePage />
                </motion.div>
              }
            />
            <Route
              path="/pokemon/:name"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <PokemonDetail />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
        <Footer />
      </ThemeProvider>
    </>
  );
};
export default App;