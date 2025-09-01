import { lorem } from "../constants"
import profilePicture from "../assets/profilePicture.jpeg"

const Projects = () => {
  return (
      <section id="projects" className="my-16 scroll-mt-32">
        <div className="text-center text-chocolate-milk font-bold text-4xl mb-16">
          Projects
        </div>

        <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-10 mb-16">
          <div className="h-[300px w-[325px] lg:w-[439px]">
            <img src={profilePicture} className="rounded-md w-full h-full object-cover object-center" />
          </div>

          <div className="h-[300px] w-[325px] lg:w-[600px] bg-chocolate-light text-white text-justify p-6 overflow-auto rounded">
            {lorem}
          </div>
        </div>

        <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-10 mb-16">
          <div className="h-[300px w-[325px] lg:w-[439px]">
            <img src={profilePicture} className="rounded-md w-full h-full object-cover object-center" />
          </div>

          <div className="h-[300px] w-[325px] lg:w-[600px] bg-chocolate-light text-white text-justify p-6 overflow-auto rounded">
            {lorem}
          </div>
        </div>

        <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-10 mb-16">
          <div className="h-[300px w-[325px] lg:w-[439px]">
            <img src={profilePicture} className="rounded-md w-full h-full object-cover object-center" />
          </div>

          <div className="h-[300px] w-[325px] lg:w-[600px] bg-chocolate-light text-white text-justify p-6 overflow-auto rounded">
            {lorem}
          </div>
        </div>
      </section>
  )
}

export default Projects