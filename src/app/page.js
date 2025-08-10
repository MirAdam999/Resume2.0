'use client';

import { useState, useEffect } from "react";

import './page.css'
import { norm_font } from "../comps/fonts";

import Navbar from '../comps/homepage_comps/navbar/navbar';
import Skills from "../comps/homepage_comps/sections/skills/skills";
import Contact from "../comps/homepage_comps/sections/contact/contact";
import About from "../comps/homepage_comps/sections/about/about";
import Projects from "../comps/homepage_comps/sections/projects/projects";
import Landing from "../comps/homepage_comps/sections/landing/landing";

export default function Home() {
  const [shrink, setShrink] = useState(false);
  const [navbarLinkActive, setNavbarLinkActive] = useState('landing-parent');

  useEffect(() => {
    const sections = document.querySelectorAll('.section-parent');
    const viewportHeight = window.innerHeight;
    const offset = viewportHeight / 5;

    const updateActiveSection = () => {
      let currentId = navbarLinkActive;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= offset) {
          currentId = section.id;
        }
      });
      setNavbarLinkActive(currentId);
    };

    const navbarShrinkOnScroll = () => {
      setShrink(window.scrollY > 10);
    };

    window.addEventListener('scroll', navbarShrinkOnScroll);
    window.addEventListener('scroll', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', navbarShrinkOnScroll);
      window.removeEventListener('scroll', updateActiveSection);
    };
  }, []);

  return (
    <div className="main">

      <Navbar shrink={shrink} navbarLinkActive={navbarLinkActive} setNavbarLinkActive={setNavbarLinkActive} />

      <div className="section-parent" id='landing-parent'>
        <Landing />
      </div>

      <div className="section-parent" id='projetcs-parent'>
        <Projects />
      </div>

      <div className="section-parent" id="about-parent">
        <About />
      </div>

      <div className="section-parent" id="skills-parent">
        <Skills />
      </div>

      <div className="section-parent" id="contact-parent">
        <Contact />
      </div>

      <footer className={norm_font.className}>	&copy; Miriam Adam 2025</footer>

    </div >
  );
}
