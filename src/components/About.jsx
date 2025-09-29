import { lorem } from "../constants"
import profilePicture from "../assets/profilePicture.jpeg"

const About = () => {
    return (
        <section id="about" className="my-16 scroll-mt-40">
            <div className="flex flex-col gap-4 items-center text-chocolate-milk font-bold mb-16">
                <div className="text-4xl">About Me</div>
                <div className="flex gap-4">
                    <a href="https://github.com/joakha"
                        className="text-xl hover:text-chocolate-dark underline underline-offset-6 font-bold text-choco"
                        target="_blank"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://github.com/joakha"
                        className="text-xl hover:text-chocolate-dark underline underline-offset-6  font-bold"
                        target="_blank"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>

            <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-10">
                <div className="h-[300px] w-[325px] md:w-[375px] lg:w-[439px]">
                    <img src={profilePicture} className="rounded-md w-full h-full object-cover object-center" />
                </div>

                <div className="h-[300px] w-[325px] md:w-[375px] lg:w-[500px] bg-chocolate-light text-white text-justify p-6 overflow-auto rounded">
                    {lorem}
                </div>
            </div>
        </section>
    )
}

export default About