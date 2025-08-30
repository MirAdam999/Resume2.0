'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import './popup-homepage-mobile.css'
import { norm_font } from '@/comps/fonts';
import { IoArrowBackCircle, IoArrowForwardCircleSharp } from "react-icons/io5";
import { AiFillCloseSquare } from "react-icons/ai";

const MobilePopupHomepage = (props) => {
    const [current, setCurrent] = useState(props.current);
    const vid = props.vid;
    const images = props.images;
    const closePopUp = props.closePopUp;
    const imgWidth = props.imgWidth + 40;
    const imgHeight = imgWidth / 2.086;

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
        } else if (current >= images.length - 1) {
            setCurrent('video')
        } else {
            setCurrent(current + 1)
        }
    };

    const goLeft = () => {
        if (current === 'video') {
            setCurrent(images.length - 1)
        } else if (current === 0) {
            setCurrent('video')
        } else {
            setCurrent(current - 1)
        }
    };

    return (
        <div className='homepage-mobile-popup-wrapper'>

            <div className='homepage-mobile-popup-backround'></div>

            <div className="homepage-mobile-popup-inner">

                <p className={`popup-img-descript ${norm_font.className}`}>{current === 'video' ? 'Video Demo' : images[current][1]}</p>

                <div className='popup-img-wrap'>
                    {current === 'video' ?
                        <video
                            src={vid}
                            autoPlay={true}
                            muted={true}
                            controls={true}
                            loop={true}
                            id='mobile-vid'>
                            Sorry — your browser doesn't support embedded videos..
                        </video> :
                        <Image className='img-popup'
                            src={images[current][0]}
                            alt={`image-${images[current][1]}`}
                            width={imgWidth}
                            height={imgHeight}
                        />}
                </div>

                <div className='homepage-mobile-popup-nav'>
                    <div className='popup-icon' onClick={goLeft}><IoArrowBackCircle /></div>
                    <div className='popup-icon' onClick={closePopUp}><AiFillCloseSquare /></div>
                    <div className='popup-icon' onClick={goRight}><IoArrowForwardCircleSharp /></div>
                </div>

            </div>

        </div >
    )
};

export default MobilePopupHomepage;