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
    // if (projects.length > takenProjects.length) {
    //   setTakenProjects(prevProjects => {
    //     const newProjects = projects.slice(prevProjects.length, prevProjects.length + 2);
    //     return [...prevProjects, ...newProjects];
    //   });
    // }
    // setLoading(false);
    setTimeout(() => {
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
    }, 2000);
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
        {takenProjects.map((project, index) => {
          const delay = 200 * index;

          // if (loading) {
          //   return (
          //     <h1 className="text-white font-bold">Loading...</h1>
          //   )
          // }

          return (
            <div
              ref={ref}
              key={project.thumbnail}
              style={{ animation: inView ? `fade-in 0.5s ease-out ${delay}ms forwards`: 'none' }}
              className={cn("opacity-0", inView ? 'animate-fade-in' : '')}
            >
              <ProjectCard title={project.title} thumbnail={project.thumbnail} />
            </div>
          )
        })}
      </div>
      {loading ? (
        <div className="w-[50%] aspect-video flex justify-center items-center">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#30D1DF', '#03214C', '#250C50', '#431974', '#C02DD8']}
          />
        </div>
      ): null}
      {takenProjects.length < projects.length && (
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