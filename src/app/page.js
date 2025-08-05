"use client";

import Image from "next/image";

import Stack from "./homepage_comps/stack";
import Carousel from "./homepage_comps/carusel";

import './page.css'

import { useState, useEffect } from "react";

import { Montserrat, Barlow, Satisfy } from 'next/font/google'

import { FaPython, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaDocker } from "react-icons/fa";
import { SiDjango, SiFlask, SiSqlite, SiMongodb } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { DiMsqlServer } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { VscAzure, VscGithubAlt } from "react-icons/vsc";
import { IoDocumentTextOutline, IoMailOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

const wide_font = Montserrat({
  subsets: ['latin'],
  weight: ['400']
})

const norm_font = Barlow({
  subsets: ['latin'],
  weight: ['400']
})

const norm_font_fat = Barlow({
  subsets: ['latin'],
  weight: ['700']
})

const handwriting = Satisfy({
  subsets: ['latin'],
  weight: ['400']
})

export default function Home() {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const DownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV.pdf';
    link.download = 'Miriam_Adam_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="main">

      <nav className={`navbar ${shrink ? 'shrink' : ''}`}>
        <div id="nav-link" className={wide_font.className}>Projects</div>
        <div id="nav-link" className={wide_font.className}>About</div>
        <div id="nav-link" className={wide_font.className}>Skills</div>
        <div id="nav-link" className={wide_font.className}>Contact</div>
      </nav>

      <div className="section-parent">
        <div className="section" id="landing">

          <div className={norm_font.className} id="hello">
            Hello, I am <span className={norm_font_fat.className}>Miriam</span><br />
            and I am a<br />
            <span className={norm_font_fat.className} id="fsd">Full Stack Developer</span><br />
            It’s nice to meet You!<br />
          </div>

          <div className="pc-screen">
            <Image
              src="/images/pc.png"
              alt="pc-screen"
              width={650}
              height={442} />

            <div className="stack-wrapper">
            </div>
          </div>

        </div>
      </div>

      <div className="section-parent" id='projetcs-parent'>
        <div className="section" id="projects">
          <div id='header' className={wide_font.className}>Projects</div>
          <div id="projects-carusel">
            <Carousel />
          </div>
        </div>
      </div>

      <div className="section-parent" id="about-parent">
        <div className="section" id="about">
          <div className="about-left">
            <div id='header' className={wide_font.className}>About Me</div>
            <div id="about-text" className={norm_font.className}>
              Hi, I’m Miriam Adam — a Junior Full Stack Web Developer based in Winnipeg, MB, Canada. I’m passionate about building clean, efficient solutions with a strong emphasis on user-friendly interfaces.

              <br /><br />After nearly a decade working as a Paramedic, I made a bold career shift into tech. What drew me in was the creative freedom of building things from scratch, and the rewarding challenge of solving real-world problems through code. My background in emergency medicine gave me a unique skillset that translates surprisingly well to development: quick thinking, adaptability, collaboration under pressure, and the ability to dive into work at any hour of the day or night.

              <br /><br />When I’m not coding, you’ll find me out on nature walks, spending time with my pets, or experimenting in the kitchen.

              <br /><br />TL;DR: I’m a career-switching “baby programmer” with a love for learning, a knack for solving problems, and a drive to grow in the tech world.
            </div>
          </div>
          <div className="about-right">
            <Image
              src="/images/me.png"
              alt="pc-screen"
              width={460}
              height={600} />
          </div>
        </div>
      </div>

      <div className="section-parent" id="skills-parent">
        <div className="section" id="skills">

          <div id="skills-left">
            <div id='header' className={wide_font.className}>Skills</div>
            <div id='skills-txt' className={norm_font.className}>
              Always <span>looking to learn</span><br />
              and expand my skillset
            </div>
          </div>

          <div id="skills-right" className={norm_font.className}>
            <div className="icon-row">
              <div className="icon-set"><FaPython className="icon" /><span>Python</span></div>
              <div className="icon-set"><SiDjango className="icon" /><span>Django</span></div>
              <div className="icon-set"><SiFlask className="icon" /><span>Flask</span></div>
              <div className="icon-set" id='pseudo'><SiFlask className="icon" /><span>Flask</span></div>
            </div>
            <div className="icon-row">
              <div className="icon-set"><RiJavascriptFill className="icon" /><span>Javascript</span></div>
              <div className="icon-set"><FaReact className="icon" /><span>React</span></div>
              <div className="icon-set"><FaHtml5 className="icon" /><span>HTML</span></div>
              <div className="icon-set"><FaCss3Alt className="icon" /><span>CSS</span></div>
            </div>
            <div className="icon-row">
              <div className="icon-set"><DiMsqlServer className="icon" /><span>MSSQL</span></div>
              <div className="icon-set"><SiSqlite className="icon" /><span>SQLite</span></div>
              <div className="icon-set"><GrMysql className="icon" /><span>MySQL</span></div>
              <div className="icon-set"><SiMongodb className="icon" /><span>MongoDB</span></div>
            </div>
            <div className="icon-row">
              <div className="icon-set"><FaGitAlt className="icon" /><span>Git</span></div>
              <div className="icon-set"><FaGithub className="icon" /><span>GitHub</span></div>
              <div className="icon-set"><FaDocker className="icon" /><span>Docker</span></div>
              <div className="icon-set"><VscAzure className="icon" /><span>Azure</span></div>
            </div>
          </div>

        </div>
      </div>

      <div className="section-parent" id="contact-parent">
        <div className="section" id="contact">

          <div id='header' className={wide_font.className}>Let's Connect!</div>

          <div id="contact-info" className={norm_font.className}>
            <div className="contact-left">
              <div id='contact-sec'><FiPhoneCall className="contact-icon" /><span>+1 (431) 554-1539</span></div>
              <div id='contact-sec'><IoMailOutline className="contact-icon" /><span>miriamsh888@gmail.com</span></div>
            </div>

            <div className="contact-right">
              <a id='contact-sec' href="https://github.com/MirShukhman" target="_blank" rel="noopener noreferrer"><VscGithubAlt className="contact-icon" /><span>GitHub</span></a>
              <a id='contact-sec' href="https://www.linkedin.com/in/miriam-adam-2b0a19169/" target="_blank" rel="noopener noreferrer"><CiLinkedin className="contact-icon" /><span>Linkedin</span></a>
              <div id='contact-sec' onClick={DownloadCV}><IoDocumentTextOutline className="contact-icon" /><span>Download CV</span></div>
            </div>
          </div>

          <div id='thanks' className={handwriting.className}>Thanks For Stopping By!</div>

        </div>
      </div>

      <footer className={norm_font.className}>	&copy; Miriam Adam 2025</footer>
    </div >
  );
}
