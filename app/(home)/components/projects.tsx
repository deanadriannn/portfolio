"use client";

import { Poppins } from "next/font/google";
import { useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
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

  return (
    <div 
      id="projects"
      className="snap-center flex flex-col justify-center h-screen items-center mobile:gap-5 mobile:px-5 tablet:px-24 tablet:gap-7 laptop:px-60"
    >
      <h1 
        className={cn(`orange-gradient bg-clip-text text-transparent font-extrabold mobile:text-lg desktop:text-3xl opacity-0 animate-fade-in`, font.className)}
        style={{ animation: inView ? `fade-in 0.5s ease-out ${500}ms forwards`: 'none' }}
      >
        Projects
      </h1>
      <div className="w-full grid mobile:gap-3 mobile:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-3">
        {projects.map((project, index) => {
          const delay = 100 * index;

          return (
            <div
              ref={ref}
              key={project.thumbnail}
              style={{ animation: inView ? `fade-in 0.5s ease-out ${1000+delay}ms forwards`: 'none' }}
              className="opacity-0 animate-fade-in"
            >
              <ProjectCard title={project.title} thumbnail={project.thumbnail} />
            </div>
          )
        })}
      </div>
      
      <Button 
        size="default"
        variant="outline" 
        className="flex items-center justify-between rounded-full w-28 focus:border-sky-400 hover:border-sky-400 px-5 hover:px-4 focus:px-4 transition-all mobile:text-[0.6rem] mobile:gap-2"
      >
        View More <ArrowRight className="mobile:w-3 mobile:h-3" />
      </Button>
    </div>
  )
};

export default Projects;