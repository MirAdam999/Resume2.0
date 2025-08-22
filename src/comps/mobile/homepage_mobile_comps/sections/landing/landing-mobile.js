
import Image from "next/image";


import { norm_font, norm_font_fat } from "@/comps/fonts";

export default function LandingMobile() {
    const width = 200
    const height = width * 1.75

    return (
        <div className="section-mobile" id="landing-mobile">

            <div className="mobile-screen">
                <Image
                    src="/images/mobile.png"
                    alt="mobile-screen"
                    width={width}
                    height={height}
                />

                <div className="stack-wrapper">
                </div>

            </div>

            <div className={norm_font.className} id="hello">
                Hello, I am <span className={norm_font_fat.className}>Miriam</span><br />
                and I am a<br />
                <span className={norm_font_fat.className} id="fsd">Full Stack Developer</span><br />
                It’s nice to meet You!<br />
            </div>


        </div>
    )
}