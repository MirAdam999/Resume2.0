'use client';

import { forwardRef } from "react";

import Image from 'next/image'
import './project.css'
import { norm_font } from '../fonts'

const Project = forwardRef(function Project(props, ref) {
    const title = props.title
    const about = props.about
    const images = props.images
    const gitLink = props.gitLink
    const liveLink = props.liveLink
    const is_current = props.is_current

    return (
        <div ref={ref} className={`project ${is_current}`}>

            <div className='proj-left'>
                <div className={`proj-title ${norm_font.className}`}>{title}</div>
                <div className='proj-used-skilles'>
                    <div className='proj-used-skill'></div>
                </div>
                <div className={`proj-about ${norm_font.className}`}>{about}</div>
                <div className='proj-links'>
                    <a className='proj-link' href="https://github.com/MirShukhman" target="_blank" rel="noopener noreferrer">
                    </a>
                    <a className='proj-link' href="https://github.com/MirShukhman" target="_blank" rel="noopener noreferrer">
                    </a>
                </div>
            </div>

            <div className='proj-right'>
                <Image className='proj-img'
                    src={images[0]}
                    alt={`${title}-image`}
                    width={500}
                    height={239.69}
                />
                <Image className='proj-img'
                    src={images[1]}
                    alt={`${title}-image`}
                    width={500}
                    height={239.69}
                />
                <Image className='proj-img'
                    src={images[2]}
                    alt={`${title}-image`}
                    width={500}
                    height={239.69}
                />
            </div>

        </div>
    )
})

export default Project;