import Image from "next/image";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({ 
  weight: "800",
  subsets: ['latin'] 
});

const logos = [
  {
    src: "/assets/typescript.svg",
    alt: "typescript"
  },
  {
    src: "/assets/nextjs.svg",
    alt: "nextjs"
  },
  {
    src: "/assets/html.svg",
    alt: "html"
  },
  {
    src: "/assets/css.svg",
    alt: "css"
  },
  {
    src: "/assets/reactjs.svg",
    alt: "reactjs"
  },
]

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between overflow-hidden mobile:gap-7 mobile:mt-10 tablet:mt-0 laptop:gap-5">
      <div className="relative mobile:h-28 mobile:w-28 tablet:h-36 tablet:w-36 laptop:w-52 laptop:h-52 desktop:w-64 desktop:h-64">
        <Image 
          src="/assets/profile.jpg"
          alt="profile"
          fill
          className="rounded-full"
        />
      </div>
      <h1 className={cn("font-extrabold text-center mobile:text-2xl laptop:text-4xl desktop:text-5xl", font.className)}>
        It's not just<br /><span className="primary-gradient bg-clip-text text-transparent">coding!</span>
      </h1>
      <p className="text-center text-secondary-text mobile:text-xs laptop:text-base desktop:text-lg">
        I am a full stack software engineer student, I create websites and  mobile apps by myself at my free time
      </p>
      <Button className="rounded-full font-bold bg-white mobile:my-5 mobile:text-xs laptop:text-base">
        Get In Touch
      </Button>
      <div className="flex flex-col justify-between items-center mobile:gap-5 desktop:gap-7">
        <p className="font-semibold tracking-wider text-secondary-text mobile:text-sm laptop:text-base">
          EXPERIENCE WITH
        </p>
        <div className="flex justify-between mobile:gap-7">
          {logos.map(logo => (
            <div key={logo.src} className="relative mobile:h-5 mobile:w-5 laptop:h-7 laptop:w-7 desktop:h-9 desktop:w-9">
              <Image 
                src={logo.src}
                alt={logo.alt}
                fill
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};
