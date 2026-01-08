
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <div className="menu-toggle" id="mobile-menu" onClick={toggleMenu}>
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </div>
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
                </ul>
            </nav>
        </header>
    );
};


export default Navbar;

