import Image from "next/image";
import { Poppins } from "next/font/google";

import { logos } from "@/constant";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const font = Poppins({ 
  weight: "800",
  subsets: ['latin'] 
});

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden h-screen mobile:gap-5 mobile:px-5 tablet:gap-5 tablet:px-36 laptop:px-80"
    >
      <div className="relative mobile:h-28 mobile:w-28 desktop:w-32 desktop:h-32"
      >
        <Image 
          src="/assets/hero/profile.jpg"
          alt="profile"
          fill
          className="rounded-full"
        />
      </div>
      <h1 className={cn("font-extrabold text-center mobile:text-xl", font.className)}>
        It&apos;s not just<br /><span className="primary-gradient bg-clip-text text-transparent">coding!</span>
      </h1>
      <p className="text-center text-secondary-text mobile:text-xs">
        I am a full stack software engineer student, I create websites and  mobile apps by myself at my free time
      </p>
      <Button
        className="rounded-full font-bold bg-white mobile:my-3 mobile:text-[0.60rem] ">
        Get In Touch
      </Button>
      <div className="flex flex-col justify-between items-center mobile:gap-5 desktop:gap-9">
        <p className="font-semibold tracking-wider text-secondary-text mobile:text-sm">
          EXPERIENCE WITH
        </p>
        <div className="flex justify-between mobile:gap-5">
          {logos.map((logo, index) => {
            const delay = 200 * index;

            return (
              <div 
                key={logo.src} 
                style={{ animation: `slide 0.5s ease-out ${delay}ms forwards` }}
                className="relative opacity-0 mobile:h-5 mobile:w-5 animate-slide"
              >
                <Image 
                  src={logo.src}
                  alt={logo.alt}
                  fill
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
};

export default Hero;