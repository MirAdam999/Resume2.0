'use client';

import { forwardRef } from "react";

import Image from 'next/image'
import './project.css'
import { norm_font, wide_font_fat } from '../fonts'
import { FaReact, FaHtml5, FaCss3Alt, FaGithub, FaGlobe } from "react-icons/fa";
import { SiDjango, SiFlask } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { GrMysql } from "react-icons/gr";

const Project = forwardRef(function Project(props, ref) {
    const title = props.title
    const about = props.about
    const images = props.images
    const skills = props.skills
    const gitLink = props.gitLink
    const liveLink = props.liveLink
    const is_current = props.is_current

    const skillsDict = {
        'MSSQL': <div className={`used-skill ${norm_font.className}`} ><DiMsqlServer className="used-skill-icon" />MSSQL</div>,
        'MySQL': <div className={`used-skill ${norm_font.className}`}><GrMysql className="used-skill-icon" />MySQL</div>,
        'Django': <div className={`used-skill ${norm_font.className}`}><SiDjango className="used-skill-icon" />Django</div>,
        'Flask': <div className={`used-skill ${norm_font.className}`}><SiFlask className="used-skill-icon" />Flask</div>,
        'React': <div className={`used-skill ${norm_font.className}`}><FaReact className="used-skill-icon" />React</div>,
        'HTML': <div className={`used-skill ${norm_font.className}`}><FaHtml5 className="used-skill-icon" />HTML</div>,
        'CSS': <div className={`used-skill ${norm_font.className}`}><FaCss3Alt className="used-skill-icon" />CSS</div>
    }

    const goToCode = () => {
        window.open(gitLink, '_blank', 'noopener,noreferrer');
    };

    const goToLive = () => {
        window.open(liveLink, '_blank', 'noopener,noreferrer');
    };

    return (
        <div ref={ref} className={`project ${is_current}`}>

            <div className='proj-left'>
                <div className={`proj-title ${norm_font.className}`}>{title}</div>

                <div className='proj-links'>
                    <button className={`proj-link ${wide_font_fat.className}`} onClick={goToCode} ><FaGithub />Code</button>
                    <button className={`proj-link ${wide_font_fat.className}`} onClick={goToLive} ><FaGlobe />Live Demo</button>
                </div>

                <div className={`proj-about ${norm_font.className}`}>{about}</div>

                <div className='proj-used-skilles'>
                    {skills.map((skill, index) => (
                        <div className="used-skill-parent" key={index}>{skillsDict[skill]}</div>
                    ))}
                </div>
            </div>

            <div className='proj-right'>
                <Image className='proj-img'
                    src={images[0]}
                    alt={`${title}-image`}
                    width={500}
                    height={239.69}
                />
                <Image className='proj-img'
                    src={images[1]}
                    alt={`${title}-image`}
                    width={500}
                    height={239.69}
                />
                <Image className='proj-img'
                    src={images[2]}
                    alt={`${title}-image`}
                    width={500}
                    height={239.69}
                />
            </div>

        </div>
    )
})

export default Project;