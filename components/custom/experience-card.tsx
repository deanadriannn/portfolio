"use client";

import { useInView } from "react-intersection-observer";
import Image from "next/image";

import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  icon: string;
  title: string;
  timePeriod: string;
  desciption: string;
}

const ExperienceCard = ({icon, title, timePeriod, desciption}: ExperienceCardProps) => {
  const {ref, inView} = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="flex flex-col mobile:gap-1 laptop:gap-2">
      <div className="flex justify-between items-center gap-2">
        <div className="flex justify-start gap-2 items-center">
          <div className="relative mobile:h-4 mobile:w-4">
            <Image 
              src={icon}
              alt={title}
              fill
              className={cn("opacity-0", inView ? 'animate-fade-in' : '')}
              style={{ animation: inView ? `fade-in 0.5s ease-out 1000ms forwards`: 'none' }}
            />
          </div>
          <h1 
            className={cn("font-semibold mobile:text-[0.55rem] tablet:text-[0.6rem] laptop:text-[0.7rem] desktop:text-[0.8rem] opacity-0",
              inView ? 'animate-fade-in' : ''
            )}
            style={{ animation: inView ? `fade-in 0.5s ease-out 1000ms forwards`: 'none' }}
          >
            {title}
          </h1>
        </div>
        <p 
          className={cn(`w-fit text-secondary-text font-light mobile:text-[0.55rem] tablet:text-[0.6rem] laptop:text-[0.7rem] desktop:text-[0.8rem] opacity-0`,
            inView ? 'animate-fade-in' : ''
          )}
          style={{ animation: inView ? `fade-in 0.5s ease-out 1000ms forwards`: 'none' }}
        >
          {timePeriod}
        </p>
      </div>
      <p 
        className={cn(`text-secondary-text font-light mobile:text-[0.55rem] tablet:text-[0.6rem] laptop:text-[0.7rem] desktop:text-[0.8rem] opacity-0`,
          inView ? 'animate-fade-in' : ''
        )}
        style={{ animation: inView ? `fade-in 0.5s ease-out 1500ms forwards`: 'none' }}
      >
        {desciption}
      </p>
    </div>
  )
};

export default ExperienceCard;