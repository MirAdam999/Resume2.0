'use client';

import { useState, useEffect } from "react";

import './page.css'
import { norm_font } from "../comps/fonts";
import { IoIosArrowDropupCircle } from "react-icons/io";

import Navbar from '../comps/pc/homepage_comps/navbar/navbar';
import Skills from "../comps/pc/homepage_comps/sections/skills/skills";
import Contact from "../comps/pc/homepage_comps/sections/contact/contact";
import About from "../comps/pc/homepage_comps/sections/about/about";
import Projects from "../comps/pc/homepage_comps/sections/projects/projects";
import Landing from "../comps/pc/homepage_comps/sections/landing/landing";

import MobileNav from "@/comps/mobile/homepage_mobile_comps/nav/mobile-nav";
import LandingMobile from "@/comps/mobile/homepage_mobile_comps/sections/landing/landing-mobile";
import ProjectsMobile from "@/comps/mobile/homepage_mobile_comps/sections/projects/projects-mobile";
import AboutMobile from "@/comps/mobile/homepage_mobile_comps/sections/about/about-mobile";
import SKillsMobile from "@/comps/mobile/homepage_mobile_comps/sections/skills/skills-mobile";
import ContactMobile from "@/comps/mobile/homepage_mobile_comps/sections/contact/contact-mobile";

import Loading from "@/comps/loading/loading";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isPC, setIsPC] = useState(true);
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

    const checkSize = () => setIsPC(window.innerWidth >= 768);
    checkSize();
    setLoading(false);

    return () => {
      window.removeEventListener('scroll', navbarShrinkOnScroll);
      window.removeEventListener('scroll', updateActiveSection);
    };

  }, []);

  const goUp = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (loading) {
    return (
      <div className="loading"><Loading /></div>
    )
  } else {
    return (
      <div className="main">

        {isPC ?
          <Navbar shrink={shrink} navbarLinkActive={navbarLinkActive} setNavbarLinkActive={setNavbarLinkActive} /> :
          <MobileNav />}

        {isPC && shrink ? <a id='go-up' onClick={(e) => goUp(e)}><IoIosArrowDropupCircle /></a> : ''}

        <div className={`section-parent${isPC ? "" : "-mobile"}`} id={`landing-parent${isPC ? "" : "-mobile"}`}>
          {isPC ?
            <Landing /> :
            <LandingMobile />}
        </div>

        <div className={`section-parent${isPC ? "" : "-mobile"}`} id={`projetcs-parent${isPC ? "" : "-mobile"}`}>
          {isPC ?
            <Projects /> :
            <ProjectsMobile />}
        </div>

        <div className={`section-parent${isPC ? "" : "-mobile"}`} id={`about-parent${isPC ? "" : "-mobile"}`}>
          {isPC ?
            <About /> :
            <AboutMobile />}
        </div>

        <div className={`section-parent${isPC ? "" : "-mobile"}`} id={`skills-parent${isPC ? "" : "-mobile"}`}>
          {isPC ?
            <Skills /> :
            <SKillsMobile />}
        </div>

        <div className={`section-parent${isPC ? "" : "-mobile"}`} id={`contact-parent${isPC ? "" : "-mobile"}`}>
          {isPC ?
            <Contact /> :
            <ContactMobile />}
        </div>

        <footer className={norm_font.className}>	&copy; Miriam Adam 2025</footer>

      </div >
    );
  };
}
