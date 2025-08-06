
import Image from "next/image";

import { wide_font, norm_font } from "@/app/comps/fonts";
import './about.css'

export default function About() {
    return (
        <div className="section" id="about">

            <div className="about-left">

                <div id='header' className={wide_font.className}>About Me</div>

                <div id="about-text" className={norm_font.className}>
                    Hi, I’m Miriam Adam — a Junior Full Stack Web Developer based in Winnipeg, MB, Canada. I’m passionate about building clean, efficient solutions with a strong emphasis on user-friendly interfaces.

                    <br /><br />After nearly a decade working as a Paramedic, I made a bold career shift into tech. What drew me in was the creative freedom of building things from scratch, and the rewarding challenge of solving real-world problems through code. My background in emergency medicine gave me a unique skillset that translates surprisingly well to development: quick thinking, adaptability, collaboration under pressure, and the ability to dive into work at any hour of the day or night.

                    <br /><br />When I’m not coding, you’ll find me out on nature walks, spending time with my pets, or experimenting in the kitchen.

                    <br /><br />TL;DR: I’m a career-switching “baby programmer” with a love for learning, a knack for solving problems, and a drive to grow in the tech world.
                </div>

            </div>

            <div className="about-right">
                <Image
                    src="/images/me.png"
                    alt="pc-screen"
                    width={460}
                    height={600}
                />
            </div>

        </div>
    )
}