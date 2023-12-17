"use client";

import { Poppins } from "next/font/google";
import { useState } from "react";
import { ArrowDown } from "lucide-react";
import { useInView } from 'react-intersection-observer';
import { ColorRing } from "react-loader-spinner";

import ProjectCard from "@/components/custom/project-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { projects } from "@/constant";

const font = Poppins({ 
  weight: "800",
  subsets: ['latin'] 
});

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [takenProjects, setTakenProjects] = useState(projects.slice(0, 2));
  const [loading, setLoading] = useState(false);

  const loadMoreProjects = () => {
    setLoading(true);
    
    if (projects.length > takenProjects.length) {
      setTakenProjects((prevProjects) => {
        const newProjects = projects.slice(
          prevProjects.length,
          prevProjects.length + 2
        );
        return [...prevProjects, ...newProjects];
      });
    }

    setLoading(false);
  };

  return (
    <div 
      id="projects"
      className="snap-center flex flex-col justify-start h-screen items-center mobile:gap-3 mobile:mb-7 tablet:gap-4 tablet:mb-2 laptop:gap-5 laptop:mb-4 desktop:gap-6 pt-10 overflow-y-auto"
    >
      <h1 
        className={cn(`orange-gradient bg-clip-text text-transparent font-extrabold mobile:text-lg laptop:text-2xl desktop:text-3xl opacity-0 animate-fade-in`, font.className)}
        style={{ animation: inView ? `fade-in 0.5s ease-out ${500}ms forwards`: 'none' }}
      >
        Projects
      </h1>
      <div className="flex flex-col gap-4 w-full">
        {takenProjects.map((project, index) => {
          const delay = 100 * index;

          return (
            <div
              ref={ref}
              key={project.thumbnail}
              style={{ animation: inView ? `fade-in 0.5s ease-out ${1000+delay}ms forwards`: 'none' }}
              className="opacity-0 animate-fade-in mb-3"
            >
              <ProjectCard title={project.title} thumbnail={project.thumbnail} />
            </div>
          )
        })}
      </div>
      {takenProjects.length < projects.length && (
        <Button 
          className="rounded-full" 
          size="icon" 
          variant="outline"
          onClick={loadMoreProjects}
          disabled={loading}
        >
          {loading ? (
            <ColorRing
              visible={true}
              height="1rem"
              width="1rem"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#30D1DF', '#03214C', '#250C50', '#431974', '#C02DD8']}
            />
          ): (
            <ArrowDown className="h-4 w-4" />
          )}
        </Button>
      )}
    </div>
  )
};

export default Projects;