'use client'

import { useState } from 'react'
import './carusel.css'
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

export default function Carousel() {
    const [current, setCurrent] = useState(0)

    return (
        <div className="carousel-container">
            <div className="carousel-btn" id="carousel-btn-l"><TfiAngleLeft /></div>
            <div className='carusel-inner'>
                <div className='proj-on-carusel' id='p-l'>PROJ 1</div>
                <div className='proj-on-carusel' id='current'>PROJ 2</div>
                <div className='proj-on-carusel' id='p-r'>PROJ 3</div>
            </div>
            <div className="carousel-btn" id="carousel-btn-r"><TfiAngleRight /></div>
        </div>
    )
}
