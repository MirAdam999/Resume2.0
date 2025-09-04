'use client'

import { useState } from 'react'
import './carusel.css'
import ProjCard from '../card/card';
import EqupmentProj from '@/comps/proj-data/equpment-proj';
import EventhubProj from '@/comps/proj-data/eventhub-proj';
import SmishingProj from '@/comps/proj-data/smishing-proj';
import PegasusProj from '@/comps/proj-data/pegasus-proj';

export default function Carousel(props) {
    const [current, setCurrent] = useState(0)
    const openPopUp = props.openPopUp

    const projects = [
        <ProjCard
            key={0}
            openPopUp={openPopUp}
            title={EqupmentProj.title}
            short_descript={EqupmentProj.short_descript}
            images={EqupmentProj.images}
            vid={EqupmentProj.video}
            skills={EqupmentProj.skills}
            gitLink={EqupmentProj.gitLink}
            liveLink={EqupmentProj.liveLink}
            current={current}
        />,
        <ProjCard
            key={1}
            openPopUp={openPopUp}
            title={EventhubProj.title}
            short_descript={EventhubProj.short_descript}
            images={EventhubProj.images}
            vid={EventhubProj.video}
            skills={EventhubProj.skills}
            gitLink={EventhubProj.gitLink}
            liveLink={EventhubProj.liveLink}
            current={current}
        />,
        <ProjCard
            key={2}
            openPopUp={openPopUp}
            title={SmishingProj.title}
            short_descript={SmishingProj.short_descript}
            images={SmishingProj.images}
            vid={SmishingProj.video}
            skills={SmishingProj.skills}
            gitLink={SmishingProj.gitLink}
            liveLink={SmishingProj.liveLink}
            current={current}
        />,
        <ProjCard
            key={3}
            openPopUp={openPopUp}
            title={PegasusProj.title}
            short_descript={PegasusProj.short_descript}
            images={PegasusProj.images}
            vid={PegasusProj.video}
            skills={PegasusProj.skills}
            gitLink={PegasusProj.gitLink}
            liveLink={PegasusProj.liveLink}
            current={current}
        />
    ]

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
