import ProjectSlider from "../components/ProjectSlider";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <main className="relative">
      <ProjectSlider projects={projects} />
    </main>
  );
};

export default Projects;
