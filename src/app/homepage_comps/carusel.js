'use client'

import { useState } from 'react'
import './carusel.css'
import { RiArrowLeftWideLine } from "react-icons/ri";

const slides = [
    { id: 1, content: 'Slide 1 Content' },
    { id: 2, content: 'Slide 2 Content' },
    { id: 3, content: 'Slide 3 Content' },
]

export default function Carousel() {
    const [current, setCurrent] = useState(0)

    const handlePrev = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }

    return (
        <div className="carousel-container">
            <RiArrowLeftWideLine className="carousel-btn" id="carousel-btn-l" onClick={handlePrev} />
            <div className="carousel-slide-wrapper">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`carousel-slide ${index === current ? 'active' : 'inactive'}`}
                    >
                        {slide.content}
                    </div>
                ))}
            </div>
            <RiArrowLeftWideLine className="carousel-btn" id="carousel-btn-r" onClick={handleNext} />
        </div>
    )
}
