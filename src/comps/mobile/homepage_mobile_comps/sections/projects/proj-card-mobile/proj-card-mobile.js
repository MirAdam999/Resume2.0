'use client';

import Image from 'next/image';
import Link from 'next/link';
import './proj-card-mobile.css'
import { norm_font, norm_font_fat } from '@/comps/fonts';
import { FaReact, FaHtml5, FaCss3Alt, FaGithub, FaGlobe } from "react-icons/fa";
import { SiDjango, SiFlask } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { GrMysql } from "react-icons/gr";

const ProjCardMobile = (props) => {
    const title = props.title;
    const short_descript = props.short_descript;
    const images = props.images.slice(0, 3);
    const skills = props.skills;
    const gitLink = props.gitLink;
    const liveLink = props.liveLink;
    const img_width = 330;
    const img_height = img_width / 2.086;

    const skillsDict = {
        'MSSQL': <div className={`used-skill ${norm_font.className}`} ><DiMsqlServer className="used-skill-icon" />MSSQL</div>,
        'MySQL': <div className={`used-skill ${norm_font.className}`}><GrMysql className="used-skill-icon" />MySQL</div>,
        'Django': <div className={`used-skill ${norm_font.className}`}><SiDjango className="used-skill-icon" />Django</div>,
        'Flask': <div className={`used-skill ${norm_font.className}`}><SiFlask className="used-skill-icon" />Flask</div>,
        'React': <div className={`used-skill ${norm_font.className}`}><FaReact className="used-skill-icon" />React</div>,
        'HTML': <div className={`used-skill ${norm_font.className}`}><FaHtml5 className="used-skill-icon" />HTML</div>,
        'CSS': <div className={`used-skill ${norm_font.className}`}><FaCss3Alt className="used-skill-icon" />CSS</div>
    };

    const goToCode = () => {
        window.open(gitLink, '_blank', 'noopener,noreferrer');
    };

    const goToLive = () => {
        window.open(liveLink, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className='project-mobile-card'>
            <div>
                <Image
                    className='card-img'
                    src={images[0][0]}
                    alt={`${images[0][1]}-image`}
                    width={img_width}
                    height={img_height}
                />
            </div>
            <div>{title}</div>
            <div className='proj-used-skilles' id='card-skills'>
                {skills.map((skill, index) => (
                    <div className="used-skill-parent" key={index}>{skillsDict[skill]}</div>
                ))}
            </div>
            <div>{short_descript}</div>
            <div className='card-buttons'>
                <button className={`card-button ${norm_font.className}`} onClick={goToCode}><FaGithub />Code</button>
                <Link href={{
                    pathname: '/projects',

                }} passHref id='prj-link'>
                    <button className={`card-button ${norm_font.className}`}>Read More</button>
                </Link>
                <button className={`card-button ${norm_font.className}`} onClick={goToLive}><FaGlobe />Live Demo</button>
            </div>
        </div>
    );
};

export default ProjCardMobile;
