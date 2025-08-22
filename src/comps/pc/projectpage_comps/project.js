'use client';

import { forwardRef, useState } from "react";

import Image from 'next/image'
import Popup from "./popup/popup";
import './project.css'
import { norm_font, wide_font_fat } from '../../fonts'
import { FaReact, FaHtml5, FaCss3Alt, FaGithub, FaGlobe } from "react-icons/fa";
import { SiDjango, SiFlask } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { GrMysql } from "react-icons/gr";

const Project = forwardRef(function Project(props, ref) {
    const title = props.title;
    const about = props.about;
    const images = props.images;
    const skills = props.skills;
    const gitLink = props.gitLink;
    const liveLink = props.liveLink;
    const is_current = props.is_current;

    const skillsDict = {
        'MSSQL': <div className={`used-skill ${norm_font.className}`} ><DiMsqlServer className="used-skill-icon" />MSSQL</div>,
        'MySQL': <div className={`used-skill ${norm_font.className}`}><GrMysql className="used-skill-icon" />MySQL</div>,
        'Django': <div className={`used-skill ${norm_font.className}`}><SiDjango className="used-skill-icon" />Django</div>,
        'Flask': <div className={`used-skill ${norm_font.className}`}><SiFlask className="used-skill-icon" />Flask</div>,
        'React': <div className={`used-skill ${norm_font.className}`}><FaReact className="used-skill-icon" />React</div>,
        'HTML': <div className={`used-skill ${norm_font.className}`}><FaHtml5 className="used-skill-icon" />HTML</div>,
        'CSS': <div className={`used-skill ${norm_font.className}`}><FaCss3Alt className="used-skill-icon" />CSS</div>
    };

    const [imagePopUp, setImagePopUp] = useState(null);

    const openImage = (image) => {
        setImagePopUp(image)
    };

    const closeImage = () => {
        setImagePopUp(null)
    };

    const goToCode = () => {
        window.open(gitLink, '_blank', 'noopener,noreferrer');
    };

    const goToLive = () => {
        window.open(liveLink, '_blank', 'noopener,noreferrer');
    };

    const img_w = 500;
    const img_h = img_w / 2.086;

    return (
        <div ref={ref} className={`project ${is_current}`}>

            {imagePopUp && <Popup setImage={openImage} closeImage={closeImage} proj_images={images} current_image={imagePopUp} />}

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
                {images.map((image, index) => (
                    <Image
                        key={index}
                        onClick={() => openImage(image)}
                        className='proj-img'
                        src={image[0]}
                        alt={`${image[1]}-image`}
                        width={img_w}
                        height={img_h}
                    />
                ))}
            </div>

        </div>
    )
})

export default Project;