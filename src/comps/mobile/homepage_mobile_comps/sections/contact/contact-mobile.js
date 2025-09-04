'use client';

import './contact-mobile.css'
import { wide_font, norm_font, handwriting } from '@/comps/fonts';
import { useState } from 'react';
import { IoDocumentTextOutline, IoMailOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

export default function ContactMobile() {
    const [copied, setCopied] = useState(false)

    const handleCopy = (textToCopy) => {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 1000);
            })
            .catch(err => {
                console.error('Failed to copy:', err);
            });
    };

    const DownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/CV.pdf';
        link.download = 'Miriam_Adam_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="section-mobile" id="contact-mobile">

            <div id='header' className={wide_font.className}>Let&apos;s Connect!</div>

            <div id="contact-info-mobile" className={norm_font.className}>
                <div id="contact-info-top">
                    <a id='contact-sec' href="https://github.com/MirAdam999" target="_blank" rel="noopener noreferrer">
                        <AiFillGithub className="contact-icon" />
                    </a>
                    <a id='contact-sec' href="https://www.linkedin.com/in/miriam-adam-2b0a19169/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className="contact-icon" />
                    </a>
                </div>

                <div id="contact-info-bottom">
                    <div id='contact-sec'>
                        <IoMailOutline className="contact-icon" />
                        <span onClick={() => handleCopy('miriamsh888@gmail.com')}>miriamsh888@gmail.com</span>
                    </div>
                    <div id='contact-sec'>
                        <FiPhoneCall className="contact-icon" />
                        <span onClick={() => handleCopy('+1 (431) 554-1539')}>+1 (431) 554-1539</span>
                    </div>
                    <div id='contact-sec' onClick={DownloadCV}>
                        <IoDocumentTextOutline className="contact-icon" />
                        <span>Download CV</span>
                    </div>
                    <span id="copied" className={copied ? "show" : ""}>Copied!</span>
                </div>

            </div>

            <div id='thanks' className={handwriting.className}>Thanks For Stopping By!</div>

        </div>
    )

}