import ProjectRow from "./ProjectRow"
import { projects } from "../constants"

const Projects = () => {
  return (
    <section id="projects" className="my-16 scroll-mt-38">
      <div className="text-center text-chocolate-milk font-bold text-4xl mb-16">
        Projects
      </div>

      {projects.map((project) => (
        <ProjectRow
          key={project.name}
          projectName={project.name}
          stack={project.stack}
          description={project.description}
          pictures={project.pictures}
          repository={project.repository}
        />
      ))}
    </section>
  )
}

export default Projects