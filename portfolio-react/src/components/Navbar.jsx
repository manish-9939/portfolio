
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Skills', path: '/skills' },
        { name: 'Projects', path: '/projects' },
        { name: 'Certifications', path: '/certifications' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <header>
            <Link to="/" className="logo" onClick={closeMenu}>MK</Link>

            <nav className={isMobileMenuOpen ? 'active' : ''}>
                <ul className="nav-list">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <NavLink
                                to={item.path}
                                onClick={closeMenu}
                                className={({ isActive }) => isActive ? 'active' : ''}
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                    <li className="theme-toggle-container">
                        <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme">
                            {theme === 'dark' ? '☀️' : '🌙'}
                        </button>
                    </li>
                </ul>
            </nav>

            <div className="menu-toggle" onClick={toggleMenu}>
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </div>
        </header>
    );
};

export default Navbar;
