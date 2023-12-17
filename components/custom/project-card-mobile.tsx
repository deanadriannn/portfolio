import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  thumbnail: string;
};

const ProjectCard = ({
  title,
  thumbnail
}: ProjectCardProps) => {
  return (
    <div className="w-full group cursor-pointer rounded-lg bg-[#2A2A2A]"> 
      <div className="w-full aspect-video relative">
        <Image 
          src={thumbnail}
          alt={title}
          fill
          className="rounded-t-lg"
        />
      </div>
      <div className="w-full flex justify-between items-center transition-all 
        ease-in-out mobile:px-3 mobile:py-1 group-hover:mobile:px-2 laptop:px-4 laptop:py-2 group-hover:laptop:px-3"
      >
        <div>
          <p className="text-secondary-text mobile:text-[0.3rem] laptop:text-[0.5rem]">CLICK HERE TO VISIT</p>
          <p className="font-semibold mobile:text-[0.5rem] laptop:text-[0.7rem]">{title.toUpperCase()}</p>
        </div>
        <div className="mobile:w-2.5 mobile:h-2.5 relative">
          <ArrowUpRight className="w-full h-full" />
        </div>
      </div>
    </div>
  )
};

export default ProjectCard;