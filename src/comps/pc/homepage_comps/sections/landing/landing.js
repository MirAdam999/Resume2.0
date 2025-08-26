
import Image from "next/image";

import './landing.css'
import { norm_font, norm_font_fat } from "@/comps/fonts";
import Stack from "./stack/stack";

export default function Landing() {

    return (
        <div className="section" id="landing">

            <div className={norm_font.className} id="hello">
                Hello, I am <span className={norm_font_fat.className}>Miriam</span><br />
                and I am a<br />
                <span className={norm_font_fat.className} id="fsd">Full Stack Developer</span><br />
                It’s nice to meet You!<br />
            </div>

            <div className="pc-screen">
                <Image
                    src="/images/pc.png"
                    alt="pc-screen"
                    width={650}
                    height={442}
                />

                <div className="stack-wrapper">
                    <Stack />
                </div>

            </div>

        </div>
    )
}