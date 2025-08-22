
import { wide_font } from "@/comps/fonts"
import './projects.css'
import Carousel from "./carusel/carusel"

export default function Projects() {

    return (
        <div className="section" id="projects">
            <div id='header' className={wide_font.className}>Projects</div>
            <div id="projects-carusel">
                <Carousel />
            </div>
        </div>
    )
}