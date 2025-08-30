'use client';

import Image from 'next/image';
import Link from 'next/link';
import './card.css'
import { norm_font, norm_font_fat } from '@/comps/fonts';
import { FaReact, FaHtml5, FaCss3Alt, FaGithub, FaGlobe, FaPlay } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";
import { SiDjango, SiFlask } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { GrMysql } from "react-icons/gr";

const ProjCard = (props) => {
    const title = props.title;
    const short_descript = props.short_descript;
    const images = props.images;
    const vid = props.vid
    const skills = props.skills;
    const gitLink = props.gitLink;
    const liveLink = props.liveLink;
    const current = props.current;
    const img_height = 165;
    const img_width = img_height * 1.8;
    const openPopUp = props.openPopUp

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

    const setDataForPopUp = (current) => {
        const data = {
            current: current,
            vid: vid,
            proj_images: images
        };
        openPopUp(data);
    };

    return (
        <div className={`card ${norm_font.className}`}>

            <div className='images-trio'>
                {images.slice(0, 3).map((image, index) => (
                    <Image
                        key={index}
                        onClick={() => setDataForPopUp(index)}
                        className='card-img'
                        src={image[0]}
                        alt={`${image[1]}-image`}
                        width={img_width}
                        height={img_height}
                    />
                ))}
            </div>

            <div className='card-txt'>
                <div className={`card-title ${norm_font_fat.className}`}>{title}</div>

                <div className='proj-used-skilles' id='card-skills'>
                    {skills.map((skill, index) => (
                        <div className="used-skill-parent" key={index}>{skillsDict[skill]}</div>
                    ))}
                </div>

                <div className='short-descript'>
                    {short_descript}
                </div>

                <div className='card-buttons'>
                    <button className={`card-button ${norm_font.className}`} onClick={() => setDataForPopUp('video')}><FaPlay />Video Demo</button>
                    <button className={`card-button ${norm_font.className}`} onClick={goToCode}><FaGithub />Code</button>
                    <Link href={{
                        pathname: '/projects',
                        query: { project: current }
                    }} passHref id='prj-link'>
                        <button className={`card-button ${norm_font.className}`}><MdMoreHoriz />Read More</button>
                    </Link>
                    {/*<button className={`card-button ${norm_font.className}`} onClick={goToLive}><FaGlobe />Live Demo</button>*/}
                </div>

            </div>

        </div>
    );

};

export default ProjCard;