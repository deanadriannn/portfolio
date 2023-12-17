"use client";

import { Poppins } from "next/font/google";
import { useInView } from "react-intersection-observer";

import ExperienceCard from "@/components/custom/experience-card";
import { cn } from "@/lib/utils";
import { experience } from "@/constant";

const font = Poppins({ 
  weight: "800",
  subsets: ['latin'] 
});

const Experience = () => {
  const {ref, inView} = useInView({
    triggerOnce: true,
  });

  return (
    <div 
      id="experience"
      className="flex flex-col h-screen justify-start items-center mobile:gap-3 mobile:mb-7 tablet:gap-4 tablet:mb-2 laptop:gap-5 laptop:mb-4 scroll-mt-20 desktop:gap-6 pt-10"
    >
      <h1 
        className={cn(`blue-gradient bg-clip-text text-transparent font-extrabold mobile:text-lg laptop:text-2xl desktop:text-3xl opacity-0 animate-fade-in`, font.className)}
        style={{ animation: inView ? `fade-in 0.5s ease-out ${500}ms forwards`: 'none' }}
      >
        Experience
      </h1>
      <div className="grid grid-cols-1 gap-4 w-full" ref={ref}>
        {experience.map((exp) => (
          <ExperienceCard 
            key={exp.icon}
            icon={exp.icon}
            title={exp.title}
            timePeriod={exp.timePeriod}
            desciption={exp.desciption}
          />
        ))}
      </div>
    </div>
  )
};

export default Experience;