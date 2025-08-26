
import Image from "next/image";
import './landing-mobile.css'
import StackMobile from "./stack/stack-mobile";
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

                <div className="stack-wrapper-mobile">
                    <StackMobile />
                </div>

            </div>

            <div className={norm_font.className} id="hello-mobile">
                Hello, I am <span className={norm_font_fat.className}>Miriam</span><br />
                and I am a<br />
                <span className={norm_font_fat.className} id="fsd-mobile">Full Stack Developer</span><br />
                It’s nice to meet You!<br />
            </div>


        </div>
    )
}