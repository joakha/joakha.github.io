import { lorem } from "../constants"
import profilePic from "../assets/profilePic.jpeg"
import { aboutLinks } from "../constants"
import Link from "./Link"

const About = () => {
    return (
        <section id="about" className="my-16 scroll-mt-40">
            <div className="flex flex-col gap-4 items-center text-chocolate-milk font-bold mb-16">
                <div className="text-4xl">About Me</div>
                <div className="flex gap-4">
                    {aboutLinks.map((link) => (
                        <Link
                            key={link.name}
                            name={link.name}
                            address={link.address}
                        />
                    ))}
                </div>
            </div>

            <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-10">
                <div className="h-[350px] w-[325px] md:w-[375px] lg:w-[439px]">
                    <img src={profilePic} className="rounded-md w-full h-full object-cover object-center" />
                </div>

                <div className="h-[350px] w-[325px] md:w-[375px] lg:w-[500px] bg-chocolate-light text-white text-justify p-6 overflow-auto rounded">
                    {lorem}
                </div>
            </div>
        </section>
    )
}

export default About