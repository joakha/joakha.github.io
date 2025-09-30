import { skillBoxesContents } from "../constants"
import SkillBox from "./SkillBox"

const Skills = () => {
  return (
    <section id="skills" className="bg-chocolate-light scroll-mt-22">
      <div className="text-center text-chocolate-white font-bold text-4xl mt-16">
        Skills
      </div>

      <div className="flex flex-col flex-wrap items-center lg:flex-row lg:justify-center gap-10 p-16">
          {skillBoxesContents.map((boxContents) => (
            <SkillBox skillsInfo={boxContents} />
          ))}
      </div>
    </section>
  )
}

export default Skills