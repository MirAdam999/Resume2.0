'use client'

import { useState } from 'react'
import './carusel.css'
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

const projects = ["PROJ 1", "PROJ 2", "PROJ 3", "PROJ 4", "PROJ 5"]

export default function Carousel() {
    const [current, setCurrent] = useState(0)

    const moveLeft = () => {
        setCurrent(prev => (prev - 1 + projects.length) % projects.length)
    }

    const moveRight = () => {
        setCurrent(prev => (prev + 1) % projects.length)
    }

    // Helper to wrap indexes
    const mod = (n, m) => (n + m) % m

    return (
        <div className="carousel-container">
            <div className="carousel-btn" onClick={moveLeft}><TfiAngleLeft /></div>
            <div className="carusel-inner">
                {projects.map((proj, index) => {
                    let className = "proj-on-carusel"
                    if (index === current) className += " center"
                    else if (index === mod(current - 1, projects.length)) className += " left"
                    else if (index === mod(current + 1, projects.length)) className += " right"
                    else className += " hidden"

                    return (
                        <div key={index} className={className}>
                            {proj}
                        </div>
                    )
                })}
            </div>
            <div className="carousel-btn" onClick={moveRight}><TfiAngleRight /></div>
        </div>
    )
}
