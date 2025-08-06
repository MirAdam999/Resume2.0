"use client";

import './navbar.css'
import { wide_font } from '../../fonts';

export default function Navbar(props) {
    const navbarLinkActive = props.navbarLinkActive;
    const setNavbarLinkActive = props.setNavbarLinkActive;
    const shrink = props.shrink;

    const handleNavbarUse = (e, id) => {
        e.preventDefault();
        const div = document.getElementById(id);
        if (div) {
            setNavbarLinkActive(id);
            div.scrollIntoView(
                {
                    behavior: 'smooth',
                    block: 'center'
                }
            );
        }
    };

    return (
        <nav className={`navbar ${shrink ? 'shrink' : ''}`}>
            <a className={`nav-link ${wide_font.className} ${navbarLinkActive === 'projetcs-parent' ? 'active-link' : ''}`}
                onClick={(e) => handleNavbarUse(e, 'projetcs-parent')}>Projects</a>

            <a className={`nav-link ${wide_font.className} ${navbarLinkActive === 'about-parent' ? 'active-link' : ''}`}
                onClick={(e) => handleNavbarUse(e, 'about-parent')}>About</a>

            <a className={`nav-link ${wide_font.className} ${navbarLinkActive === 'skills-parent' ? 'active-link' : ''}`}
                onClick={(e) => handleNavbarUse(e, 'skills-parent')}>Skills</a>

            <a className={`nav-link ${wide_font.className} ${navbarLinkActive === 'contact-parent' ? 'active-link' : ''}`}
                onClick={(e) => handleNavbarUse(e, 'contact-parent')}>Contact</a>
        </nav>

    )
}