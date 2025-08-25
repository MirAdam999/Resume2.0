
import { wide_font } from "@/comps/fonts"
import './projects-mobile.css'
import ProjCardMobile from "./proj-card-mobile/proj-card-mobile";
import EqupmentProj from '@/comps/proj-data/equpment-proj';
import EventhubProj from '@/comps/proj-data/eventhub-proj';
import SmishingProj from '@/comps/proj-data/smishing-proj';
import PegasusProj from '@/comps/proj-data/pegasus-proj';

export default function ProjectsMobile() {
    const projects = [
        <ProjCardMobile
            title={EqupmentProj.title}
            short_descript={EqupmentProj.short_descript}
            images={EqupmentProj.images}
            skills={EqupmentProj.skills}
            gitLink={EqupmentProj.gitLink}
            liveLink={EqupmentProj.liveLink}
        />,
        <ProjCardMobile
            title={EventhubProj.title}
            short_descript={EventhubProj.short_descript}
            images={EventhubProj.images}
            skills={EventhubProj.skills}
            gitLink={EventhubProj.gitLink}
            liveLink={EventhubProj.liveLink}
        />,
        <ProjCardMobile
            title={SmishingProj.title}

            images={SmishingProj.images}
            skills={SmishingProj.skills}
            gitLink={SmishingProj.gitLink}
            liveLink={SmishingProj.liveLink}
        />,
        <ProjCardMobile
            title={PegasusProj.title}
            short_descript={PegasusProj.short_descript}
            images={PegasusProj.images}
            skills={PegasusProj.skills}
            gitLink={PegasusProj.gitLink}
            liveLink={PegasusProj.liveLink}
        />
    ]


    return (
        <div className="section-mobile" id="projects-mobile">
            <div id="header" className={wide_font.className}>Projects</div>
            <div id="projects-runner">
                {projects.map((proj, index) => {
                    return (
                        <div key={index} className='proj-mobile-card-wrapper'>
                            {proj}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};