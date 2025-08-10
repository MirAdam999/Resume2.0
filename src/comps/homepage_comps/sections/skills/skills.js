
import { wide_font, norm_font } from "@/comps/fonts";
import './skills.css'

import { FaPython, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaDocker } from "react-icons/fa";
import { SiDjango, SiFlask, SiSqlite, SiMongodb } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { DiMsqlServer } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { VscAzure } from "react-icons/vsc";

export default function Skills() {
    return (
        <div className="section" id="skills">

            <div id="skills-left">
                <div id='header' className={wide_font.className}>Skills</div>
                <div id='skills-txt' className={norm_font.className}>
                    Always <span>looking to learn</span><br />
                    and expand my skillset
                </div>
            </div>

            <div id="skills-right" className={norm_font.className}>
                <div className="icon-row">
                    <div className="icon-set"><FaPython className="icon" /><span>Python</span></div>
                    <div className="icon-set"><SiDjango className="icon" /><span>Django</span></div>
                    <div className="icon-set"><SiFlask className="icon" /><span>Flask</span></div>
                    <div className="icon-set" id='pseudo'><SiFlask className="icon" /><span>Flask</span></div>
                </div>
                <div className="icon-row">
                    <div className="icon-set"><RiJavascriptFill className="icon" /><span>Javascript</span></div>
                    <div className="icon-set"><FaReact className="icon" /><span>React</span></div>
                    <div className="icon-set"><FaHtml5 className="icon" /><span>HTML</span></div>
                    <div className="icon-set"><FaCss3Alt className="icon" /><span>CSS</span></div>
                </div>
                <div className="icon-row">
                    <div className="icon-set"><DiMsqlServer className="icon" /><span>MSSQL</span></div>
                    <div className="icon-set"><SiSqlite className="icon" /><span>SQLite</span></div>
                    <div className="icon-set"><GrMysql className="icon" /><span>MySQL</span></div>
                    <div className="icon-set"><SiMongodb className="icon" /><span>MongoDB</span></div>
                </div>
                <div className="icon-row">
                    <div className="icon-set"><FaGitAlt className="icon" /><span>Git</span></div>
                    <div className="icon-set"><FaGithub className="icon" /><span>GitHub</span></div>
                    <div className="icon-set"><FaDocker className="icon" /><span>Docker</span></div>
                    <div className="icon-set"><VscAzure className="icon" /><span>Azure</span></div>
                </div>
            </div>

        </div>
    )
}