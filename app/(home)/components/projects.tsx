"use client";

import { Poppins } from "next/font/google";
import { useState } from "react";
import { ArrowDown } from "lucide-react";

import ProjectCard from "@/components/custom/project-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { projects } from "@/constant";

const font = Poppins({ 
  weight: "800",
  subsets: ['latin'] 
});

const Projects = () => {
  const [totalProjects, setTotalProjects] = useState(2);
  const [takenProjects, setTakenProjects] = useState(projects.slice(0, totalProjects));

  const loadMoreProjects = () => {
    if (projects.length >= totalProjects) {
      setTotalProjects(prev => prev + 2);
      setTakenProjects(projects.slice(0, totalProjects))
    }
  };

  return (
    <div 
      id="projects"
      className="flex flex-col justify-start items-center mobile:gap-3 mobile:mb-7 tablet:gap-4 tablet:mb-2 
        laptop:gap-5 laptop:mb-4 scroll-mt-20 desktop:gap-6"
    >
      <h1 
        className={cn(`orange-gradient bg-clip-text text-transparent font-extrabold mobile:text-lg 
          laptop:text-2xl desktop:text-3xl`, font.className)}
      >
        Projects
      </h1>
      <div className="grid grid-cols-2 gap-4 w-full">
        {/* Take only 6 projects */}
        {takenProjects.map(project => (
          <ProjectCard key={project.thumbnail} title={project.title} thumbnail={project.thumbnail}/>
        ))}
      </div>
      {totalProjects <= projects.length && (
        <Button 
          className="rounded-full mt-5" 
          size="icon" 
          variant="outline"
          onClick={loadMoreProjects}
        >
          <ArrowDown className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
};

export default Projects;