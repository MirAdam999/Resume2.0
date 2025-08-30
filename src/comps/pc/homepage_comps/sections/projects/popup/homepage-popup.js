'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import './homepage-popup.css'
import { norm_font } from '@/comps/fonts';
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { AiFillCloseSquare } from "react-icons/ai";

const HomepagePopup = (props) => {
    const [current, setCurrent] = useState(props.data.current);
    const vid = props.data.vid;
    const proj_images = props.data.proj_images;
    const closePopup = props.closeImage;
    const img_width = 1120;
    const img_height = img_width / 1.9;


    useEffect(() => {
        if (open) {
            document.body.classList.add("popup-open");
        } else {
            document.body.classList.remove("popup-open");
        }
        return () => document.body.classList.remove("popup-open");
    }, [open]);

    const goRight = () => {
        if (current === 'video') {
            setCurrent(0)
        } else if (current >= proj_images.length - 1) {
            setCurrent('video')
        } else {
            setCurrent(current + 1)
        }
    };

    const goLeft = () => {
        if (current === 'video') {
            setCurrent(proj_images.length - 1)
        } else if (current == 0) {
            setCurrent('video')
        } else {
            setCurrent(current - 1)
        }
    };

    return (
        <div className='homepage-popup-wrapper'>

            <div className='homepage-popup-backround'></div>

            <div className="homepage-popup-inner">
                <div className='popup-icon' id="arrow-left" onClick={goLeft}><TfiAngleLeft /></div>
                <div className='popup-img-wrap'>
                    {current === 'video' ?
                        <video
                            src={vid}
                            autoPlay={true}
                            muted={true}
                            controls={true}
                            loop={true}
                            id='projpage-vid'>
                            Sorry — your browser doesn't support embedded videos..
                        </video> :
                        <Image className='img-popup'
                            src={proj_images[current][0]}
                            alt={`image-${proj_images[current][1]}`}
                            width={img_width}
                            height={img_height}
                        />}
                    <p className={`popup-img-descript ${norm_font.className}`}>{current === 'video' ? 'Video Demo' : proj_images[current][1]}</p>
                </div>
                <div className='popup-icon' id="arrow-right" onClick={goRight}><TfiAngleRight /></div>

                <div className='popup-icon' id="close-popup" onClick={closePopup}><AiFillCloseSquare /></div>
            </div>

        </div >
    )

};

export default HomepagePopup;