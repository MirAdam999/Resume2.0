'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './proj-card-mobile.css'
import MobilePopupHomepage from '../popup-homepage/popup-homepage-mobile';
import { norm_font, norm_font_fat } from '@/comps/fonts';
import { FaReact, FaHtml5, FaCss3Alt, FaGithub, FaGlobe } from "react-icons/fa";
import { IoPlay } from "react-icons/io5";
import { SiDjango, SiFlask } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { BsThreeDots } from "react-icons/bs";

const ProjCardMobile = (props) => {
    const title = props.title;
    const short_descript = props.short_descript;
    const images = props.images.slice(0, 3);
    const vid = props.vid;
    const skills = props.skills;
    const gitLink = props.gitLink;
    const liveLink = props.liveLink;
    const [imgWidth, setImgWidth] = useState(0);
    const [imgHeight, setImgHeight] = useState(0);
    const index = props.index;
    const [image, setImage] = useState(null);

    const skillsDict = {
        'MSSQL': <div className={`used-skill ${norm_font.className}`} ><DiMsqlServer className="used-skill-icon" /></div>,
        'MySQL': <div className={`used-skill ${norm_font.className}`}><GrMysql className="used-skill-icon" /></div>,
        'Django': <div className={`used-skill ${norm_font.className}`}><SiDjango className="used-skill-icon" /></div>,
        'Flask': <div className={`used-skill ${norm_font.className}`}><SiFlask className="used-skill-icon" /></div>,
        'React': <div className={`used-skill ${norm_font.className}`}><FaReact className="used-skill-icon" /></div>,
        'HTML': <div className={`used-skill ${norm_font.className}`}><FaHtml5 className="used-skill-icon" /></div>,
        'CSS': <div className={`used-skill ${norm_font.className}`}><FaCss3Alt className="used-skill-icon" /></div>
    };

    useEffect(() => {
        const width = window.innerWidth;
        setImgWidth(width - 40);
        setImgHeight((width - 40) / 2.086);
    }, []);

    const goToCode = () => {
        window.open(gitLink, '_blank', 'noopener,noreferrer');
    };

    const goToLive = () => {
        window.open(liveLink, '_blank', 'noopener,noreferrer');
    };

    const closePopUp = () => {
        setImage(null);
    };

    return (
        <div className='project-mobile-card'>

            {image !== null && <MobilePopupHomepage current={image} closePopUp={closePopUp} images={images} vid={vid} imgWidth={imgWidth} />}

            <Image
                onClick={() => setImage(0)}
                className='card-img'
                src={images[0][0]}
                alt={`${images[0][1]}-image`}
                width={imgWidth}
                height={imgHeight}
            />

            <div className={`${norm_font_fat.className}`} id='proj-mobile-card-title'>
                {title}
            </div>

            <div className='proj-used-skilles' id='card-skills-mobile'>
                {skills.map((skill, index) => (
                    <div className="used-skill-parent" key={index}>{skillsDict[skill]}</div>
                ))}
            </div>

            <div className={`${norm_font.className}`} id='proj-mobile-card-descript'>
                {short_descript}
            </div>

            <div className='card-buttons-mobile'>
                <button className={`card-button ${norm_font.className}`} id='card-button-mobile-button' onClick={goToCode}>
                    <FaGithub id='card-button-mobile-icon' />Code
                </button>
                <button className={`card-button ${norm_font.className}`} id='card-button-mobile-button' onClick={() => setImage('video')}>
                    <IoPlay id='card-button-mobile-icon' />Demo
                </button>
                {/*<button className={`card-button ${norm_font.className}`} id='card-button-mobile-icon' onClick={goToLive}><FaGlobe /></button> */}
                <Link href={{
                    pathname: '/projects_mobile',
                    query: { project: index }
                }} passHref id='prj-link'>
                    <button className={`card-button ${norm_font.className}`} id='card-button-mobile-button'>
                        <BsThreeDots id='card-button-mobile-icon' />More
                    </button>
                </Link>
            </div>

        </div >
    );
};

export default ProjCardMobile;
