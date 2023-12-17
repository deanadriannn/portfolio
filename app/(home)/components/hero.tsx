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
    <div className="flex flex-col items-center justify-center overflow-hidden h-screen mobile:gap-5 mobile:px-5 tablet:gap-8 tablet:px-36 laptop:px-64 laptop:gap-10 desktop:gap-14 desktop:px-72"
    >
      <div className="relative mobile:h-28 mobile:w-28 tablet:h-52 tablet:w-52 laptop:w-64 laptop:h-64 desktop:w-80 desktop:h-80"
      >
        <Image 
          src="/assets/hero/profile.jpg"
          alt="profile"
          fill
          className="rounded-full"
        />
      </div>
      <h1 className={cn("font-extrabold text-center mobile:text-xl tablet:text-4xl laptop:text-5xl desktop:text-7xl", font.className)}>
        It&apos;s not just<br /><span className="primary-gradient bg-clip-text text-transparent">coding!</span>
      </h1>
      <p className="text-center text-secondary-text mobile:text-xs tablet:text-lg laptop:text-xl desktop:text-2xl">
        I am a full stack software engineer student, I create websites and  mobile apps by myself at my free time
      </p>
      <Button
        className="rounded-full font-bold bg-white mobile:my-3 mobile:text-[0.60rem] tablet:py-7 tablet:text-lg laptop:text-xl desktop:text-2xl desktop:py-9">
        Get In Touch
      </Button>
      <div className="flex flex-col justify-between items-center mobile:gap-5 laptop:gap-7 desktop:gap-9">
        <p className="font-semibold tracking-wider text-secondary-text mobile:text-sm tablet:text-xl laptop:text-2xl desktop:text-3xl">
          EXPERIENCE WITH
        </p>
        <div className="flex justify-between mobile:gap-5 tablet:gap-10 desktop:gap-12">
          {logos.map((logo, index) => {
            const delay = 200 * index;

            return (
              <div 
                key={logo.src} 
                style={{ animation: `slide 0.5s ease-out ${delay}ms forwards` }}
                className="relative opacity-0 mobile:h-5 mobile:w-5 tablet:w-10 tablet:h-10 laptop:h-12 laptop:w-12 desktop:h-14 desktop:w-14 animate-slide"
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