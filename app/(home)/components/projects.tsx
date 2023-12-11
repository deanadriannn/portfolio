import { Poppins } from "next/font/google";

import ProjectCard from "@/components/custom/project-card";
import { cn } from "@/lib/utils";

const font = Poppins({ 
  weight: "800",
  subsets: ['latin'] 
});

const projects = [
  {
    title: "Project 1",
    thumbnail: "/assets/thumbnail-1.png"
  },
  {
    title: "Project 2",
    thumbnail: "/assets/thumbnail-2.png"
  },
]

const Projects = () => {
  return (
    <div className="flex flex-col gap-3 justify-start items-center h-screen">
      <h1 className={cn("orange-gradient bg-clip-text text-transparent font-extrabold", font.className)}>Projects</h1>
      <div className="grid mobile:grid-cols-2 gap-2 w-full">
        {projects.map(project => (
          <ProjectCard key={project.thumbnail} title={project.title} thumbnail={project.thumbnail}/>
        ))}
      </div>
    </div>
  )
};

export default Projects;