import projects from "@/meta/projects-data";
import ProjectType from "@/types/project.type";

function useProjects(): ProjectType[] {
  return projects;
}

export default useProjects;