'use client';

import { useState } from 'react';
import { wide_font } from "@/comps/fonts"
import './projects.css'
import HomepagePopup from "./popup/homepage-popup"
import Carousel from "./carusel/carusel"

export default function Projects() {
    const [imagePopUp, setImagePopUp] = useState(null);

    const openPopUp = (data) => {
        setImagePopUp(data)
    };

    const closePopUp = () => {
        setImagePopUp(null)
    };

    return (
        <div className="section" id="projects">
            {imagePopUp && <HomepagePopup closeImage={closePopUp} data={imagePopUp} />}

            <div id='header' className={wide_font.className}>Projects</div>
            <div id="projects-carusel">
                <Carousel openPopUp={openPopUp} />
            </div>
        </div>
    )
}