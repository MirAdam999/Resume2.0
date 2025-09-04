'use client';

import { useRef, useEffect, useState } from "react";
import Link from 'next/link';
import Project from "@/comps/pc/projectpage_comps/project"
import EqupmentProj from "@/comps/proj-data/equpment-proj";
import EventhubProj from "@/comps/proj-data/eventhub-proj";
import SmishingProj from "@/comps/proj-data/smishing-proj";
import PegasusProj from "@/comps/proj-data/pegasus-proj";
import { wide_font, norm_font, norm_font_fat } from "@/comps/fonts"
import { AiFillHome } from "react-icons/ai";
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";
import './projects_page.css'

export default function ProjectsPage() {
    const [projectParam, setProjectParam] = useState(null);
    const [current, setCurrent] = useState(0)
    const refB = useRef(null);
    const [height, setHeight] = useState(0);

    const moveRight = () => {
        if (current === 0) {
            setCurrent(3)
        } else {
            setCurrent(current - 1)
        }
    }

    const moveLeft = () => {
        if (current === 3) {
            setCurrent(0)
        } else {
            setCurrent(current + 1)
        }
    }
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const proj = params.get("project");
        if (proj) setProjectParam(Number(proj));
    }, []);

    useEffect(() => {
        if (!refB.current) return;
        setHeight(refB.current.offsetHeight);
    }, [current]);

    useEffect(() => {
        if (projectParam !== null) {
            setCurrent(Number(projectParam));
        }
    }, [projectParam]);



    return (
        <div id='projects-page'>
            <div id="pp-top">

                <div id='pp-header'>
                    <span id='pph-myname' className={norm_font_fat.className}>Miriam Adam</span>
                    <span id='pph-projects' className={wide_font.className}>Projects</span>
                </div>

                <div id='pp-nav'>
                    <div className="icon-wrapper">
                        <SlArrowLeftCircle onClick={moveRight} className="nav-icon" />

                    </div>

                    <Link href="/" passHref>
                        <div className="icon-wrapper" id='home-icom-wrapper'>
                            <AiFillHome className="nav-icon" />
                        </div>
                    </Link>

                    <div className="icon-wrapper">
                        <SlArrowRightCircle onClick={moveLeft} className="nav-icon" />

                    </div>
                </div>

            </div>

            <div className="project-wrapper" style={{ height: height }}>
                <Project
                    title={EqupmentProj.title}
                    about={EqupmentProj.about}
                    images={EqupmentProj.images}
                    vid={EqupmentProj.video}
                    skills={EqupmentProj.skills}
                    gitLink={EqupmentProj.gitLink}
                    liveLink={EqupmentProj.liveLink}
                    is_current={current === 0 ? 'current_proj' : ''}
                    ref={current === 0 ? refB : null}
                />
                <Project
                    title={EventhubProj.title}
                    about={EventhubProj.about}
                    images={EventhubProj.images}
                    vid={EventhubProj.video}
                    skills={EventhubProj.skills}
                    gitLink={EventhubProj.gitLink}
                    liveLink={EventhubProj.liveLink}
                    is_current={current === 1 ? 'current_proj' : ''}
                    ref={current === 1 ? refB : null}
                />
                <Project
                    title={SmishingProj.title}
                    about={SmishingProj.about}
                    images={SmishingProj.images}
                    vid={SmishingProj.video}
                    skills={SmishingProj.skills}
                    gitLink={SmishingProj.gitLink}
                    liveLink={SmishingProj.liveLink}
                    is_current={current === 2 ? 'current_proj' : ''}
                    ref={current === 2 ? refB : null}
                />
                <Project
                    title={PegasusProj.title}
                    about={PegasusProj.about}
                    images={PegasusProj.images}
                    vid={PegasusProj.video}
                    skills={PegasusProj.skills}
                    gitLink={PegasusProj.gitLink}
                    liveLink={PegasusProj.liveLink}
                    is_current={current === 3 ? 'current_proj' : ''}
                    ref={current === 3 ? refB : null}
                />
            </div>

            <footer className={norm_font.className}>&copy; Miriam Adam 2025</footer>
        </div>
    )
}