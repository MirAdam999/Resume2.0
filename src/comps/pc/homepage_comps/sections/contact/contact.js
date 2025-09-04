'use client';

import './contact.css'
import { wide_font, norm_font, handwriting } from '@/comps/fonts';
import { useState } from 'react';
import { VscGithubAlt } from "react-icons/vsc";
import { IoDocumentTextOutline, IoMailOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

export default function Contact() {
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
        <div className="section" id="contact">

            <div id='header' className={wide_font.className}>Let&apos;s Connect!</div>

            <div id="contact-info" className={norm_font.className}>
                <div className="contact-left">
                    <div id='contact-sec'>
                        <FiPhoneCall className="contact-icon" />
                        <span onClick={() => handleCopy('+1 (431) 554-1539')}>+1 (431) 554-1539</span>
                    </div>
                    <div id='contact-sec'>
                        <IoMailOutline className="contact-icon" />
                        <span onClick={() => handleCopy('miriamsh888@gmail.com')}>miriamsh888@gmail.com</span>
                    </div>

                    <span id="copied" className={copied ? "show" : ""}>Copied!</span>
                </div>

                <div className="contact-right">
                    <a id='contact-sec' href="https://github.com/MirAdam999" target="_blank" rel="noopener noreferrer">
                        <VscGithubAlt className="contact-icon" />
                        <span>GitHub</span>
                    </a>
                    <a id='contact-sec' href="https://www.linkedin.com/in/miriam-adam-2b0a19169/" target="_blank" rel="noopener noreferrer">
                        <CiLinkedin className="contact-icon" />
                        <span>Linkedin</span>
                    </a>
                    <div id='contact-sec' onClick={DownloadCV}>
                        <IoDocumentTextOutline className="contact-icon" />
                        <span>Download CV</span>
                    </div>
                </div>
            </div>

            <div id='thanks' className={handwriting.className}>Thanks For Stopping By!</div>

        </div>
    )
}