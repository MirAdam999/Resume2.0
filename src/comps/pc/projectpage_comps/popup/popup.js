'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import './popup.css'
import { norm_font } from '@/comps/fonts';
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { AiFillCloseSquare } from "react-icons/ai";

const Popup = (props) => {
    const current = props.current;
    const vid = props.vid
    const proj_images = props.proj_images;
    const setImage = props.setImage;
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
        if (proj_images.indexOf(current) >= proj_images.length - 1) {
            setImage('video')
        } else if (current === 'video') {
            setImage(proj_images[0])
        } else {
            setImage(proj_images[proj_images.indexOf(current) + 1])
        }
    };

    const goLeft = () => {
        if (proj_images.indexOf(current) == 0) {
            setImage('video')
        } else if (current === 'video') {
            setImage(proj_images[proj_images.length - 1])
        } else {
            setImage(proj_images[proj_images.indexOf(current) - 1])
        }
    };

    return (
        <div className='popup-wrapper'>

            <div className='popup-backround'></div>

            <div className="popup-inner">
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
                            Sorry — your browser doesn&apos;t support embedded videos..
                        </video> :
                        <Image className='img-popup'
                            src={current[0]}
                            alt={`image-${current[1]}`}
                            width={img_width}
                            height={img_height}
                        />}
                    <p className={`popup-img-descript ${norm_font.className}`}>{current === 'video' ? 'Video Demo' : current[1]}</p>
                </div>
                <div className='popup-icon' id="arrow-right" onClick={goRight}><TfiAngleRight /></div>

                <div className='popup-icon' id="close-popup" onClick={closePopup}><AiFillCloseSquare /></div>
            </div>

        </div >
    )

};

export default Popup;