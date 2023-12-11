import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({ 
  weight: "700",
  subsets: ['latin'] 
});

const Projects = () => {
  return (
    <div className="flex flex-col gap-5 justify-between items-center">
      <h1 className={cn("orange-gradient bg-clip-text text-transparent font-extrabold", font.className)}>Projects</h1>
      <div>Projects</div>
    </div>
  )
};

export default Projects;