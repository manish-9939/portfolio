import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Box, AppBar, Toolbar, IconButton, Drawer, List, ListItem, Container, useTheme, Typography, Stack, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = ({ themeMode, toggleTheme }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const theme = useTheme();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Certifications', path: '/certifications' },
        { name: 'Tech', path: '/skills' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    top: 0,
                    left: 0,
                    right: 0,
                    background: 'transparent',
                    pt: { xs: 0, md: scrolled ? 2 : 4 },
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
            >
                <Container maxWidth="xl">
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        px: { xs: 2.5, md: 4 },
                        py: { xs: 1.5, md: 1.2 },
                        background: theme.palette.mode === 'dark'
                            ? (scrolled ? 'rgba(9, 9, 11, 0.8)' : 'rgba(9, 9, 11, 0.5)')
                            : (scrolled ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.5)'),
                        backdropFilter: 'blur(20px)',
                        borderRadius: { xs: 0, md: '100px' },
                        border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)'}`,
                        boxShadow: scrolled ? (theme.palette.mode === 'dark' ? '0 20px 50px rgba(0,0,0,0.5)' : '0 20px 40px rgba(0,0,0,0.1)') : 'none',
                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        width: '100%',
                        mx: 'auto'
                    }}>
                        {/* Logo Section */}
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                                <Typography variant="h5" sx={{
                                    fontWeight: 900,
                                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    letterSpacing: -1.5,
                                    fontSize: '2rem',
                                    fontFamily: "'Outfit', sans-serif",
                                    position: 'relative',
                                    '&::after': {
                                        content: '"."',
                                        color: theme.palette.text.primary,
                                        WebkitTextFillColor: theme.palette.text.primary
                                    }
                                }}>
                                    MK
                                </Typography>
                            </Link>
                        </motion.div>

                        {/* Navigation Links - Segmented Design */}
                        <Box sx={{
                            display: { xs: 'none', md: 'flex' },
                            alignItems: 'center',
                            background: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
                            borderRadius: '50px',
                            px: 1,
                            py: 0.6,
                            border: `1px solid ${theme.palette.divider}`
                        }}>
                            <Stack direction="row" spacing={0.5}>
                                {navItems.map((item) => {
                                    const isActive = location.pathname === item.path;
                                    return (
                                        <Box key={item.name} sx={{ position: 'relative' }}>
                                            <NavLink
                                                to={item.path}
                                                style={{
                                                    textDecoration: 'none',
                                                    color: isActive ? theme.palette.text.primary : theme.palette.text.secondary,
                                                    padding: '10px 24px',
                                                    fontSize: '0.9rem',
                                                    fontWeight: 700,
                                                    display: 'block',
                                                    borderRadius: '50px',
                                                    zIndex: 2,
                                                    position: 'relative',
                                                    transition: 'color 0.3s ease'
                                                }}
                                            >
                                                {item.name}
                                                {isActive && (
                                                    <motion.div
                                                        layoutId="navTab"
                                                        style={{
                                                            position: 'absolute',
                                                            inset: 0,
                                                            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)',
                                                            borderRadius: '50px',
                                                            zIndex: -1,
                                                            border: `1px solid ${theme.palette.divider}`
                                                        }}
                                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                                    />
                                                )}
                                            </NavLink>
                                        </Box>
                                    );
                                })}
                            </Stack>
                        </Box>

                        {/* Action Buttons */}
                        <Stack direction="row" spacing={2} alignItems="center">
                            <IconButton
                                onClick={toggleTheme}
                                sx={{
                                    width: 44,
                                    height: 44,
                                    borderRadius: '50%',
                                    background: theme.palette.background.paper,
                                    border: `1px solid ${theme.palette.divider}`,
                                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                    '&:hover': {
                                        transform: 'rotate(180deg) scale(1.1)',
                                        borderColor: theme.palette.primary.main,
                                        color: theme.palette.primary.main
                                    }
                                }}
                            >
                                {themeMode === 'dark' ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
                            </IconButton>

                            <Button
                                component={Link}
                                to="/contact"
                                variant="contained"
                                sx={{
                                    display: { xs: 'none', sm: 'flex' },
                                    borderRadius: '50px',
                                    px: 4,
                                    py: 1.2,
                                    fontWeight: 900,
                                    textTransform: 'none',
                                    fontSize: '0.9rem',
                                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                                    boxShadow: `0 10px 25px ${theme.palette.primary.main}40`,
                                    '&:hover': {
                                        transform: 'translateY(-2px)',
                                        boxShadow: `0 15px 30px ${theme.palette.primary.main}60`,
                                    }
                                }}
                            >
                                Hire Me
                            </Button>

                            <IconButton
                                onClick={handleDrawerToggle}
                                sx={{
                                    display: { xs: 'flex', md: 'none' },
                                    width: 44,
                                    height: 44,
                                    borderRadius: '50%',
                                    background: theme.palette.background.paper,
                                    border: `1px solid ${theme.palette.divider}`,
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Stack>
                    </Box>
                </Container>
            </AppBar>

            <AnimatePresence>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    anchor="right"
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: '100%',
                            backgroundColor: theme.palette.mode === 'dark' ? '#09090b' : '#ffffff',
                            backgroundImage: 'none',
                        },
                    }}
                >
                    <Box sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 6 }}>
                            <Typography variant="h4" sx={{
                                fontWeight: 900,
                                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}>MK.</Typography>
                            <IconButton onClick={handleDrawerToggle} sx={{ border: `1px solid ${theme.palette.divider}`, borderRadius: '12px' }}>
                                <CloseIcon />
                            </IconButton>
                        </Stack>

                        <List sx={{ mt: 2 }}>
                            {navItems.map((item, idx) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <ListItem disablePadding sx={{ mb: 3 }}>
                                        <NavLink
                                            to={item.path}
                                            onClick={handleDrawerToggle}
                                            style={({ isActive }) => ({
                                                textDecoration: 'none',
                                                fontSize: '3rem',
                                                fontWeight: 900,
                                                color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
                                                letterSpacing: -2,
                                                lineHeight: 1
                                            })}
                                        >
                                            {item.name}
                                        </NavLink>
                                    </ListItem>
                                </motion.div>
                            ))}
                        </List>

                        <Box sx={{ mt: 'auto', pb: 4 }}>
                            <Typography variant="overline" sx={{ color: 'text.secondary', fontWeight: 800, letterSpacing: 2 }}>
                                Let's Connect
                            </Typography>
                            <Typography variant="h5" sx={{ fontWeight: 800, mt: 1 }}>
                                manishmahi505@gmail.com
                            </Typography>
                        </Box>
                    </Box>
                </Drawer>
            </AnimatePresence>
        </Box>
    );
};

export default Navbar;
