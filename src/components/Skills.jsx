import { lorem } from "../constants"

const Skills = () => {
  return (
      <section id="skills" className="bg-chocolate-light scroll-mt-16">
        <div className="text-center text-chocolate-white font-bold text-4xl mt-16">
          Skills
        </div>

        <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-10 p-16">
          <div className="h-[300px] w-[325px] md:w-[375px] lg:w-[470px] bg-chocolate-milk text-white p-6 overflow-auto rounded flex-shrink-0">
            <h2 className="text-center text-2xl">Frontend</h2>
            <ul className="p-6">
              <li className="list-disc">React</li>
              <li className="list-disc">JavaScript</li>
            </ul>
          </div>

          <div className="h-[300px] w-[325px] md:w-[375px] lg:w-[470px] bg-chocolate-milk text-white text-justify p-6 overflow-auto rounded flex-shrink-0">
            {lorem}
          </div>
        </div>
      </section>
  )
}

export default Skills