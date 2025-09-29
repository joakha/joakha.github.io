import ProjectRow from "./ProjectRow"
import { projects } from "../constants"

const Projects = () => {
  return (
    <section id="projects" className="my-16 scroll-mt-32">
      <div className="text-center text-chocolate-milk font-bold text-4xl mb-16">
        Projects
      </div>

      {projects.map((project) => (
        <ProjectRow
          projectName={project.name}
          description={project.description}
          pictures={project.pictures}
        />
      ))}
    </section>
  )
}

export default Projects