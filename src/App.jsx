
import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';

const Navbar = React.lazy(() => import('./components/Navbar'));
const Hero = React.lazy(() => import('./components/Hero'));
const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Projects = React.lazy(() => import('./components/Projects'));
const Certifications = React.lazy(() => import('./components/Certifications'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));
const ParticleNetwork = React.lazy(() => import('./components/ParticleNetwork'));
const ScrollProgress = React.lazy(() => import('./components/ScrollProgress'));
import Loader from './components/Loader';
import getDesignTokens from './theme/theme';

// ScrollToTop component to ensure page starts at top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState(localStorage.getItem('theme') || 'dark');
  const location = useLocation();
  const [prevPath, setPrevPath] = useState(location.pathname);

  // Synchronously trigger loading on EVERY path change to ensure rocket flies every time
  if (prevPath !== location.pathname) {
    setLoading(true);
    setPrevPath(location.pathname);
  }

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 350); // Set to 0.35s as requested
      return () => clearTimeout(timer);
    }
  }, [loading, location.pathname]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollToTop />
      <Box sx={{
        backgroundColor: mode === 'dark' ? '#09090b' : '#fafafa',
        minHeight: '100vh',
        position: 'relative'
      }}>
        <AnimatePresence>
          {loading && <Loader key={`loader-${location.pathname}`} />}
        </AnimatePresence>

        <motion.div
          key="content"
          initial={false}
          animate={{ opacity: loading ? 0 : 1 }}
          transition={{ duration: 0.4 }}
        >
          <React.Suspense fallback={null}>
            <ScrollProgress />
            <ParticleNetwork />
            <Navbar themeMode={mode} toggleTheme={toggleTheme} />
            <main style={{ minHeight: '80vh', paddingTop: theme.spacing(10) }}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Hero />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </React.Suspense>
        </motion.div>
      </Box>
    </ThemeProvider>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
