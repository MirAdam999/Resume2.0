'use client'

import { useState } from 'react'
import './carusel.css'
import ProjCard from '../card/card';
import EqupmentProj from '@/comps/projectpage_comps/proj-data/equpment-proj';
import EventhubProj from '@/comps/projectpage_comps/proj-data/eventhub-proj';
import SmishingProj from '@/comps/projectpage_comps/proj-data/smishing-proj';
import PegasusProj from '@/comps/projectpage_comps/proj-data/pegasus-proj';

const projects = [
    <ProjCard
        title={EqupmentProj.title}
        short_descript={EqupmentProj.short_descript}
        images={EqupmentProj.images}
        skills={EqupmentProj.skills}
        gitLink={EqupmentProj.gitLink}
        liveLink={EqupmentProj.liveLink}
    />,
    <ProjCard
        title={EventhubProj.title}
        short_descript={EventhubProj.short_descript}
        images={EventhubProj.images}
        skills={EventhubProj.skills}
        gitLink={EventhubProj.gitLink}
        liveLink={EventhubProj.liveLink}
    />,
    <ProjCard
        title={SmishingProj.title}

        images={SmishingProj.images}
        skills={SmishingProj.skills}
        gitLink={SmishingProj.gitLink}
        liveLink={SmishingProj.liveLink}
    />,
    <ProjCard
        title={PegasusProj.title}
        short_descript={PegasusProj.short_descript}
        images={PegasusProj.images}
        skills={PegasusProj.skills}
        gitLink={PegasusProj.gitLink}
        liveLink={PegasusProj.liveLink}
    />
]

export default function Carousel() {
    const [current, setCurrent] = useState(0)

    const goRight = () => {
        if (current >= projects.length - 1) {
            setCurrent(0);
        } else {
            setCurrent(current + 1);
        }
    };

    const goLeft = () => {
        if (current === 0) {
            setCurrent(projects.length - 1);
        } else {
            setCurrent(current - 1);
        }
    };

    return (
        <div className="carousel-container">
            <div className="carousel-btn" id='carousel-btn-l' onClick={goLeft}></div>
            <div className="carusel-inner">
                {projects.map((proj, index) => {
                    let className = "proj-on-carusel"
                    if (index === current) className += " center"
                    else if (index === current - 1 || (current === 0 && index === projects.length - 1)) className += " left"
                    else if (index === current + 1 || (current === projects.length - 1 && index === 0)) className += " right"
                    else className += " hidden"

                    return (
                        <div key={index} className={className}>
                            {proj}
                        </div>
                    )
                })}
            </div>
            <div className="carousel-btn" id='carousel-btn-r' onClick={goRight}></div>
        </div>
    )
}
