'use client';

import Image from 'next/image';
import './popup.css'
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { AiFillCloseSquare } from "react-icons/ai";

const Popup = (props) => {
    const current_image = props.current_image;
    const proj_images = props.proj_images;
    const setImage = props.setImage;
    const closePopup = props.closeImage;
    const img_width = 1120
    const img_height = img_width / 2.086

    const goRight = () => {
        if (proj_images.indexOf(current_image) >= proj_images.length - 1) {
            setImage(proj_images[0])
        } else {
            setImage(proj_images[proj_images.indexOf(current_image) + 1])
        }
    };

    const goLeft = () => {
        if (proj_images.indexOf(current_image) == 0) {
            setImage(proj_images[proj_images.length - 1])
        } else {
            setImage(proj_images[proj_images.indexOf(current_image) - 1])
        }
    };

    return (
        <div className='popup-wrapper'>

            <div className='popup-backround'></div>

            <div className="popup-inner">
                <div className='popup-icon' id="arrow-left" onClick={goLeft}><TfiAngleLeft /></div>
                <Image className='img-popup'
                    src={current_image}
                    alt={`image`}
                    width={img_width}
                    height={img_height}
                />
                <div className='popup-icon' id="arrow-right" onClick={goRight}><TfiAngleRight /></div>

                <div className='popup-icon' id="close-popup" onClick={closePopup}><AiFillCloseSquare /></div>
            </div>

        </div>
    )

};

export default Popup;