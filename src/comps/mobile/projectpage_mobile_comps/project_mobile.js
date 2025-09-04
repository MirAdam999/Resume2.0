'use client';

import { forwardRef } from "react";
import './project_mobile.css'
import Image from 'next/image'
import { norm_font, norm_font_fat } from '../../fonts'
import { FaReact, FaHtml5, FaCss3Alt, FaGithub, FaGlobe } from "react-icons/fa";
import { SiDjango, SiFlask } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { GrMysql } from "react-icons/gr";

const ProjectMobile = forwardRef(function ProjectMobile(props, ref) {
    const title = props.title;
    const about = props.about;
    const images = props.images;
    const vid = props.vid;
    const skills = props.skills;
    const gitLink = props.gitLink;
    const liveLink = props.liveLink;
    const is_current = props.is_current;

    const skillsDict = {
        'MSSQL': <div className={`used-skill ${norm_font.className}`} ><DiMsqlServer className="used-skill-icon" /></div>,
        'MySQL': <div className={`used-skill ${norm_font.className}`}><GrMysql className="used-skill-icon" /></div>,
        'Django': <div className={`used-skill ${norm_font.className}`}><SiDjango className="used-skill-icon" /></div>,
        'Flask': <div className={`used-skill ${norm_font.className}`}><SiFlask className="used-skill-icon" /></div>,
        'React': <div className={`used-skill ${norm_font.className}`}><FaReact className="used-skill-icon" /></div>,
        'HTML': <div className={`used-skill ${norm_font.className}`}><FaHtml5 className="used-skill-icon" /></div>,
        'CSS': <div className={`used-skill ${norm_font.className}`}><FaCss3Alt className="used-skill-icon" /></div>
    };

    const goToCode = () => {
        window.open(gitLink, '_blank', 'noopener,noreferrer');
    };

    const goToLive = () => {
        window.open(liveLink, '_blank', 'noopener,noreferrer');
    };

    const img_w = 320;
    const img_h = img_w / 2.086;

    return (
        <div ref={ref} className={`project ${is_current}`} id='project-mobile'>

            <video
                src={vid}
                autoPlay={true}
                muted={true}
                controls={true}
                loop={true}
                id='projectpage-mobile-vid'>
                Sorry — your browser doesn&apos;t support embedded videos..
            </video>

            <div className="project-mobile-wrapper">

                <div className={`proj-title ${norm_font.className}`}>{title}</div>

                <div className='proj-used-skilles'>
                    {skills.map((skill, index) => (
                        <div className="used-skill-parent" key={index}>{skillsDict[skill]}</div>
                    ))}
                </div>

                <div className={`proj-about ${norm_font.className}`}>{about}</div>

                <div className='proj-links-mobile'>
                    <button className={`proj-link-mobile ${norm_font.className}`} onClick={goToCode} ><FaGithub id='proj-link-mobile-icon' />Code</button>
                    {/*<button className={`proj-link-mobile ${norm_font.className}`} onClick={goToLive} ><FaGlobe id='proj-link-mobile-icon' />Live Demo</button>*/}
                </div>

                <div id='project-mobile-images'>
                    <h3 className={`proj-img-header ${norm_font_fat.className}`}>Screenshots</h3>
                    {images.map((image, index) => (
                        <div key={index}>
                            <Image
                                key={index}
                                className='proj-img'
                                src={image[0]}
                                alt={`${image[1]}-image`}
                                width={img_w}
                                height={img_h}
                            />
                            <p className={`project-mobile-image-descript ${norm_font.className}`}>{image[1]}</p>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )

})

export default ProjectMobile;